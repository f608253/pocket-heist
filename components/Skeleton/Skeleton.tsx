import React from "react";
import styles from "./Skeleton.module.css";

export function SkeletonCard() {
  return (
    <div className="bg-light p-4 rounded-lg animate-pulse">
      {/* Header Skeleton */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-lighter rounded-full"></div>
        <div className="h-4 bg-lighter rounded w-1/3"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-lighter rounded w-full"></div>
        <div className="h-4 bg-lighter rounded w-5/6"></div>
        <div className="h-4 bg-lighter rounded w-4/6"></div>
      </div>
    </div>
  );
}

export function SkeletonList() {
  return (
    <div className="space-y-4">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
