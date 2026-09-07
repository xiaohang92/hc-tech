export const PROJECT_FILTERS = [
  "All",
  "E-commerce",
  "Web Apps",
  "WordPress",
] as const;

export type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export type Project = {
  id: string;
  title: string;
  client: string;
  category: string;
  filters: Exclude<ProjectFilter, "All">[];
  description: string;
  image: string;
  type: string;
  url?: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    id: "eastmate-coffee",
    title: "Eastmate Coffee Storefront",
    client: "Eastmate Coffee",
    category: "E-commerce & Retail",
    filters: ["E-commerce", "WordPress"],
    description:
      "A conversion-focused WordPress shop for a Malaysian coffee brand, with mobile-first merchandising, WhatsApp-assisted ordering, and a checkout flow tuned for local payments.",
    image: "/eastmatecoffee-com-11-30-2025_02_29_PM.png",
    type: "WordPress",
    url: "https://eastmatecoffee.com",
    stack: ["WordPress", "WooCommerce", "SEO"],
    metrics: [
      { label: "Online orders", value: "+38%" },
      { label: "Largest paint", value: "1.8s" },
      { label: "Delivery", value: "4 weeks" },
    ],
  },
  {
    id: "moesie",
    title: "Moesie Corporate Website",
    client: "Moesie",
    category: "Business & Corporate",
    filters: ["WordPress"],
    description:
      "A professional services site with clear service architecture, enquiry-led CTAs, and performance work that keeps the brand looking premium on every device.",
    image: "/moesie-my-11-30-2025_02_28_PM.png",
    type: "WordPress",
    url: "https://moesie.my",
    stack: ["WordPress", "Custom theme", "Analytics"],
    metrics: [
      { label: "Enquiries", value: "+52%" },
      { label: "PageSpeed", value: "99" },
      { label: "Delivery", value: "3 weeks" },
    ],
  },
  {
    id: "ops-portal",
    title: "Inventory & Orders Portal",
    client: "Confidential · Penang SME",
    category: "Operations Web App",
    filters: ["Web Apps"],
    description:
      "An internal operations dashboard that replaced spreadsheet workflows with live inventory, order status, and role-based access for warehouse and sales teams.",
    image: "/Frontend.webp",
    type: "Web App",
    stack: ["Next.js", "Node.js", "MySQL"],
    metrics: [
      { label: "Admin time saved", value: "12 hrs/wk" },
      { label: "Uptime", value: "99.9%" },
      { label: "Delivery", value: "6 weeks" },
    ],
    confidential: true,
  },
  {
    id: "retail-storefront",
    title: "Specialty Retail Storefront",
    client: "Confidential · Klang Valley",
    category: "E-commerce Platform",
    filters: ["E-commerce", "Web Apps"],
    description:
      "A custom storefront with catalogue filters, local courier quotes, and a checkout path designed for Malaysian shoppers on mobile-first connections.",
    image: "/e-commerce.jpg",
    type: "Custom",
    stack: ["Next.js", "Stripe", "SEO"],
    metrics: [
      { label: "Mobile conversion", value: "+41%" },
      { label: "Checkout drop-off", value: "-27%" },
      { label: "Delivery", value: "5 weeks" },
    ],
    confidential: true,
  },
];
