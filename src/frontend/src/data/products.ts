export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Beaded Tribal Necklace",
    price: 1299,
    category: "Necklace",
    description:
      "Handcrafted beaded necklace with colorful thread and wooden beads, ethnic tribal style",
    image: "/assets/generated/handicraft-necklace1.dim_400x400.jpg",
  },
  {
    id: 2,
    name: "Macrame Turquoise Pendant",
    price: 899,
    category: "Necklace",
    description:
      "Handmade macrame pendant with natural turquoise stone, boho handicraft style",
    image: "/assets/generated/handicraft-necklace2.dim_400x400.jpg",
  },
  {
    id: 3,
    name: "Floral Enamel Ring",
    price: 749,
    category: "Ring",
    description:
      "Handcrafted clay and resin ring with floral design and colorful enamel work",
    image: "/assets/generated/handmade-ring1.dim_400x400.jpg",
  },
  {
    id: 4,
    name: "Wire Wrapped Gemstone Ring",
    price: 649,
    category: "Ring",
    description:
      "Handmade copper wire wrapped gemstone ring, ethnic craft style",
    image: "/assets/generated/handmade-ring2.dim_400x400.jpg",
  },
  {
    id: 5,
    name: "Jhumka Mirror Earrings",
    price: 999,
    category: "Earring",
    description:
      "Handcrafted jhumka earrings with colorful beads and traditional mirror work",
    image: "/assets/generated/handicraft-earrings1.dim_400x400.jpg",
  },
  {
    id: 6,
    name: "Tassel Boho Earrings",
    price: 549,
    category: "Earring",
    description:
      "Handmade thread tassel earrings with wooden beads, colorful boho style",
    image: "/assets/generated/handicraft-earrings2.dim_400x400.jpg",
  },
  {
    id: 7,
    name: "Beaded Charm Bracelet",
    price: 799,
    category: "Bracelet",
    description:
      "Handcrafted beaded friendship bracelet with colorful seed beads and charms",
    image: "/assets/generated/handicraft-bracelet1.dim_400x400.jpg",
  },
  {
    id: 8,
    name: "Terracotta Painted Bangles",
    price: 1099,
    category: "Bracelet",
    description:
      "Handmade terracotta bangles with painted ethnic motifs, traditional Indian handicraft",
    image: "/assets/generated/handicraft-bangles.dim_400x400.jpg",
  },
];

export const categories = ["All", "Necklace", "Ring", "Earring", "Bracelet"];

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
