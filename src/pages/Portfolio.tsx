import { useState } from "react";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Section from "../components/Section";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tutti");
  const categories = ["Tutti", "Illustrazioni", "Manga", "Fotografia"];

  const filteredProjects =
    activeCategory === "Tutti"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
            {activeCategory === "Tutti" ? "Tutti i lavori" : activeCategory}
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
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-amber-500 text-black"
                  : "border border-zinc-600 hover:border-amber-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
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
