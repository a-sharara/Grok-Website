import { TESTIMONIALS } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/mixer.jpg"
              alt="DJ mixer in a dark booth"
              className="img-frame aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-accent">
            Biography
          </p>
          <h2 className="mt-3 font-display text-title text-fg">
            A long night, built properly.
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
            <p>
              Amir Sharara is an Egyptian DJ and producer based in Dubai. Born in
              the early eighties, he found house music in Ibiza in 2001 and has
              spent the years since building rooms — from the Pyramids of Giza
              to Ministry of Sound Hurghada, Pacha Sharm, 360 Dubai, and a
              residency at Cairo Jazz Club.
            </p>
            <p>
              In 2007 he won Heat 2 of the Heineken Thirst competition in El
              Gouna, then stood in the final next to John Digweed. He has since
              shared bills with Hernan Cattaneo, Aly & Fila, Erick Morillo,
              Saeed Younan and others, and taken the Australian tour with Aly
              & Fila through Melbourne, Sydney, Brisbane and Perth.
            </p>
            <p>
              Twenty-five years in, the set is still about the long arc:
              groove-led house, afro and organic, tech house — the kind of peak
              that arrives because it was earned. Radio has followed him across
              DI.FM, Afterhours FM, Nile FM, Dance FM and Pure Ibiza Radio 94.7.
            </p>
          </div>
          <p className="mt-8 font-display text-xl text-fg" lang="ar" dir="rtl">
            أمير شرارة
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted">
            Sharara — spark
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-4 sm:px-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-xl bg-surface p-6 shadow-border"
          >
            <blockquote className="text-sm leading-relaxed text-fg">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
