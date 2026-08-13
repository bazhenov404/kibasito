import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6 md:px-12 py-6 md:py-8 border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-text-secondary)",
      }}
    >

      <div>
        <h1
          className="font-display text-3xl md:text-4xl font-bold leading-none"
          style={{ color: "var(--color-text)" }}
        >
          Kibasito
        </h1>

        <p
          className="text-sm mt-1"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Illustratore • Mangaka • Fotografo Analogico
        </p>
      </div>


      <ul className="flex flex-wrap justify-center gap-6 md:gap-8 text-base md:text-lg font-medium">
        <li>
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-amber-500"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="transition-colors duration-300 hover:text-amber-500"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/portfolio"
            className="transition-colors duration-300 hover:text-amber-500"
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </nav>
  );
}