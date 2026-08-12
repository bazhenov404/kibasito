import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-12 py-20">

      <div className="grid grid-cols-2 gap-16 items-center">

        <div>

          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Portfolio Artistico
          </p>

          <h1
            className="font-display text-6xl font-bold leading-tight leading-none"
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
            className="mt-8 text-lg leading-8 max-w-xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Racconto storie attraverso immagini, fumetti e fotografia analogica.
            Ogni progetto nasce dall'incontro tra tecnica, immaginazione e ricerca.
          </p>

          <div className="flex gap-4 mt-10">

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
            className="rounded-2xl shadow-2xl object-cover w-full h-[650px]"
          />

        </div>

      </div>

    </section>
  );
}