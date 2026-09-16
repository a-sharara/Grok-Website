import { GENRES } from "@/lib/site";

export function Marquee() {
  const items = [...GENRES, ...GENRES, ...GENRES, ...GENRES];

  return (
    <div className="w-full max-w-full overflow-hidden border-y border-border py-3" aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((genre, i) => (
          <span
            key={`${genre}-${i}`}
            className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-muted"
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  );
}
