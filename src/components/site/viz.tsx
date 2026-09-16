import { cn } from "@/lib/utils";

const BARS = [0.55, 0.9, 0.4, 1, 0.7, 0.35, 0.85, 0.5, 0.95, 0.6];

export function Viz({ playing, className }: { playing?: boolean; className?: string }) {
  return (
    <div
      className={cn("flex h-6 items-end gap-px", className)}
      aria-hidden="true"
    >
      {BARS.map((h, i) => (
        <span
          key={i}
          className={cn(
            "w-0.5 rounded-full bg-accent",
            playing ? "viz-bar h-full" : "h-2 opacity-50",
          )}
          style={
            playing
              ? { animationDelay: `${i * 70}ms`, animationDuration: `${0.8 + h * 0.5}s` }
              : { height: `${h * 100}%` }
          }
        />
      ))}
    </div>
  );
}
