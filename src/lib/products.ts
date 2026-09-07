export type BillingCycle = "onetime" | "retainer";

export type Product = {
  name: string;
  description: string;
  price: number;
  features: string[];
  priceId: string;
  technologyStack: string;
  deliveryTime: string;
  billing?: BillingCycle;
  periodLabel?: string;
  popular?: boolean;
  ctaHref?: string;
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
    billing: "onetime",
    periodLabel: "one-time",
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
    billing: "onetime",
    periodLabel: "one-time",
    popular: true,
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
    billing: "onetime",
    periodLabel: "one-time",
  },
];

export const retainerProducts: Product[] = [
  {
    name: "Website Care",
    description:
      "Keep your live site secure, fast, and current with a predictable monthly plan.",
    price: 199,
    features: [
      "Core updates & backups",
      "Uptime and security monitoring",
      "2 hours of content or bug-fix work",
      "Monthly performance report",
    ],
    priceId: "",
    technologyStack: "WordPress, Next.js",
    deliveryTime: "Ongoing",
    billing: "retainer",
    periodLabel: "/month",
    ctaHref: "/contactus",
  },
  {
    name: "Growth Partner",
    description:
      "A dedicated monthly sprint for SEO, conversion tweaks, and new landing features.",
    price: 499,
    features: [
      "Everything in Website Care",
      "8 hours of development each month",
      "CRO and SEO improvements",
      "Priority WhatsApp support",
    ],
    priceId: "",
    technologyStack: "Next.js, WordPress, Analytics",
    deliveryTime: "Ongoing",
    billing: "retainer",
    periodLabel: "/month",
    popular: true,
    ctaHref: "/contactus",
  },
  {
    name: "Dedicated Support",
    description:
      "A senior-backed retainer for teams that need strategy, shipping velocity, and SLAs.",
    price: 899,
    features: [
      "Everything in Growth Partner",
      "16 hours of product work each month",
      "Same-business-day response SLA",
      "Quarterly roadmap workshop",
    ],
    priceId: "",
    technologyStack: "Full stack, product ops",
    deliveryTime: "Ongoing",
    billing: "retainer",
    periodLabel: "/month",
    ctaHref: "/contactus",
  },
];

export function getProductByName(name?: string | null): Product {
  const fallback = products[0];
  if (!name) return fallback;
  return products.find((p) => p.name === name) ?? fallback;
}


