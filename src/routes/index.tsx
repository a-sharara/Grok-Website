import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Listen } from "@/components/site/listen";
import { About } from "@/components/site/about";
import { Stages } from "@/components/site/stages";
import { Book } from "@/components/site/book";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <Listen />
      <About />
      <Stages />
      <Book />
      <Footer />
    </main>
  );
}
