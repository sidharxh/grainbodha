export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://grainbodha.com";
export const businessEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";
export const businessPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "";
export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export const products = [
  { slug: "classic-salted-makhana", name: "Classic Salted Makhana", flavour: "Classic Salted", description: "Lightly seasoned roasted makhana with a simple, savoury finish.", image: "/images/grainbodha-makhana-packs.jpg", color: "cream" },
  { slug: "peri-peri-makhana", name: "Peri Peri Makhana", flavour: "Peri Peri", description: "A lively chilli and spice profile for a punchier roasted makhana snack.", image: "/images/flavoured-makhana.jpg", color: "coral" },
  { slug: "black-pepper-makhana", name: "Black Pepper Makhana", flavour: "Black Pepper", description: "A savoury roasted makhana flavour with a peppery finish.", image: "/images/grainbodha-makhana-packs.jpg", color: "sage" },
  { slug: "pudina-makhana", name: "Pudina Makhana", flavour: "Mint & Pudina", description: "A mint-forward take on roasted makhana for a fresh, savoury bite.", image: "/images/flavoured-makhana.jpg", color: "mint" },
];
