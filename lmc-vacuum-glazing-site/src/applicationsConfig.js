// Resized for faster load
import ImgHeritage from "./assets/applications/heritage.resized.jpg";
import ImgArchitecture from "./assets/applications/architecture.resized.jpg";
import ImgAgriculture from "./assets/applications/agriculture.resized.jpg";
import ImgAutomotive from "./assets/applications/automotive.resized.jpg";
import ImgFreezer from "./assets/applications/freezer.resized.jpg";

import Heritage from "./pages/applicationInfoBodies/Heritage.jsx"
import Agriculture from "./pages/applicationInfoBodies/Agriculture.jsx"
import Architecture from "./pages/applicationInfoBodies/Architecture.jsx"
import Automotive from "./pages/applicationInfoBodies/Automotive.jsx"
import Freezer from "./pages/applicationInfoBodies/Freezer.jsx"

export const allApplications = [
  {
    label: "Heritage and historic buildings",
    path: "/applications/heritage",
    thumbnailImage: ImgHeritage,
    thumbnailAlt: `Ornate historic building façade with tall arched windows, 
                   decorative stone carvings, and red-brick accents beneath 
                   a pale sky`,
    body: Heritage,
  },
  {
    label: "Architecture",
    path: "/applications/architecture",
    thumbnailImage: ImgArchitecture,
    thumbnailAlt: `Low-angle view of a modern curved building with layered 
                   vertical fins and blue-tinted windows against a clear sky.`,
    body: Architecture,
  },
  {
    label: "Agriculture",
    path: "/applications/agriculture",
    thumbnailImage: ImgAgriculture,
    thumbnailAlt: `Interior of a greenhouse with long rows of potted plants on 
                   raised beds, a central walkway, and a glass roof letting in 
                   natural light.`,
    body: Agriculture,
  },
  {
    label: "Automotive",
    path: "/applications/automotive",
    thumbnailImage: ImgAutomotive,
    thumbnailAlt: `Automated car manufacturing line with multiple robotic arms 
                   assembling a vehicle body inside an industrial factory.`,
    body: Automotive,
  },
  {
    label: "Freezer",
    path: "/applications/freezer",
    thumbnailImage: ImgFreezer,
    thumbnailAlt: `Gloved hand opening the door of a supermarket freezer aisle 
                   with packaged frozen foods visible inside.`,
    body: Freezer,
  },
];