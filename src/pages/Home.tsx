import ArtworkDisplay from "../components/ArtworkDisplay";
import { currentArtwork } from "../data/artwork";

export default function Home() {
  return (
    <ArtworkDisplay
      imageUrl={currentArtwork.imageUrl}
      title={currentArtwork.title}
      description={currentArtwork.description}
      price={currentArtwork.price}
      available={currentArtwork.available}
    />
  );
}
  