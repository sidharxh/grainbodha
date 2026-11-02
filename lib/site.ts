export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://grainbodha.com";
export const businessEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "grainbodhaglobalfood@gmail.com";
export const businessPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "9452062975";
const phoneDigits = businessPhone.replace(/\D/g, "");
const internationalPhoneDigits = phoneDigits.length === 10 ? `91${phoneDigits}` : phoneDigits;
export const businessPhoneHref = `+${internationalPhoneDigits}`;
export const businessPhoneDisplay = internationalPhoneDigits.length === 12 && internationalPhoneDigits.startsWith("91")
  ? `+91 ${internationalPhoneDigits.slice(2, 7)} ${internationalPhoneDigits.slice(7)}`
  : businessPhone;
export const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919452062975";

export const products = [
  { slug: "classic-salted-makhana", name: "Classic Salted Makhana", flavor: "Classic Salted", description: "Lightly seasoned roasted makhana with a simple, savory finish.", color: "cream", icon: "✳" },
  { slug: "peri-peri-makhana", name: "Peri Peri Makhana", flavor: "Peri Peri", description: "A lively chili and spice profile for a punchier roasted makhana snack.", color: "coral", icon: "♨" },
  { slug: "black-pepper-makhana", name: "Black Pepper Makhana", flavor: "Black Pepper", description: "A savory roasted makhana flavor with a peppery finish.", color: "sage", icon: "●" },
  { slug: "pudina-makhana", name: "Pudina Makhana", flavor: "Mint & Pudina", description: "A mint-forward take on roasted makhana for a fresh, savory bite.", color: "mint", icon: "❋" },
];

export const productCategories = [
  { name: "Makhana", description: "Our signature roasted makhana, rooted in Indian food traditions and made for everyday snacking.", icon: "✳", featured: true },
  { name: "Nuts", description: "A growing selection of quality nuts for snacking, cooking and sharing.", icon: "◉", featured: false },
  { name: "Seeds", description: "Versatile seeds selected for wholesome snacks and pantry staples.", icon: "❋", featured: false },
];
