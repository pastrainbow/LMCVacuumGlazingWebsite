import ApplicationsSection from "../components/ApplicationsSection";
import { Section, Title } from "../components/Utils";
export default function Applications() {
  return (
    <main className="w-full">
      {/* Title section */}
      <Section gridBackgroundClasses="bg-brand-gray">
        <div className="relative">
        <Title className="text-white">
          Applications of Vacuum Glazing Glass
        </Title>
        <p className="mt-4 text-base text-white sm:text-lg text-center">
          Explore where our vacuum glazing glass delivers exceptional thermal
          performance, acoustic insulation, and long-term durability.
        </p>
        </div>
      </Section>

      {/* Existing grid */}
      <ApplicationsSection />
    </main>
  );
}
