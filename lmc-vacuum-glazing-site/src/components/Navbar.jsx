import { NavLink, Link, useLocation, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { navLinks } from "../navConfig.js";


function navItemClass({ isActive }) {
  return [
    "inline-flex items-center gap-1 rounded-xl px-3 py-2 text-xl font-semibold",
    isActive ? "bg-white text-brand-teal" : "text-white hover:bg-brand-gray",
  ].join(" ");
}


function NavItem({ to, end, children }) {
  const isHash = to.includes("#");

  let isActive = false;

  if (isHash) {
    return (
      <Link
        to={to}
        className={navItemClass({ isActive })}
      >
        {children}
      </Link>
    );
  }

  return (
    <NavLink to={to} end={end} className={navItemClass}>
      {children}
    </NavLink>
  );
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
            if (l.hidden) {
              return;
            }

            const hasChildren = !!l.children?.length;

            if (!hasChildren) {
              return (
                <NavItem key={l.path} to={l.path} end={l.end}>
                  {l.label}
                </NavItem>
              );
            }
            else {
              return <NavDropdown key={l.path} item={l} />;
            }
            
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

          <NavItem key={item.path} to={item.path}>
            {item.label}
            <span aria-hidden>▾</span>
          </NavItem>
          
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

