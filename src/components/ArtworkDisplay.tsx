import { useState } from "react";

type ArtworkDisplayProps = {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  available: boolean;
};

export default function ArtworkDisplay({
  imageUrl,
  title,
  description,
  price,
  available,
}: ArtworkDisplayProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl text-center">

        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full max-h-162.5 object-contain rounded-2xl"
          />

          {!isOpen && (
            <div
              className="
                absolute inset-0
                flex items-center justify-center
                rounded-2xl
                backdrop-blur-sm
              "
              style={{
                backgroundColor: "rgba(250, 249, 247, 0.88)",
              }}
            >
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="
                  px-6 py-3
                  rounded-full
                  font-medium
                  shadow-sm
                  transition-transform
                  hover:scale-105
                "
                style={{
                  backgroundColor: "var(--color-surface)",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-accent)",
                }}
              >
                Apri l'opera
              </button>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h1
            className="text-3xl md:text-4xl font-display font-bold"
            style={{ color: "var(--color-text)" }}
          >
            {title}
          </h1>

          <p
            className="mt-3 text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {description}
          </p>

          <p
            className="mt-3 text-lg font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            {price} €
          </p>

          {available ? (
            <button
              type="button"
              className="mt-6 px-8 py-3 rounded-md font-medium transition-colors"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-background)",
              }}
            >
              Acquista
            </button>
          ) : (
            <p
              className="mt-6 text-lg font-medium"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Opera già venduta
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
