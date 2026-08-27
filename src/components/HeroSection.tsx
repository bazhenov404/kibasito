import { Link } from "react-router-dom";
import Section from "./Section";

export default function HeroSection() {
  return (
    <Section>

      <div className="max-w-4xl mx-auto text-center">

        <p
          className="uppercase tracking-[0.3em] text-sm mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          Portfolio Artistico
        </p>

        <h1
          className="font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
          style={{ color: "var(--color-text)" }}
        >
          Kibasito
        </h1>

        <h2
          className="text-xl md:text-2xl mt-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Illustratore • Mangaka • Fotografo Analogico
        </h2>

        <p
          className="text-lg md:text-xl mt-6 leading-8 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Racconto storie attraverso immagini, fumetti e fotografia analogica.
          Ogni progetto nasce dall'incontro tra tecnica, immaginazione e ricerca.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link
            to="/portfolio"
            className="px-6 py-3 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
          >
            Esplora il Portfolio
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 rounded-lg border border-zinc-600 hover:border-amber-500 transition-colors"
          >
            Chi sono
          </Link>

        </div>

      </div>

    </Section>
  );
}