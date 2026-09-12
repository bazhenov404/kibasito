type ArtworkDisplayProps = {
  imageUrl: string;
  title: string;
  price: number;
  availability: "available" | "sold";
};

export default function ArtworkDisplay({
  imageUrl,
  title,
  price,
  availability,
}: ArtworkDisplayProps) {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-4xl text-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-h-[650px] object-contain rounded-2xl"
        />

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
            {price} €
          </p>

          {availability === "available" ? (
            <button
              type="button"
              className="mt-6 px-8 py-3 rounded-md font-medium transition-colors"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-background)" }}
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
    </main>
  );
}