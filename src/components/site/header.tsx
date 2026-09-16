"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200",
          scrolled ? "bg-bg/92 shadow-border" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors duration-150 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild size="sm">
              <a href="#book">
                <span className="sm:hidden">Book</span>
                <span className="hidden sm:inline">Book a date</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 flex flex-col bg-bg px-6 pb-10 pt-24 transition-opacity duration-200 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-semibold tracking-tight text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild size="lg" className="w-full">
          <a href="#book" onClick={() => setOpen(false)}>
            Book a date
          </a>
        </Button>
      </div>
    </>
  );
}
