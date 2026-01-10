import { useState } from "react";
import { NavLink } from "react-router-dom";

import { allProducts } from "../productsConfig";

function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductCard({ image, title, to }) {
  return (
    <div
      className="
        relative overflow-hidden bg-white shadow-lg
        [clip-path:polygon(0_0,100%_0,100%_calc(100%-48px),calc(100%-48px)_100%,0_100%)]
      "
    >
      {/* Image / table */}
      <div className="bg-gray-50 p-4">
        <img
          src={image}
          alt=""
          className="h-auto w-full object-contain"
          draggable="false"
        />
      </div>

      {/* Bottom content */}
      <div className="px-10 py-10">
        <h3 className="text-3xl font-extrabold tracking-tight text-brand-teal">
          {title}
        </h3>

        <div className="mt-4">
          <NavLink
            to={to}
            className="
              inline-flex items-center justify-center rounded-full
              bg-gray-900 px-7 py-3 text-sm font-semibold text-white
              shadow-sm transition hover:bg-gray-800
              focus:outline-none focus:ring-2 focus:ring-gray-900/20
            "
          >
            View product
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default function ProductRangeSection() {
  const [page, setPage] = useState(0);

  // 2 cards on desktop, 1 on small screens
  const perPage = 2;

  const maxPage = Math.max(0, Math.ceil(allProducts.length / perPage) - 1);

  const visible = allProducts.slice(page * perPage, page * perPage + perPage);

  const prev = () => setPage((p) => (p <= 0 ? maxPage : p - 1));
  const next = () => setPage((p) => (p >= maxPage ? 0 : p + 1));

  return (
    <section className="relative w-full overflow-hidden py-16">
      {/* Dark grid background (full width) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#4b4b4b",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Title + arrows row */}
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Our Product Range
          </h2>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full p-2 text-white/90 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Previous products"
            >
              <ChevronLeftIcon className="h-8 w-8" />
            </button>

            <button
              type="button"
              onClick={next}
              className="rounded-full p-2 text-white/90 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Next products"
            >
              <ChevronRightIcon className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {visible.map((it) => (
            <ProductCard
              key={it.label}
              image={it.thumbnailImage}
              title={it.label}
              to={it.path}
            />
          ))}

          {/* If only 1 item visible (e.g., odd count on last page), keep spacing nice */}
          {visible.length === 1 && <div className="hidden md:block" />}
        </div>
      </div>
    </section>
  );
}
