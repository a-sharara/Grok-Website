import { Logo } from "@/components/site/logo";
import { SITE } from "@/lib/site";

const SOCIALS = [
  { href: SITE.instagram, label: "Instagram" },
  { href: SITE.soundcloud, label: "SoundCloud" },
  { href: SITE.mixcloud, label: "Mixcloud" },
  { href: SITE.facebook, label: "Facebook" },
  { href: `mailto:${SITE.email}`, label: "Email" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border pb-32 pt-12 sm:pb-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted">
              Egyptian DJ & producer. Dubai. House that holds a room.
            </p>
            <p className="mt-3 font-display text-lg" lang="ar" dir="rtl">
              {SITE.arabic}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-subtle sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Amir Sharara. All rights reserved.</p>
          <p>Based in Dubai · Booking worldwide</p>
        </div>
      </div>
    </footer>
  );
}
