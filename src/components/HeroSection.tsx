import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold">
        Nome Artista
      </h1>

      <p className="mt-4 text-lg">
        Illustratore, autore di fumetti e fotografo analogico.
      </p>

      <p className="mt-4">
        Racconto storie attraverso immagini, inchiostro e pellicola.
      </p>

      <div className="flex gap-4 justify-center mt-6">
        <Link to="/portfolio" className="px-4 py-2 bg-black text-white rounded">Portfolio</Link>

        <Link to="/about" className="px-4 py-2 border rounded">About</Link>
      </div>
    </section>
  );
}