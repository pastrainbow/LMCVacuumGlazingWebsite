import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";

// per-route SEO map (extend as needed)
const SEO = {
  "/": {
    title: "LMC Vacuum Glazing | Vacuum Glazing Merchant",
    description:
      "High-performance vacuum glazing for architecture, heritage buildings, agriculture, and sustainable construction.",
  },
  "/products/HybridVacuumGlass": {
    title: "Hybrid Vacuum Glass | LMC Vacuum Glazing",
    description:
      "Hybrid vacuum glass with excellent insulation, slim profile, and high light transmission.",
  },
  "/products/VacuumGlass": {
    title: "Vacuum Glass | LMC Vacuum Glazing",
    description:
      "Vacuum glass with excellent insulation, slim profile, and high light transmission.",
  },

};

export async function prerender(data) {
  const url = data?.url ?? "/";

  const html = renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );

  const meta = SEO[url] ?? SEO["/"];

  return {
    html,
    head: {
      title: meta.title,
      elements: new Set([
        { type: "meta", props: { name: "description", content: meta.description } },
        { type: "meta", props: { property: "og:title", content: meta.title } },
        { type: "meta", props: { property: "og:description", content: meta.description } },
      ]),
    },
  };
}
