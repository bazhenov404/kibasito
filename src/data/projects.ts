import type{ Project } from "../types/Project";

import samurai from "../assets/images/samurai.jpg";
import cyberpunk from "../assets/images/cyberpunk.jpeg";
import forest from "../assets//images/forest.jpg";

const projects: Project[]=[ 
    {
        id: 1,
        title: "Samurai Rosso",
        description: "Studio fantasy",
        imageUrl: samurai,
    },
    {
        id: 2,
        title: "Cyber Ninja",
        description: "Concept Sci-Fi",
        imageUrl: cyberpunk,
    },
    {
        id: 3,
        title: "Forest Spirit",
        description: "Illustrazione naturale",
        imageUrl: forest,
    },
];

export { projects };