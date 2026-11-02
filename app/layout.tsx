import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { businessEmail, businessPhoneDisplay, businessPhoneHref, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Indian Makhana for the USA | Grainbodha", template: "%s | Grainbodha" },
  description: "Discover Grainbodha roasted makhana and fox nuts, proudly made in India for American retailers, distributors and snack lovers. Contact us about U.S. availability and orders.",
  keywords: ["makhana USA", "fox nuts USA", "roasted makhana", "Indian snacks in America", "wholesale makhana USA"],
  applicationName: "Grainbodha",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Grainbodha", title: "Indian Makhana for the USA | Grainbodha", description: "Roasted makhana rooted in India, ready for American shelves. Connect with Grainbodha about retail, distribution and orders.", url: "/", images: [{ url: "/images/flavoured-makhana.jpg", width: 923, height: 1152, alt: "Grainbodha roasted makhana flavor range" }] },
  twitter: { card: "summary_large_image", title: "Indian Makhana for the USA | Grainbodha", description: "Roasted makhana made in India. Contact us about U.S. orders and distribution." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export const viewport: Viewport = { themeColor: "#f7f5ef", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const org = { "@context": "https://schema.org", "@type": "Organization", name: "Grainbodha", legalName: "Grainbodha Global Food Private Limited", url: siteUrl, logo: `${siteUrl}/icon.svg`, email: businessEmail, telephone: businessPhoneHref, address: { "@type": "PostalAddress", streetAddress: "C-473/C, Indira Nagar, near HAL Gate", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", postalCode: "226016", addressCountry: "IN" } };
  return <html lang="en-US"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, "\\u003c") }} /><div className="announcement"><span>✦</span> Indian makhana for American shelves <span>·</span> U.S. wholesale & order inquiries welcome</div><header className="site-header"><div className="header-inner"><Link href="/" className="brand" aria-label="Grainbodha home"><span className="brand-mark">G</span><span>grainbodha<small>INDIAN MAKHANA · GLOBAL TABLES</small></span></Link><nav aria-label="Main navigation"><Link href="/#range">Our makhana</Link><Link href="/#journey">Our story</Link><Link href="/learn">Makhana guide</Link><Link href="/bulk-orders">U.S. wholesale</Link></nav><Link className="header-cta" href="/contact">Contact our team <span>↗</span></Link></div></header><main>{children}</main><footer className="site-footer"><div className="footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">G</span><span>grainbodha<small>INDIAN MAKHANA · GLOBAL TABLES</small></span></Link><p>Roasted makhana made in India for snack lovers, retailers and distributors in the United States.</p></div><div><b>Discover</b><Link href="/#range">Makhana range</Link><Link href="/learn">What is makhana?</Link><Link href="/bulk-orders">U.S. wholesale</Link></div><div><b>Get in touch</b><Link href="/contact">Phone, email & WhatsApp</Link><span>C-473/C, Indira Nagar, near HAL Gate, Lucknow 226016, India</span><a href={`tel:${businessPhoneHref}`}>{businessPhoneDisplay}</a><a href={`mailto:${businessEmail}`}>{businessEmail}</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Grainbodha Global Food Private Limited</span><span>Made in Lucknow, India · Connecting with U.S. buyers</span></div></footer></body></html>;
}
