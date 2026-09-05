import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="border-t px-6 md:px-12 py-10"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-text-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          <div>
            <h2 className="font-display text-3xl font-bold">Stefano Barresi</h2>

            <p
              className="mt-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Illustratore • Mangaka • Fotografo Analogico
            </p>
          </div>

          <div>
            <h3
              className="text-sm uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Contatti
            </h3>

            <div
              className="flex flex-col gap-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <a
                href="https://www.instagram.com/maskedsuperhero/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-500 transition-colors"
              >
                Instagram
              </a>

              <a
                href="mailto:email@example.com"
                className="hover:text-amber-500 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        <div
          className="
            flex flex-col
            md:flex-row
            md:justify-between
            gap-4
            mt-10
            pt-6
            border-t
            text-sm
          "
          style={{
            borderColor: "var(--color-background)",
            color: "var(--color-text-secondary)",
          }}
        >
          <p>© 2026 Bazhenov O.</p>

          <div className="flex gap-6">
            <Link
              to="/portfolio"
              className="hover:text-amber-500 transition-colors"
            >
              Portfolio
            </Link>

            <Link
              to="/about"
              className="hover:text-amber-500 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
