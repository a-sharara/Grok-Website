import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn(
        "group flex items-center gap-3 text-fg no-underline",
        className,
      )}
    >
      <span className="grid size-9 place-items-center rounded-md shadow-border">
        <span className="font-display text-xs font-semibold tracking-wider">AS</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-sm font-semibold tracking-wide">
          Amir Sharara
        </span>
        <span className="mt-0.5 text-[0.65rem] uppercase tracking-[0.18em] text-muted">
          Dubai
        </span>
      </span>
    </a>
  );
}
