import { NavLink } from "react-router-dom";
import LightboxImage from "./LightboxImage";
import ImageCarousel from "./ImageCarousel.jsx";

export default function ProductInfo({ child: product }) {
  const hasImages = Array.isArray(product?.images) && product.images.length > 0;

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      {/* HERO */}
      <section className="mx-auto max-w-screen-xl px-4 pt-10 sm:pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          {/* soft decorative */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-teal/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-gray-200/50 blur-3xl" />

          <div className="grid gap-10 p-6 sm:p-10 md:grid-cols-2 md:items-center">
            {/* Text */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                  <span className="h-2 w-2 rounded-full bg-brand-teal" />
                  Product information
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  {product.label}
                </h1>

                <p className="max-w-prose text-lg leading-7 text-gray-600">
                  {product.description}
                </p>
              </div>

              {/* Quick actions */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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

              {/* Lightweight “meta” row (safe if you don’t have extra data) */}
              <div className="grid gap-3 pt-2 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-xs font-medium text-gray-500">Use cases</p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Residential & commercial
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <p className="text-xs font-medium text-gray-500">Support</p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    Spec guidance included
                  </p>
                </div>
              </div>
            </div>

            {/* Media */}
            <div className="md:pl-6">
              {/* If you later re-enable product.thumbnailImage, this will just work */}
              {product?.thumbnailImage ? 
                (<LightboxImage image={product.thumbnailImage} alt={product.label} />)
                 : (
                // Fallback so the right column never looks “blank”
                <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                  <div>
                    <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-teal" />
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      Product imagery coming soon
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      In the meantime, see detailed images below.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="mx-auto max-w-screen-xl px-4 py-14 sm:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Product Details
          </h2>
          <p className="mt-3 text-gray-600">
            High-resolution views to help you assess the detailed specifications.
          </p>
        </div>

        {hasImages ? (<ImageCarousel images={product.images}/>) : (
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              No images available yet
            </p>
            <p className="mt-2 text-gray-600">
              Contact us and we’ll share spec sheets and visuals for your use
              case.
            </p>

            <NavLink
              to="/contact"
              className="
                mt-6 inline-flex items-center justify-center rounded-full
                bg-brand-teal px-8 py-3 text-sm font-semibold text-white
                shadow-sm transition hover:bg-brand-teal/90
                focus:outline-none focus:ring-2 focus:ring-brand-teal/30
              "
            >
              Contact us
            </NavLink>
          </div>
        )}
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="grid gap-8 p-8 sm:p-12 md:grid-cols-3 md:items-center">
              <div className="md:col-span-2">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Interested in {product.label}?
                </h2>
                <p className="mt-3 text-gray-600">
                  Talk to our team about specifications, pricing, lead times,
                  and suitability for your project.
                </p>
              </div>

              <div className="md:justify-self-end">
                <NavLink
                  to="/contact"
                  className="
                    inline-flex w-full items-center justify-center rounded-full
                    bg-brand-teal px-10 py-4 text-sm font-semibold text-white
                    shadow-sm transition hover:bg-brand-teal/90
                    focus:outline-none focus:ring-2 focus:ring-brand-teal/30
                    md:w-auto
                  "
                >
                  Contact us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
