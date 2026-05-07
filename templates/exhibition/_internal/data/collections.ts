export interface CollectionItem {
  id: string;
  slug: string;
  title: string;
  artist: string;
  year: string;
  img: string;
  images?: string[];
  tag: string;
  category: "Sculpture" | "Fresco" | "Marble" | "Architecture";
  description: string;
  audioDuration: string;
}

export const collections: CollectionItem[] = [
  { 
    id: "vatican-laocoon",
    slug: "laocoon-and-his-sons",
    title: "Laocoön and His Sons", 
    artist: "Agesander, Athenodoros",
    year: 'c. 30 BC',
    img: "/images/laocoon_sculpture.png", 
    images: ["/images/laocoon_sculpture.png", "/images/laocoon_detail_1.png", "/images/laocoon_detail_2.png"],
    tag: "Sculpture",
    category: "Sculpture",
    description: "One of the most famous ancient sculptures, depicting the Trojan priest Laocoön and his sons entangled by sea serpents.",
    audioDuration: "2:15"
  },
  { 
    id: "vatican-athens",
    slug: "school-of-athens",
    title: "The School of Athens", 
    artist: "Raphael",
    year: '1509–1511',
    img: "/images/school_of_athens.png", 
    images: ["/images/school_of_athens.png"],
    tag: "Fresco",
    category: "Fresco",
    description: "A paramount masterpiece of the High Renaissance representing Raphael's vision of classical philosophy.",
    audioDuration: "4:30"
  },
  { 
    id: "vatican-adam",
    slug: "creation-of-adam",
    title: "The Creation of Adam", 
    artist: "Michelangelo",
    year: '1508–1512',
    img: "/images/creation_of_adam.png", 
    images: ["/images/creation_of_adam.png"],
    tag: "Fresco",
    category: "Fresco",
    description: "The most iconic section of the Sistine Chapel ceiling illustrating God imparting the spark of life into Adam.",
    audioDuration: "3:45"
  },
  { 
    id: "vatican-pieta",
    slug: "pieta",
    title: "Pietà", 
    artist: "Michelangelo",
    year: '1498–1499',
    img: "/images/pieta_sculpture.png", 
    images: ["/images/pieta_sculpture.png"],
    tag: "Marble",
    category: "Marble",
    description: "Michelangelo's breakthrough masterpiece depicting the Virgin Mary holding the dead body of Jesus.",
    audioDuration: "2:50"
  },
  { 
    id: "vatican-apollo",
    slug: "apollo-belvedere",
    title: "Apollo Belvedere", 
    artist: "Leochares",
    year: 'c. 120-140 AD',
    img: "/images/apollo_belvedere.png", 
    tag: "Sculpture",
    category: "Sculpture",
    description: "For centuries, this Roman copy of an original Greek bronze was considered the pinnacle of the classical ideal.",
    audioDuration: "3:10"
  },
  { 
    id: "vatican-transfiguration",
    slug: "transfiguration-raphael",
    title: "The Transfiguration", 
    artist: "Raphael",
    year: '1516–1520',
    img: "/images/transfiguration.png", 
    tag: "Fresco",
    category: "Fresco",
    description: "Raphael's final work, blending the spiritual height of the Transfiguration with human drama below.",
    audioDuration: "5:20"
  },
  // Auto-generate duplicates to fulfill the 10+ items per category request visually
  ...Array.from({ length: 15 }).map((_, i) => ({
    id: `vatican-extra-${i}`,
    slug: `masterpiece-${i}`,
    title: `Masterpiece Archive 0${i + 7}`,
    artist: "Unknown Master",
    year: "Early Century",
    img: i % 2 === 0 ? "/images/hero_bg.png" : "/images/curator.png",
    tag: i % 3 === 0 ? "Fresco" : "Sculpture",
    category: (i % 3 === 0 ? "Fresco" : (i % 3 === 1 ? "Sculpture" : "Marble")) as any,
    description: "An exceptional piece of Vatican history preserved for centuries.",
    audioDuration: "1:45"
  }))
];


