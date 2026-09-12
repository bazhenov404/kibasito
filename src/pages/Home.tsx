import ArtworkDisplay from "../components/ArtworkDisplay";
import testImage from "../assets/images/samurai.jpg";

export default function Home() {
  return (
    <ArtworkDisplay
      imageUrl={testImage}
      title="Samurai"
      price={1500}
      availability="available"
    />
  );
}
  