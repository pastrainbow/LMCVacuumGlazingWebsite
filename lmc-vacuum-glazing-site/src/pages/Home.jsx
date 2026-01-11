import HomeHeroImage from "../assets/HomeHero.jpg";
import VacuumStructureImage from "../assets/VacuumGlassStructure.png"
import VacuumInfoImage from "../assets/VacuumGlazingInfo.png"
import VacuumPerformanceImage from "../assets/VacuumGlassPerformance.jpg"
import VacuumPropertiesImage from "../assets/VacuumGlassProperties.jpeg"

import ProductRangeSection from "../components/ProductRangeSection";
import ApplicationsSection from "../components/ApplicationsSection";
import ProjectSection from "../components/ProjectSection";

import GridBackground from "../components/GridBackground";

import {Title, Description, Button, Image, Section, NavSection} from "../components/Utils"

export default function Home() {
  return (
    <div className="w-full">

      <NavSection id="Home">
        {/* HERO IMAGE */}
        <section className="mx-auto">
          <div className="relative overflow-hidden bg-gray-100 shadow-sm
                          h-[60vh] max-h-[700px]">
            <img
              src={HomeHeroImage}
              alt="Vacuum glazing installed in heritage buildings"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* HERO IMAGE TEXT */}
        <Section>
          <div className="space-y-8">
            <Title className="text-brand-teal">
              The Future of Energy-Efficient Windows
            </Title>

            <Description>
              <p>
                Vacuum glazing is a cutting-edge window technology that combines 
                slim design with exceptional insulation. By creating a vacuum 
                between two panes of glass, it blocks heat loss far more 
                effectively than standard double glazing—achieving the performance
                of triple glazing in a much thinner profile.
              </p>

              <p>
                Perfect for{" "}
                <strong>
                  modern homes, heritage restorations, and sustainable buildings
                </strong>
                , vacuum glazing helps lower energy bills, reduce carbon 
                footprints, and keep interiors more comfortable year-round.
              </p>

              <div className="flex justify-left">
                <Button path="/contact">
                  Contact us
                </Button>
              </div>
              
            </Description>
          </div>
        </Section>
      </NavSection>


    {/* Vacuum Glass Structure */}
    <Section gridBackgroundClasses="bg-brand-gray">
      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4">
        <Title className="text-white">
          Vacuum Glass Structure
        </Title>

        <Image src={VacuumStructureImage} alt="Vacuum glass structure diagram"/>
      </div>
    </Section>


    {/* Vacuum Glazing Technology Info */}
    <Section>
      <Image src={VacuumInfoImage} alt="Vacuum glazing technology summary diagram"/>
    </Section>

    {/* Vacuum Glass Benefits */}
    <Section gridBackgroundClasses="bg-brand-gray">
      {/* Dark grid background */}
      <GridBackground className = "bg-brand-gray"/>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4">
        <Title className="text-white">
          Vacuum Glass Benefits
        </Title>

        <Image src={VacuumPerformanceImage} alt="Vacuum glass benefits diagram"/>
      </div>
    </Section>

    {/* Vacuum Glass Properties */}
    <Section>
      <Title>
        Product Average
      </Title>

      <Image src={VacuumPropertiesImage} alt="Vacuum glass properties grid diagram"/>
    </Section>

    <NavSection id="Products">
      <ProductRangeSection />
    </NavSection>
    
    <NavSection id="Applications">
      <Section>
        <div className="mx-auto max-w-6xl px-4">
          <Title>
            Applications
          </Title>
        </div>

        <ApplicationsSection/>
      </Section>
    </NavSection>

    {/* Projects */}
    <NavSection id="Projects">
      <Section gridBackgroundClasses="bg-brand-gray">
        {/* Content */}
        <div className="relative mx-auto max-w-6xl px-4">
          <Title className="text-white">
            Example Projects
          </Title>
          
          <ProjectSection />
          
        </div>
      </Section>
    </NavSection>

    </div>
  );
}
