import Section from "./Section";
import Button from "./Button";

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
          Stefano B.
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
          Ogni progetto nasce dall'incontro tra tecnica, immaginazione e
          ricerca.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Button to="/portfolio">Esplora il Portfolio</Button>

          <Button to="/about" variant="outline">Chi sono</Button>
        </div>
      </div>
    </Section>
  );
}
