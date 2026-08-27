import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  background?: "default" | "surface";
  className?: string;
};

export default function Section({
  children,
  background = "default",
  className = "",
}: SectionProps) {
  const backgroundColor =
    background === "surface"
      ? "var(--color-surface)"
      : "var(--color-background)";

  return (
    <section
      className={`px-6 md:px-10 lg:px-12 py-20 md:py-24 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}