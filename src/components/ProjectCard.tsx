type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string | undefined;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <article
      className="
        rounded-2xl
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
      style={{
        backgroundColor: "var(--color-surface)",
        boxShadow: "var(--shadow)",
      }}
    >
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-6">

        <h3
          className="font-display text-2xl font-semibold leading-none"
          style={{ color: "var(--color-text)" }}
        >
          {props.title}
        </h3>

        <p
          className="mt-3 leading-7"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {props.description}
        </p>

      </div>
    </article>
  );
}

