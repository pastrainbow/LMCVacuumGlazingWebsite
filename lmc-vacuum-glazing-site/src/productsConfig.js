import HybridTable from "./assets/HybridVacuumGlassProductTable.png";
import VacuumTable from "./assets/VacuumGlassProductTable.png";
export const allProducts = [
  {
    thumbnailImage: HybridTable,
    path: "/products/HybridVacuumGlass", 
    label: "Hybrid Vacuum Glass",
    description: `
      Hybrid Vacuum Glass combines the ultra-thin profile of vacuum
      glazing with enhanced structural and thermal performance. It delivers 
      exceptional insulation while remaining suitable for modern and heritage 
      applications.
    `,
    images: [
      {
        content: HybridTable, 
        alt: "Specification table for hybrid vacuum glazing glass"
      }
    ],
  },
  {
    thumbnailImage: VacuumTable,
    path: "/products/VacuumGlass", 
    label: "Vacuum Glass",
    description: `
      Vacuum Glass is an ultra-thin insulating glazing unit that uses a
      vacuum layer between glass panes to dramatically reduce heat transfer.
      It provides outstanding thermal insulation, noise reduction, and
      condensation resistance while maintaining a slim profile ideal for
      space-constrained and retrofit applications.
    `,
    images: [
      {
        content: VacuumTable, 
        alt: "Specification table for vacuum glazing glass"
      }
    ],
  },
];