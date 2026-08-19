import type { TimelineItem } from "../types/TimelineItems";

type TimelineCardProps = {
  item: TimelineItem;
};

export default function TimelineCard({ item }: TimelineCardProps) {
  return (
    <article className="border-l-2 border-amber-500 pl-6 py-2">

      <p
        className="text-sm font-semibold"
        style={{ color: "var(--color-accent)" }}
      >
        {item.year}
      </p>

      <h3 className="font-display text-2xl font-semibold mt-2">
        {item.title}
      </h3>

      <p
        className="mt-1"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {item.place}
      </p>

      {item.description && (
        <p
          className="mt-3 leading-7"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {item.description}
        </p>
      )}

    </article>
  );
}