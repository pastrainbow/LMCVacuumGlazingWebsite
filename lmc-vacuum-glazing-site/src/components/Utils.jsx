import { NavLink } from "react-router-dom";
import GridBackground from "./GridBackground";

export function Title({ children, className = "" }) {
  return (
    <h1
      className={
        `text-center font-extrabold tracking-tight
         text-2xl leading-tight
         sm:text-3xl sm:leading-tight
         md:text-4xl
         lg:text-5xl ` + className
      }
    >
      {children}
    </h1>
  );
}

export function Description({ children, className = "" }) {
  return (
    <div
      className={
        `mx-auto max-w-3xl
         space-y-4
         text-base leading-7 text-gray-600
         sm:space-y-5 sm:text-lg ` + className
      }
    >
      {children}
    </div>
  );
}

export function Image({ src, alt, className = "" }) {
  return (
    <div className="mt-8 sm:mt-10 flex justify-center px-0 sm:px-2">
      <div className="w-full max-w-3xl rounded-xl bg-white p-3 sm:p-6 shadow-lg">
        <img
          src={src}
          alt={alt}
          className={
            `h-auto w-full max-w-full rounded-lg object-contain ` + className
          }
          loading="lazy"
        />
      </div>
    </div>
  );
}

export function Button({ path, children, className = "" }) {
  return (
    <NavLink
      to={path}
      className={
        `inline-flex items-center justify-center rounded-full
         bg-gray-900 text-white shadow-sm transition
         hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20
         px-5 py-2.5 text-sm font-semibold
         sm:px-6 sm:py-3 sm:text-base
         w-full sm:w-auto ` + className
      }
    >
      {children}
    </NavLink>
  );
}

export function Section({ gridBackgroundClasses, children, className = "" }) {
  return (
    <section
      className={
        `relative mx-auto overflow-hidden
         px-4 py-10
         sm:px-6 sm:py-14
         lg:px-8 lg:py-16 ` + className
      }
    >
      {gridBackgroundClasses && <GridBackground className={gridBackgroundClasses} />}
      {children}
    </section>
  );
}

export function NavSection({ id, children, className = "" }) {
  return (
    <div
      id={id}
      className={`scroll-mt-20 sm:scroll-mt-24 ` + className}
    >
      {children}
    </div>
  );
}
