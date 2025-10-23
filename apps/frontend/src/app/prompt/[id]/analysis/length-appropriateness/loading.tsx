import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-1 flex-row gap-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton className="h-[200px] w-[200px]" key={index.toString()} />
      ))}
    </div>
  );
}
