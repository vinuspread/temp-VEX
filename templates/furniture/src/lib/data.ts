import chair from "../../asset/chair.png";
import sofa from "../../asset/sofa.png";
import table from "../../asset/table.png";
import lamp from "../../asset/lamp.png";
import bed from "../../asset/bed.png";
import sidetable from "../../asset/sidetable.png";
import desk from "../../asset/desk.png";
import wardrobe from "../../asset/wardrobe.png";
import lifestyle_narrative from "../../asset/lifestyle_narrative.png";

export const C = {
  white: "#FFFFFF",
  bg: "#F5F5F7",
  text: "#1D1D1F",
  sub: "#6E6E73",
  accent: "#1A1A1A",
  border: "#D2D2D7",
};

export const products = [
  {
    id: "1",
    name: "Siero Lounge Chair",
    category: "Chairs",
    price: "$1,290",
    image: chair.src,
    tag: "Essential",
    desc: "A timeless masterpiece of comfort and form. The Siero Lounge Chair is designed to provide unparalleled ergonomic support while maintaining a slim, architectural profile.",
    details: {
      material: "Solid Walnut, Premium Italian Leather",
      dimensions: "82cm x 75cm x 88cm",
      weight: "18kg",
      origin: "Handcrafted in Milan"
    },
    gallery: [chair.src, lifestyle_narrative.src]
  },
  {
    id: "2",
    name: "Velvet Mono Sofa",
    category: "Sofas",
    price: "$3,400",
    image: sofa.src,
    tag: "Luxury",
    desc: "A timeless masterpiece of comfort, featuring premium Italian linen and deep-seated ergonomics.",
    details: { material: "Italian Linen, Goose Down", dimensions: "240 x 105 x 75 cm", weight: "62kg", origin: "Italy" },
    gallery: [sofa.src, lifestyle_narrative.src]
  },
  {
    id: "3",
    name: "Oak Dining Table",
    category: "Dining",
    price: "$4,200",
    image: table.src,
    tag: "Essential",
    desc: "Crafted from sustainable European oak, this table defines the heart of a modern home.",
    details: { material: "Solid European Oak", dimensions: "200 x 90 x 75 cm", weight: "85kg", origin: "Denmark" },
    gallery: [table.src, lifestyle_narrative.src]
  },
  {
    id: "4",
    name: "Walnut Lounge Chair",
    category: "Lounge",
    price: "$2,850",
    image: chair.src,
    tag: "Iconic",
    desc: "Sculptural silhouette meets unmatched comfort in this hand-finished American Walnut chair.",
    details: { material: "American Walnut, Semi-Aniline Leather", dimensions: "85 x 82 x 78 cm", weight: "24kg", origin: "USA" },
    gallery: [chair.src, lifestyle_narrative.src]
  },
  {
    id: "5",
    name: "Ceramic Pendant Lamp",
    category: "Lighting",
    price: "$890",
    image: lamp.src,
    tag: "Ambient",
    desc: "A delicate balance of raw texture and refined form, providing soft, ambient glows.",
    details: { material: "Hand-thrown Ceramic, Brass", dimensions: "45 x 45 x 20 cm", weight: "4.5kg", origin: "Japan" },
    gallery: [lamp.src, lifestyle_narrative.src]
  },
  {
    id: "6",
    name: "Brutalist Side Table",
    category: "Living",
    price: "$1,150",
    image: sidetable.src,
    tag: "Raw",
    desc: "Cast in lightweight concrete with a honed finish, celebrating raw materiality.",
    details: { material: "Architectural Concrete", dimensions: "40 x 40 x 45 cm", weight: "18kg", origin: "Germany" },
    gallery: [sidetable.src, lifestyle_narrative.src]
  },
  {
    id: "7",
    name: "Floating Wall Desk",
    category: "Home Office",
    price: "$1,650",
    image: desk.src,
    tag: "Sleek",
    desc: "A space-saving architect's desk that mounts seamlessly to any wall surface.",
    details: { material: "Powder-coated Steel, Oak", dimensions: "120 x 50 x 12 cm", weight: "32kg", origin: "Sweden" },
    gallery: [desk.src, lifestyle_narrative.src]
  },
  {
    id: "8",
    name: "Linen Platform Bed",
    category: "Bedroom",
    price: "$5,400",
    image: bed.src,
    tag: "Serene",
    desc: "The ultimate sanctuary, featuring a low-profile frame and padded linen headboard.",
    details: { material: "Belgian Linen, Ash Wood", dimensions: "180 x 210 x 95 cm", weight: "110kg", origin: "Belgium" },
    gallery: [bed.src, lifestyle_narrative.src]
  },
  {
    id: "9",
    name: "Ash Wood Wardrobe",
    category: "Storage",
    price: "$7,800",
    image: wardrobe.src,
    tag: "Grand",
    desc: "Expansive storage with a monolithic presence, showcasing the natural grain of ash.",
    details: { material: "Solid Ash Wood, Brass", dimensions: "160 x 60 x 220 cm", weight: "145kg", origin: "Finland" },
    gallery: [wardrobe.src, lifestyle_narrative.src]
  }

];

export const stats = [
  { label: "Happy Customers", value: "30K+" },
  { label: "Design Awards", value: "500+" },
  { label: "Years of Heritage", value: "15 Yrs" }
];
