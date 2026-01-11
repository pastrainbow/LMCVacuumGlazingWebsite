import ImageCarousel from "../components/ImageCarousel"

import GrantDeneau from "../assets/projects/GrantDeneau.jpg"
import Henrick from "../assets/projects/Henrick.jpg"
import Jinxiu from "../assets/projects/Jinxiu.jpg"
import MaWan from "../assets/projects/MaWan.jpg"
import PurpleHorse from "../assets/projects/PurpleHorse.jpg"
import Regent from "../assets/projects/Regent.jpg"

const projectImages = [
  {
    content: GrantDeneau,
    alt: "Grant Deneau Building in US",
  },
  {
    content: Henrick,
    alt: "Henrick Medical Center in Texas",
  },
  {
    content: Regent,
    alt: "Regent Hotel Hongkong",
  },
  {
    content: PurpleHorse,
    alt: "Purple Horse Garden Hotel (Beijing)",
  },
  {
    content: MaWan,
    alt: `District Ma Wan Waste-to-engery Power Plant Engergy Center (Vacuum 
          Glass photovoltaic hybrid China-Switzerland International Energy 
          Cooperation Project)`
  },
  {
    content: Jinxiu,
    alt: "Jinxiu Mansion (Passive Ultra-low energy building)"
  }

]

export default function ProjectSection() {
  return (
    <div className="my-6">
      <ImageCarousel images={projectImages}/>      
    </div>
  )
}