import HomeHeroImage from "../assets/HomeHero.jpg"


import { Title } from "../components/Utils";


export default function Contact() {
  return (
    <section
      style={{ backgroundImage: `url(${HomeHeroImage})` }}
      className="relative min-h-[50vh] bg-cover bg-center flex items-center justify-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-brand-gray/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <Title className="text-white">
          Talk to our Vacuum Glazing Experts
        </Title>

        <p className="mt-6 text-2xl text-white/90 max-w-3xl">
          Whether you’re working on a heritage restoration, architectural project,
          or energy-efficient build, our team can help you choose the right vacuum
          glazing solution.
        </p>
      </div>
    </section>
  );
}


