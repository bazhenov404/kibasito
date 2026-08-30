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
      className={`py-16 md:py-20 ${className}`}
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        {children}
      </div>
    </section>
  );
}