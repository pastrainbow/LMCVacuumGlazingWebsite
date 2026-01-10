import { NavLink } from "react-router-dom";
import { allApplications } from "../applicationsConfig";

function ApplicationCard({ label, path, thumbnailImage, active }) {
  return (
    <NavLink
      to={path}
      className={`
        group relative block w-full
        overflow-hidden border bg-white
        shadow-sm transition
        hover:-translate-y-0.5 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-teal-600/30

        ${active
          ? "border-brand-teal ring-2 ring-brand-teal/40"
          : "border-gray-200"}
      `}
    >
      {/* Active badge */}
      {active && (
        <div className="absolute right-3 top-3 z-30 rounded bg-brand-teal px-2 py-1 text-xs font-semibold tracking-wide text-white">
          YOU ARE HERE
        </div>
      )}

      {/* Base content */}
      <div className="relative z-10 flex min-h-[400px] items-center justify-center px-4 py-5">
        <span
          className={`
            whitespace-pre-line text-center text-2xl font-semibold
            ${active ? "text-gray-300" : "text-brand-teal"}
          `}
        >
          {label}
        </span>
      </div>

      {/* Image layer */}
      <img
        src={thumbnailImage}
        alt=""
        draggable="false"
        className={`
          absolute inset-0 h-full w-full object-cover
          transition duration-300
          ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* Dark overlay */}
      <div
        className={`
          absolute inset-0 bg-black/45 transition duration-300
          ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        `}
      />

      {/* Hover-only text (inactive cards only) */}
      {!active && (
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4">
          <span
            className="
              whitespace-pre-line text-center text-2xl font-semibold text-white
              opacity-0 transition duration-300
              group-hover:opacity-100
            "
          >
            {label}
          </span>
        </div>
      )}
    </NavLink>
  );
}


export default function ApplicationsSection({ activeChild }) {
  return (
    <div className="mt-12 w-full">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
        {allApplications.map((child) => (
          <ApplicationCard key={child.path} active={child === activeChild} {...child} />
        ))}
      </div>
    </div>
  );
}
