import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Section from "../components/Section";

export default function Portfolio() {
  return (
    <>
      <Section>
        <div className="mb-12">
          <p
            className="uppercase tracking-[0.3em] text-sm mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Portfolio
          </p>

          <h1 className="font-display text-5xl md:text-6xl font-bold">
            Tutti i lavori
          </h1>

          <p
            className="mt-4 max-w-2xl text-lg leading-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Una raccolta di illustrazioni, fumetti, concept e progetti
            fotografici.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-3 rounded-full bg-amber-500 text-black font-medium">
            Tutti
          </button>

          <button className="px-6 py-3 rounded-full border border-zinc-600 hover:border-amber-500 transition-colors">
            Illustrazione
          </button>

          <button className="px-6 py-3 rounded-full border border-zinc-600 hover:border-amber-500 transition-colors">
            Manga
          </button>

          <button className="px-6 py-3 rounded-full border border-zinc-600 hover:border-amber-500 transition-colors">
            Fotografia
          </button>
        </div>
      </Section>

      <Section background="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
