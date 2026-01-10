import { NavLink } from "react-router-dom";

// Replace with your real product images
import ImgHero from "../assets/VacuumGlassProductTable.png";
import ImgDetail1 from "../assets/VacuumGlassProductTable.png";
import ImgDetail2 from "../assets/VacuumGlassProductTable.png";

export default function ProductPage( {product} ) {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="mx-auto max-w-screen-xl px-4 pt-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              product.label
            </h1>

            <p className="text-lg leading-7 text-gray-600">
              Hybrid Vacuum Glass combines the ultra-thin profile of vacuum glazing
              with enhanced structural and thermal performance. It delivers
              exceptional insulation while remaining suitable for modern and
              heritage applications.
            </p>

            <NavLink
              to="/contact"
              className="
                inline-flex items-center justify-center rounded-full
                bg-brand-teal px-8 py-3 text-sm font-semibold text-white
                shadow-sm transition hover:bg-brand-teal/90
                focus:outline-none focus:ring-2 focus:ring-brand-teal/30
              "
            >
              Contact us about this product
            </NavLink>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={ImgHero}
              alt="Hybrid Vacuum Glass unit"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Product Overview
            </h2>

            <p className="leading-7 text-gray-600">
              Hybrid Vacuum Glass is engineered to achieve extremely low U-values
              while maintaining a slim, lightweight form factor. By integrating
              vacuum insulation technology with advanced edge sealing and
              structural reinforcement, it delivers long-term durability and
              outstanding thermal performance.
            </p>

            <p className="leading-7 text-gray-600">
              This makes it ideal for:
            </p>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Heritage and listed buildings</li>
              <li>High-performance residential projects</li>
              <li>Commercial and architectural glazing</li>
              <li>Retrofit applications</li>
            </ul>
          </div>

          {/* Specs */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900">
              Key Specifications
            </h3>

            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <dt className="text-gray-500">Typical thickness</dt>
                <dd className="font-semibold text-gray-900">8–12 mm</dd>
              </div>

              <div className="flex justify-between border-b pb-2">
                <dt className="text-gray-500">U-value</dt>
                <dd className="font-semibold text-gray-900">≤ 0.6 W/m²K</dd>
              </div>

              <div className="flex justify-between border-b pb-2">
                <dt className="text-gray-500">Sound insulation</dt>
                <dd className="font-semibold text-gray-900">Up to 40 dB</dd>
              </div>

              <div className="flex justify-between border-b pb-2">
                <dt className="text-gray-500">Applications</dt>
                <dd className="font-semibold text-gray-900">Internal & external</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mx-auto max-w-screen-xl px-4 pb-20">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-gray-900">
          Product Details
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={ImgDetail1}
              alt="Hybrid vacuum glass cross-section"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100">
            <img
              src={ImgDetail2}
              alt="Hybrid vacuum glass installation"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Interested in {product.label}
          </h2>

          <p className="mt-4 text-gray-600">
            Get in touch with our team to discuss specifications, pricing, and
            suitability for your project.
          </p>

          <NavLink
            to="/contact"
            className="
              mt-8 inline-flex items-center justify-center rounded-full
              bg-brand-teal px-10 py-4 text-sm font-semibold text-white
              shadow-sm transition hover:bg-brand-teal/90
              focus:outline-none focus:ring-2 focus:ring-brand-teal/30
            "
          >
            Contact us
          </NavLink>
        </div>
      </section>
    </div>
  );
}
