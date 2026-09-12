import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

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
              className="flex gap-4"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <a
                href="https://www.instagram.com/maskedsuperhero/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              <a
              
                href="mailto:email@example.com"
                className="hover:opacity-70 transition-opacity"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-sm text-center md:text-left"
          style={{
            borderColor: "var(--color-text-secondary)",
            color: "var(--color-text-secondary)",
            opacity: 0.7,
          }}
        >
          <p>© 2026 Stefano Barresi</p>
        </div>
      </div>
    </footer>
  );
}