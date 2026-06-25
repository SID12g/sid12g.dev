import Separator from "@/components/Separator";

function SkeletonBox({ className }: { className?: string }) {
  return (
    <div
      className={`bg-muted-15 rounded animate-pulse ${className ?? ""}`}
    />
  );
}

function PostCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 px-5 py-6 rounded-2xl border border-faint bg-muted-5">
      <div className="flex flex-col gap-2">
        <SkeletonBox className="h-4 w-3/4" />
        <SkeletonBox className="h-3 w-full" />
        <SkeletonBox className="h-3 w-5/6" />
      </div>
      <div className="flex flex-row items-center justify-between">
        <SkeletonBox className="h-3 w-24" />
        <div className="flex gap-2">
          <SkeletonBox className="h-6 w-16 rounded-full" />
          <SkeletonBox className="h-6 w-14 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function PostsSkeleton() {
  return (
    <div>
      <Separator title="POSTS" />
      <div className="flex flex-col gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
        <div className="py-3 rounded-lg border border-faint bg-muted-5">
          <SkeletonBox className="h-4 w-16 mx-auto" />
        </div>
      </div>
    </div>
  );
}
