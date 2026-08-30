import { education } from "../data/education";
import { experience } from "../data/experience";
import { skills } from "../data/skills";

import TimelineCard from "../components/TimelineCard";
import Section from "../components/Section";

import kiba from "../assets/images/kiba.jpg";

export default function About() {
  return (
    <>
      <Section className="lg:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
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
              Stefano B.
            </h1>

            <p
              className="mt-6 text-lg leading-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Illustratore, autore di fumetti e fotografo analogico. Il mio
              lavoro nasce dall'incontro tra disegno, narrazione visiva e
              fotografia.
            </p>

            <p
              className="mt-4 text-lg leading-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Mi interessa sperimentare con tecniche e linguaggi diversi,
              passando dall'illustrazione alla fotografia e al recupero di
              vecchie fotocamere analogiche.
            </p>
          </div>
        </div>
      </Section>

      <Section background="surface">
        <div className="mb-12">
          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Percorso
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Formazione
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {education.map((item) => (
            <TimelineCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12">
          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Percorso professionale
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Esperienze
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {experience.map((item) => (
            <TimelineCard
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="mb-12">
          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Competenze
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Cosa faccio
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-5 py-2
                rounded-full
                border
                text-sm md:text-base
                transition-colors
                hover:border-amber-500
              "
              style={{
                backgroundColor: "var(--color-background)",
                borderColor: "var(--color-text-secondary)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <p
          className="uppercase tracking-[0.3em] text-sm mb-4"
          style={{ color: "var(--color-accent)" }}
        >
          Approccio
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Il mio modo di lavorare
        </h2>

        <p
          className="mt-6 max-w-3xl text-lg leading-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Il mio lavoro nasce dall'incontro tra illustrazione, fumetto e
          fotografia. Mi interessa sperimentare con tecniche diverse e
          costruire immagini che mantengano un'identità personale.
        </p>
      </Section>

      <Section>
        <div
          className="p-8 md:p-12 rounded-2xl"
          style={{ backgroundColor: "var(--color-surface)" }}
        >
          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Contatti
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Hai un progetto in mente?
          </h2>

          <p
            className="mt-4 max-w-2xl leading-7"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Per collaborazioni, commissioni o informazioni puoi contattarmi
            via email o attraverso i miei profili social.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="mailto:email@example.com"
              className="
                px-6 py-3
                rounded-lg
                bg-amber-500
                text-black
                font-semibold
                text-center
                hover:bg-amber-400
                transition-colors
              "
            >
              Scrivimi
            </a>

            <a
              href="#"
              className="
                px-6 py-3
                rounded-lg
                border
                border-zinc-600
                text-center
                hover:border-amber-500
                transition-colors
              "
            >
              Instagram
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
