import ProjectCard from "./ProjectCard";

import { projects } from "../data/projects";


export default function FeaturedProjects() {
  return (
  <section className="p-8">
    <h2 className="text-3xl font-bold mb-6">Lavori in evidenza</h2>

    <div className="grid grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  </section>);
}
