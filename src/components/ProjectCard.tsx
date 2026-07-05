type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
};

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className="border rounded p-6 shadow transition duration-300 hover:shadow-xl hover:-translate-y-2">

      <img
        src={props.imageUrl}
        alt={props.title}
        className="h-48 w-full object-cover rounded mb-4"
      />

      <h2 className="text-xl font-bold">
        {props.title}
      </h2>

      <p className="mt-2">
        {props.description}
      </p>

    </div>
  );
}

