import ProjectSection from "../components/ProjectSection"
import { Section, Title } from "../components/Utils"
export default function Projects() {
  return (
    <Section gridBackgroundClasses="bg-brand-gray">
      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4">
        <ProjectSection /> 
      </div>
    </Section>
  )
}