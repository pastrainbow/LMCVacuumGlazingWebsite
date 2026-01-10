import { NavLink } from "react-router-dom";
import GridBackground from "./GridBackground";
export function Title({ children, className }) {
  return (
    <h1 className={`text-center text-3xl font-extrabold tracking-tight 
                   sm:text-4xl md:text-5xl ` + className}>
      {children}
    </h1>
  )
}

export function Description({ children }) {
  return (
     <div className="mx-auto space-y-6 text-lg leading-7 text-gray-600 
                     max-w-6xl">
      {children}                      
    </div>
  )
}

export function Image({ src, alt }) {
  return (
    <div className="mt-10 flex justify-center">
      <div className="rounded-md bg-white p-6 shadow-lg">
        <img
          src={src}
          alt={alt}
          className="h-auto max-w-full"
        />
      </div>
    </div>
  )
}

export function Button({ path, children}) {
  return (
    <NavLink
      to={path}
      className="inline-flex items-center justify-center rounded-full 
                  bg-gray-900 px-6 py-3 text-base font-semibold text-white 
                  shadow-sm transition hover:bg-gray-800 
                  focus:outline-none focus:ring-2 focus:ring-gray-900/20"
    >
      {children}
    </NavLink>
  )
}

export function Section({gridBackgroundClasses, children }) {
  return (
    <section className="mx-auto px-4 py-16 overflow-hidden relative">
      {gridBackgroundClasses && (
        <GridBackground className={gridBackgroundClasses}/>
      )}
      {children}
    </section>
  )
}

export function NavSection({ id, children }) {
  <div id={id} className="scroll-mt-24">
    {children}
  </div>
}