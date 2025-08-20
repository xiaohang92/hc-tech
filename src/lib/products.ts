export type Product = {
  name: string;
  description: string;
  price: number;
  features: string[];
  priceId: string;
  technologyStack: string;
  deliveryTime: string;
};

export const products: Product[] = [
  {
    name: "Landing Page Development",
    description: "Perfect for businesses needing a high-quality landing page.",
    price: 1000,
    features: [
      "Custom design",
      "Responsive layout",
      "SEO optimized",
      "Ongoing support",
    ],
    // Keep price IDs consistent with checkout usage
    priceId: "price_1PLJg007J704FKDMQT1ixmCG",
    technologyStack: "HTML, CSS, JavaScript",
    deliveryTime: "1-2 weeks",
  },
  {
    name: "Full Website Development",
    description: "Ideal for businesses needing a comprehensive web solution.",
    price: 3000,
    features: [
      "Custom design and development",
      "Backend integration",
      "SEO optimized",
      "1 year of support",
    ],
    priceId: "price_1PKHPY07J704FKDMrTOyJuQF",
    technologyStack: "PHP, MySQL, Next.js",
    deliveryTime: "2-4 weeks",
  },
  {
    name: "WordPress Development",
    description: "Best for customizable and easy-to-manage website.",
    price: 1000,
    features: [
      "Custom theme development",
      "Plugin setup and customization",
      "SEO optimized",
      "3 months of support",
    ],
    priceId: "price_1PLJjG07J704FKDMAUVZrRBb",
    technologyStack: "WordPress, PHP",
    deliveryTime: "1-3 weeks",
  },
];

export function getProductByName(name?: string | null): Product {
  const fallback = products[0];
  if (!name) return fallback;
  return products.find((p) => p.name === name) ?? fallback;
}


