import { GlassCard } from "./glass-card";

export function RepoSkeleton() {
  return (
    <GlassCard className="p-5 h-48 flex flex-col gap-3" hover={false}>
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-1">
          <div className="h-2 w-16 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
          <div className="h-3 w-32 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
        </div>
        <div className="w-7 h-7 rounded-lg dark:bg-white/5 bg-black/5 animate-pulse" />
      </div>
      <div className="space-y-1.5 flex-1">
        <div className="h-2 w-full rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
        <div className="h-2 w-4/5 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
      </div>
      <div className="flex gap-2">
        <div className="h-4 w-16 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
        <div className="h-4 w-12 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
      </div>
      <div className="flex justify-between pt-2 border-t dark:border-white/[0.06] border-black/[0.06]">
        <div className="h-4 w-16 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
        <div className="h-4 w-12 rounded-full dark:bg-white/10 bg-black/10 animate-pulse" />
      </div>
    </GlassCard>
  );
}
