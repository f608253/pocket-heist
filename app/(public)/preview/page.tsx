import { SkeletonCard } from "@/components/Skeleton"
import Avatar from "@/components/Avatar"

// preview page for newly created UI components

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>

      <h3 className="mt-8 mb-4">Skeleton UI</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      <h3 className="mt-8 mb-4">Avatar Component</h3>
      <div className="flex flex-row flex-wrap gap-8">
        <div className="flex items-center gap-2">
          <Avatar name="John Doe" />
          <span>Single letter (John Doe)</span>
        </div>
        <div className="flex items-center gap-2">
          <Avatar name="JohnDoe" />
          <span>PascalCase (JohnDoe)</span>
        </div>
        <div className="flex items-center gap-2">
          <Avatar name="Alice" />
          <span>Single letter (Alice)</span>
        </div>
        <div className="flex items-center gap-2">
          <Avatar name="ManvendraSingh" />
          <span>PascalCase (ManvendraSingh)</span>
        </div>
      </div>
    </div>
  )
}
