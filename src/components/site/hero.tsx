"use client";

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, STATS } from "@/lib/site";

export function Hero() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden"
    >
      {reduce ? (
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
      ) : (
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero.jpg"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
      <div className="pointer-events-none absolute inset-0 grid-fade" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-28 sm:px-6 sm:pb-14">
        <p className="rise text-xs font-medium uppercase tracking-[0.28em] text-accent">
          {SITE.role} · {SITE.origin} · {SITE.city}
        </p>
        <h1
          className="rise mt-5 font-display text-display text-fg"
          style={{ animationDelay: "80ms" }}
        >
          Amir
          <br />
          Sharara
        </h1>
        <p
          className="rise mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {SITE.tagline} House, afro, organic, and the long arc of a night —
          from the Pyramids of Giza to Dubai's rooms.
        </p>
        <div
          className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "240ms" }}
        >
          <Button asChild size="lg">
            <a href="#listen">Listen to the sets</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#book">Book for an event</a>
          </Button>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-bg/80 px-4 py-4 sm:px-5">
              <dt className="text-xs uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-semibold tabular-nums text-fg">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#listen"
          className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-fg"
        >
          Scroll
          <ArrowDown className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
