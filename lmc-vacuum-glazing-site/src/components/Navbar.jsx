import { NavLink, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { navLinks } from "../navConfig.js";


function navItemClass({ isActive }) {
  return [
    "inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xl font-semibold",
    isActive ? "bg-white text-brand-teal" : "text-white hover:bg-brand-gray",
  ].join(" ");
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-brand-teal">
      <div className="mx-auto flex items-center gap-4 px-15 py-3">
        <div className="text-2xl font-extrabold tracking-tight text-white">
          LMC Vacuum Glazing
        </div>

        <nav className="ml-auto flex flex-wrap items-center gap-2">
          {navLinks.map((l) => {
            const hasChildren = !!l.children?.length;

            if (!hasChildren) {
              return (
                <NavLink key={l.path} to={l.path} end={l.end} className={navItemClass}>
                  {l.label}
                </NavLink>
              );
            }

            return <NavDropdown key={l.path} item={l} />;
          })}
        </nav>
      </div>
    </header>
  );
}

function NavDropdown({ item }) {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex">
        <NavigationMenu.Item>
          {/* Trigger */}
          <NavigationMenu.Trigger>
            
          <NavLink to={item.path} className={navItemClass}>
              {item.label}
              <span aria-hidden>▾</span>
          </NavLink>
          
          </NavigationMenu.Trigger>

          {/* Dropdown */}
          <NavigationMenu.Content
            className="absolute mt-2 w-56 rounded-2xl border bg-white p-2 shadow-lg"
          >
            {item.children.map((c) => (
              <NavLink
                key={c.path}
                to={c.path}
                className="block rounded-xl px-3 py-2 text-base font-semibold 
                           text-gray-900 hover:bg-brand-gray hover:text-white"
              >
                {c.label}
              </NavLink>
            ))}
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

