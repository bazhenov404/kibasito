import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import { projects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <Section background="surface" >
      <div >


      <div className="text-center mb-14">

        <h2
          className="font-display text-4xl md:text-5xl"
          style={{ color: "var(--color-text)" }}
        >
          Lavori in evidenza
        </h2>

        <p
          className="mt-4 max-w-2xl mx-auto text-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Una selezione di illustrazioni, fotografie e concept che raccontano
          il mio stile artistico.
        </p>

      </div>

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

      <div className="flex justify-center mt-14">

        <Link
          to="/portfolio"
          className="px-8 py-3 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition-colors"
        >
          Vedi tutto il Portfolio
        </Link>

      </div>
    </div>
    </Section>
  );
}
