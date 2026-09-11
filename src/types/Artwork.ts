export type Artwork = {
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    availability: "available" | "sold";
};