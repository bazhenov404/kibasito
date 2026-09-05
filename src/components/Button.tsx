import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "outline";
};

export default function Button({ children, to, variant = "primary" }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors";
  const primaryStyles = "bg-amber-500 text-black hover:bg-amber-400";
  const outlineStyles = "border hover:border-amber-500 hover:bg-white/5";

  const combinedClassName = `${baseStyles} ${variant === "primary" ? primaryStyles : outlineStyles}`;
  const combinedStyle =
    variant === "outline" ? { borderColor: "var(--color-text-secondary)" } : undefined;

  const isExternal = to.startsWith("http") || to.startsWith("mailto:") || to.startsWith("#");

  if (isExternal) {
    return (
      <a 
        href={to}
        className={combinedClassName}
        style={combinedStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={combinedClassName} style={combinedStyle}>
      {children}
    </Link>
  );
}