import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { businessEmail, businessPhone, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Grainbodha | Roasted Makhana & Healthy Snacks", template: "%s | Grainbodha" },
  description: "Discover Grainbodha roasted makhana: a modern Indian snack in classic and bold flavours. Explore our range or enquire about retail and bulk orders.",
  applicationName: "Grainbodha",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Grainbodha", title: "Grainbodha | Roasted Makhana & Healthy Snacks", description: "Explore roasted makhana and get in touch with Grainbodha for product and bulk enquiries.", url: "/", images: [{ url: "/images/grainbodha-makhana-packs.jpg", width: 923, height: 1152, alt: "Grainbodha roasted makhana pack concepts" }] },
  twitter: { card: "summary_large_image", title: "Grainbodha | Roasted Makhana & Healthy Snacks", description: "Explore Grainbodha roasted makhana and enquire about orders." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export const viewport: Viewport = { themeColor: "#f7f4eb", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const org = { "@context": "https://schema.org", "@type": "Organization", name: "Grainbodha", legalName: "Grainbodha Global Food Private Limited", url: siteUrl, logo: `${siteUrl}/icon.svg`, email: businessEmail, telephone: businessPhone, address: { "@type": "PostalAddress", streetAddress: "C-473/C, Indira Nagar, near HAL Gate", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", postalCode: "226016", addressCountry: "IN" } };
  return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, "\\u003c") }} /><header className="site-header"><div className="header-inner"><Link href="/" className="brand" aria-label="Grainbodha home"><span className="brand-mark">G</span><span>grainbodha<small>GOODNESS, GROWN CLOSE</small></span></Link><nav aria-label="Main navigation"><Link href="/products/classic-salted-makhana">Shop Makhana</Link><Link href="/learn">Makhana guide</Link><Link href="/bulk-orders">Bulk orders</Link></nav><Link className="header-cta" href="/contact">Get in touch <span>↗</span></Link></div></header><main>{children}</main><footer className="site-footer"><div className="footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">G</span><span>grainbodha<small>GOODNESS, GROWN CLOSE</small></span></Link><p>Roasted makhana for everyday snacking, sharing and stocking up.</p></div><div><b>Explore</b><Link href="/products/classic-salted-makhana">Our makhana</Link><Link href="/learn">Makhana guide</Link><Link href="/bulk-orders">Bulk & trade</Link></div><div><b>Talk to us</b><Link href="/contact">Contact Grainbodha</Link><span>C-473/C, Indira Nagar, near HAL Gate, Lucknow 226016</span><a href={`tel:${businessPhone}`}>{businessPhone}</a><a href={`mailto:${businessEmail}`}>{businessEmail}</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Grainbodha Global Food Private Limited</span><span>Thoughtfully made in India</span></div></footer></body></html>;
}
