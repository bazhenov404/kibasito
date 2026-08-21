import { education } from "../data/education";
import TimelineCard from "../components/TimelineCard";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
import kiba from "../assets/images/kiba.jpg";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12 py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center mb-20">
        <div>
          <img
            src={kiba}
            alt="Kibasito"
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        </div>

        <div>
          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Chi sono
          </p>

          <h1 className="font-display text-5xl md:text-6xl font-bold">
            Kibasito
          </h1>
          <p
            className="mt-6 text-lg leading-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Illustratore, autore di fumetti e fotografo analogico. Il mio lavoro
            nasce dall'incontro tra disegno, narrazione visiva e fotografia.
          </p>

          <p
            className="mt-4 text-lg leading-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Mi interessa sperimentare con tecniche e linguaggi diversi, passando
            dall'illustrazione alla fotografia e al recupero di vecchie
            fotocamere analogiche.
          </p>
        </div>
      </div>
      <div className="mb-12">
        <p
          className="uppercase tracking-[0.3em] text-sm mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          Percorso
        </p>

        <h2 className="font-display text-5xl md:text-6xl font-bold">
          Formazione
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {education.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-24 mb-12">
        <p
          className="uppercase tracking-[0.3em] text-sm mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          Percorso professionale
        </p>

        <h2 className="font-display text-5xl md:text-6xl font-bold">
          Esperienze
        </h2>
      </div>

      <div className="flex flex-col gap-10">
        {experience.map((item) => (
          <TimelineCard key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-24 mb-12">
        <p
          className="uppercase tracking-[0.3em] text-sm mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          Competenze
        </p>
        <h2 className = "font-display text-4xl md:text-6xl font-bold">
          Cosa faccio
        </h2>
      </div>

<div className="flex flex-wrap gap-4">
  {skills.map((skills) => (
    <span
      key={skills}
      className="
        px-5 py-2
        rounded-full
        border
        text-sm md:text-base
        transition-colors
        hover:border-amber-500
      "
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-text-secondary)",
      }}
    >
      {skills}
    </span>
  ))}
</div>
    </section>
  );
}
