import { NavLink } from "react-router-dom";
import { allApplications } from "../applicationsConfig";
import { Section } from "./Utils";
function ApplicationCard({ label, path, thumbnailImage, active }) {
  return (
    <NavLink
      to={path}
      className={`
        group relative block w-full overflow-hidden border bg-white
        shadow-sm transition
        md:hover:-translate-y-0.5 md:hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-teal-600/30

        ${active
          ? "border-brand-teal ring-2 ring-brand-teal/40"
          : "border-gray-200"}
      `}
    >
      {/* Mobile tap indicator */}
      {
        !active && (
          <div className="absolute bottom-2 right-2 z-30 rounded-full bg-white/90 p-2 text-brand-teal shadow md:hidden">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )
      }



      {active && (
        <div className="absolute right-2 top-2 z-30 rounded-lg bg-brand-teal px-2 py-1 text-[10px] font-semibold tracking-wide text-white sm:text-xs">
          YOU ARE HERE
        </div>
      )}

      {/* Image */}
      <img
        src={thumbnailImage}
        alt=""
        draggable="false"
        className={`
          absolute inset-0 h-full w-full object-cover
          transition duration-300
          ${active
            ? "opacity-100"
            : "opacity-100 md:opacity-0 md:group-hover:opacity-100"}
        `}
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0 bg-black/45 transition duration-300
          ${active
            ? "opacity-100"
            : "opacity-60 md:opacity-0 md:group-hover:opacity-100"}
        `}
      />

      {/* Label */}
      <div className="relative z-20 flex min-h-[180px] items-center justify-center px-4 py-6 sm:min-h-[240px] md:min-h-[320px]">
        <span
          className={`
            whitespace-pre-line text-center font-semibold
            text-lg sm:text-xl md:text-2xl
            ${active ? "text-white" : "text-white md:text-brand-teal md:group-hover:text-white"}
          `}
        >
          {label}
        </span>
      </div>
    </NavLink>
  );
}



export default function ApplicationsSection({ activeChild }) {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
      {allApplications.map((child) => (
        <ApplicationCard key={child.path} active={child === activeChild} {...child} />
      ))}
    </div>
  );
}
