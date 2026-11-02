import type { MetadataRoute } from "next";
import { products, siteUrl } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return ["", "/products/classic-salted-makhana", ...products.filter(p=>p.slug!=="classic-salted-makhana").map(p=>`/products/${p.slug}`), "/bulk-orders", "/contact", "/learn"].map((path)=>({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency: path.includes("products") ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/contact" || path === "/bulk-orders" ? 0.8 : 0.7 })); }
