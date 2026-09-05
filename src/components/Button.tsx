import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "outline";
};

export default function Button({ children, to, variant = "primary" }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-colors";
  const primaryStyles = "bg-amber-500 text-black hover:bg-amber-400";
  const outlineStyles = "border hover:border-amber-500 hover:bg-white/5";

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : outlineStyles}`}
      style={
        variant === "outline" ? { borderColor: "var(--color-text-secondary)" } : undefined
      }
    >
      {children}
    </Link>
  );
}
