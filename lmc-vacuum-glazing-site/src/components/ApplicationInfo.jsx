import Post from "./Post";
import ApplicationsSection from "./ApplicationsSection";

export default function ApplicationInfo({ child: application }) {
  return (
    <>
      <Post 
        thumbnailImage={application.thumbnailImage} 
        alt={application.thumbnailAlt}
        title={application.label}
        Body={application.body}
      />

      <h2 className="mt-12 mb-4 text-xl font-semibold text-center text-brand-gray">
        Explore other applications of our products...
      </h2>
      <ApplicationsSection activeChild={application}/>
      
    </>
  )
}