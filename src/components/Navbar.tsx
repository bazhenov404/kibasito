import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-12 py-8 border-b"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-text-secondary)",
      }}
    >

      <div>
        <h1
          className="text-3xl font-bold"
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


      <ul className="flex gap-8 text-lg font-medium">
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