import { COLLABS, RADIOS, RESIDENCIES, STAGES } from "@/lib/site";

export function Stages() {
  return (
    <section id="stages" className="scroll-mt-16 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
          Rooms
        </p>
        <h2 className="mt-3 font-display text-title text-fg">Stages & frequencies</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Clubs, beach rooms, festivals, radio hours. Available for residencies,
          peak-time floors, and private work across the region and beyond.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((stage) => (
            <article
              key={stage.name}
              className="group relative isolate min-h-52 overflow-hidden rounded-xl"
            >
              <img
                src={stage.image}
                alt=""
                className="img-frame absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold">{stage.name}</h3>
                <p className="text-xs uppercase tracking-[0.16em] text-muted">
                  {stage.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Residencies
            </h3>
            <ul className="mt-4 space-y-2">
              {RESIDENCIES.map((r) => (
                <li key={r} className="text-sm text-fg">
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Shared bills
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {COLLABS.map((c) => (
                <li
                  key={c}
                  className="rounded-full px-3 py-1.5 text-sm text-fg shadow-border"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
              Radio
            </h3>
            <ul className="mt-4 space-y-2">
              {RADIOS.map((r) => (
                <li key={r} className="text-sm text-fg">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
