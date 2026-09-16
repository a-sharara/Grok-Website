"use client";

import { ExternalLink, X } from "lucide-react";
import { usePlayer } from "@/lib/player-store";
import { SITE, soundcloudEmbed } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Viz } from "@/components/site/viz";

export function PlayerDock() {
  const active = usePlayer((s) => s.active);
  const close = usePlayer((s) => s.close);

  if (!active) return null;

  const isSoundcloud = active.url.includes("soundcloud.com");

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-14 z-40 p-3 sm:bottom-4 sm:p-4 sm:pr-28">
      <div className="pointer-events-auto mx-auto max-w-3xl overflow-hidden rounded-xl bg-surface shadow-border">
        <div className="flex items-center gap-3 px-3 py-3">
          <img
            src={active.image}
            alt=""
            className="img-frame size-12 shrink-0 rounded-md object-cover"
          />
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm font-semibold">{active.title}</p>
            <p className="truncate text-xs text-muted">
              {active.venue} · {active.genre}
            </p>
          </div>
          <Viz playing />
          <Button asChild variant="ghost" size="icon" aria-label="Open mix">
            <a href={active.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink />
            </a>
          </Button>
          <Button variant="ghost" size="icon" aria-label="Close player" onClick={close}>
            <X />
          </Button>
        </div>
        {isSoundcloud ? (
          <iframe
            title={`${active.title} on SoundCloud`}
            src={soundcloudEmbed(active.url, true)}
            allow="autoplay"
            className="sc-frame block w-full border-0 bg-elevated"
          />
        ) : (
          <div className="flex items-center justify-between gap-3 border-t border-border px-4 py-3">
            <p className="text-xs text-muted">This set lives on Mixcloud.</p>
            <Button asChild size="sm">
              <a href={active.url} target="_blank" rel="noopener noreferrer">
                Play on Mixcloud
              </a>
            </Button>
          </div>
        )}
        <p className="sr-only">Now playing via {SITE.name}</p>
      </div>
    </div>
  );
}
