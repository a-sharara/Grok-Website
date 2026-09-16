"use client";

import { Play } from "lucide-react";
import { MIXES, SITE } from "@/lib/site";
import { usePlayer } from "@/lib/player-store";
import { Button } from "@/components/ui/button";
import { Viz } from "@/components/site/viz";
import { cn } from "@/lib/utils";

export function Listen() {
  const active = usePlayer((s) => s.active);
  const play = usePlayer((s) => s.play);
  const featured = active ?? MIXES[0];
  if (!featured) return null;

  return (
    <section id="listen" className="scroll-mt-16 border-t border-border py-20 sm:py-28">
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
              Catalogue
            </p>
            <h2 className="mt-3 font-display text-title text-fg">Listen</h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Live rooms and radio hours. Press play here — the set opens in the
              bar below so you never leave the page.
            </p>
          </div>
          <Button asChild variant="outline">
            <a href={SITE.soundcloud} target="_blank" rel="noopener noreferrer">
              SoundCloud archive
            </a>
          </Button>
        </div>

        <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-5">
          <button
            type="button"
            onClick={() => play(featured)}
            className="group relative isolate min-h-80 min-w-0 overflow-hidden rounded-2xl text-left lg:col-span-3 lg:min-h-96"
          >
            <img
              src={featured.image}
              alt=""
              className="img-frame absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
            <div className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-150 group-hover:scale-105">
              <Play className="ml-0.5 size-6 fill-current" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">
                  {featured.genre} · {featured.year}
                </p>
                <p className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
                  {featured.title}
                </p>
                <p className="mt-1 text-sm text-muted">{featured.venue}</p>
              </div>
              <Viz playing={active?.id === featured.id} className="hidden sm:flex" />
            </div>
          </button>

          <ol className="flex min-w-0 flex-col gap-1 lg:col-span-2">
            {MIXES.map((mix, i) => {
              const isOn = active?.id === mix.id;
              return (
                <li key={mix.id}>
                  <button
                    type="button"
                    onClick={() => play(mix)}
                    className={cn(
                      "flex w-full min-w-0 items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-150",
                      isOn ? "bg-elevated" : "hover:bg-elevated/70",
                    )}
                  >
                    <span className="w-6 text-xs tabular-nums text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <img
                      src={mix.image}
                      alt=""
                      className="img-frame size-12 shrink-0 rounded-md object-cover"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{mix.title}</span>
                      <span className="block truncate text-xs text-muted">
                        {mix.venue} · {mix.genre}
                      </span>
                    </span>
                    {isOn ? (
                      <Viz playing />
                    ) : (
                      <Play className="size-4 shrink-0 text-muted" />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
