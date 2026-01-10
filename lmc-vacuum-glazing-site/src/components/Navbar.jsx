import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { navLinks } from "../navConfig.js";
import { useMemo, useState } from "react";

function navItemClass(isActive) {
  return [
    "inline-flex items-center gap-1 rounded-xl px-3 py-2 font-semibold transition",
    "text-base sm:text-lg", // smaller on mobile
    isActive ? "bg-white text-brand-teal" : "text-white hover:bg-brand-gray",
  ].join(" ");
}

function ScrollTopNavLink({ to, end, children, overwriteClassName}) {
  const navigate = useNavigate();
  const isHash = to.includes("#");
  const { pathname } = useLocation();
  const handleClick = (e) => {
    if (pathname === to) {
      // Already on this page → scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
    }
  };
  return (
    <NavLink to={to} end={end} onClick={handleClick} 
      className={
        overwriteClassName ? 
          overwriteClassName : 
          (({ isActive }) => (
            navItemClass(isActive && !isHash)
          ))
      }
    >
      {children}
    </NavLink>
  )
}


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const visibleLinks = useMemo(
    () => navLinks.filter((l) => !l.hidden),
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-brand-teal">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-10">
        {/* Brand */}
        <div className="text-lg font-extrabold tracking-tight text-white sm:text-2xl">
          LMC Vacuum Glazing
        </div>

        {/* Desktop nav */}
        <nav className="ml-auto hidden items-center gap-2 md:flex">
          {visibleLinks.map((l) => {
            const hasChildren = !!l.children?.length;
            if (!hasChildren) {
              return (
                <ScrollTopNavLink key={l.path} to={l.path} end={l.end}>
                  {l.label}
                </ScrollTopNavLink>
              );
            }
            return <NavDropdown key={l.path} item={l} />;
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="ml-auto inline-flex items-center justify-center rounded-xl p-2 text-white hover:bg-brand-gray md:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {/* simple icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-10">
            <div className="rounded-2xl bg-white/10 p-2 backdrop-blur">
              <MobileNav links={visibleLinks} onNavigate={() => setMobileOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileNav({ links, onNavigate }) {
  return (
    <div className="flex flex-col gap-1">
      {links.map((l) => {
        const hasChildren = !!l.children?.length;
        const isHash = l.path.includes("#");
        if (!hasChildren) {
          return (
            <ScrollTopNavLink
              key={l.path}
              to={l.path}
              end={l.end}
              onClick={onNavigate}
              className={({ isActive }) =>
                [
                  "rounded-xl px-3 py-2 text-base font-semibold transition",
                  (isActive && !isHash) ? "bg-white text-brand-teal" :
                    "text-white hover:bg-white/10",
                ].join(" ")
              }
            >
              {l.label}
            </ScrollTopNavLink>
          )
        }

        // Collapsible dropdown for mobile (touch friendly)
        return <MobileDisclosure key={l.path} item={l} onNavigate={onNavigate} />;
      })}
    </div>
  );
}

function MobileDisclosure({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl">
      <button
        className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-base font-semibold text-white hover:bg-white/10"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{item.label}</span>
        <span aria-hidden className="text-sm">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <div className="mt-1 space-y-1 pl-2">
          {item.children.map((c) => (
            <ScrollTopNavLink
              key={c.path}
              to={c.path}
              onClick={onNavigate}
              overwriteClassName={({ isActive }) =>
                [
                  "block rounded-xl px-3 py-2 text-sm font-semibold transition",
                  isActive ? "bg-white text-brand-teal" : "text-white/90 hover:bg-white/10 hover:text-white",
                ].join(" ")
              }
            >
              {c.label}
            </ScrollTopNavLink>
          ))}
        </div>
      )}
    </div>
  );
}

function NavDropdown({ item }) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex">
        <NavigationMenu.Item className="relative">
          <NavigationMenu.Trigger asChild>
            <button className="outline-none">
              <ScrollTopNavLink to={item.path}>
                {item.label} <span aria-hidden>▾</span>
              </ScrollTopNavLink>
            </button>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className="absolute mt-2 w-56 rounded-2xl border bg-white p-2 shadow-lg">
            {item.children.map((c) => (
              <ScrollTopNavLink
                key={c.path}
                to={c.path}
                overwriteClassName="block rounded-xl px-3 py-2 text-base font-semibold text-gray-900 hover:bg-brand-gray hover:text-white"
              >
                {c.label}
              </ScrollTopNavLink>
            ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
