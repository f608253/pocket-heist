import { SkeletonCard } from "@/components/Skeleton"

// preview page for newly created UI components

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Preview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}
