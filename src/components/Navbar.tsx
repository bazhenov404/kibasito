import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b bg-white">
      <h1 className="text-3xl font-bold text-black">Kibasito</h1>

      <ul className="flex gap-8 text-lg">
        <li><Link to="/" className="hover:text-gray-500 transition">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-500 transition">About</Link></li>
        <li><Link to="/portfolio" className="hover:text-gray-500 transition">Portfolio</Link></li>
      </ul>
    </nav>
  );
}