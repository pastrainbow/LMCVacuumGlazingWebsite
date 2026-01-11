import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { navLinks } from "./navConfig.js";
import ProductInfo from "./components/ProductInfo.jsx";
import { allProducts } from "./productsConfig.js";
import { allApplications } from "./applicationsConfig.js";
import ApplicationInfo from "./components/ApplicationInfo.jsx";
import ScrollToHash from "./components/ScrollToHash.jsx";
import NotFound from "./pages/NotFound.jsx";
function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />

      <ScrollToHash />

      {/* Full-width main: pages control their own max-width */}
      <main className="w-full">{children}</main>

      <Footer />
    </div>
  );
}

function renderRoutesFromNav(links) {
  const routes = [];

  for (const l of links) {
    if (l.component) {
      const Page = l.component;
      routes.push(
        <Route
          key={l.path}
          path={l.path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      );
    }

    if (l.children?.length) {
      routes.push(...renderRoutesFromNav(l.children));
    }
  }

  return routes;
}

// Dynamically render routes from a children list and a component
function dynamicRenderRoutesFromChildren(Component, children) {
  const routes = [];

  for (const child of children) {
    routes.push(
      <Route
        key={child.path}
        path={child.path}
        element={
          <Layout>
            <Component child={child} />
          </Layout>
        }
      />
    );
  }

  return routes;
}

export default function App() {
  return (
    <Routes>
      {renderRoutesFromNav(navLinks)}
      {dynamicRenderRoutesFromChildren(ProductInfo, allProducts)}
      {dynamicRenderRoutesFromChildren(ApplicationInfo, allApplications)}
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}
