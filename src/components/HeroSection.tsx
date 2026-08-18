import { Link } from "react-router-dom";

import kiba from "../assets/images/kiba.jpg";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        <div>

          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Portfolio Artistico
          </p>

          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none"
            style={{ color: "var(--color-text)" }}
          >
            Kibasito
          </h1>

          <h2
            className="text-2xl mt-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Illustratore • Mangaka • Fotografo Analogico
          </h2>

          <p
            className="text-xl md:text-2xl mt-4"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Racconto storie attraverso immagini, fumetti e fotografia analogica.
            Ogni progetto nasce dall'incontro tra tecnica, immaginazione e ricerca.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">

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

        <div>

          <img
            alt="Opera principale"
            src={kiba}
            className="w-full h-[420px] md:h-[520px] lg:h-[650px] object-cover rounded-2xl"
          />

        </div>

      </div>

    </section>
  );
}