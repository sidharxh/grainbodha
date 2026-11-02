import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";
import { businessEmail, businessPhoneDisplay, businessPhoneHref, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Makhana, Nuts & Seeds from India | Grainbodha", template: "%s | Grainbodha" },
  description: "Discover Grainbodha, rooted in Lucknow, India. Makhana is at our heart, alongside nuts and seeds for customers, retailers and food businesses in India and international markets.",
  keywords: ["makhana", "fox nuts", "roasted makhana", "nuts and seeds", "Indian food products", "makhana supplier India", "makhana wholesale"],
  applicationName: "Grainbodha",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Grainbodha", title: "Makhana, Nuts & Seeds from India | Grainbodha", description: "Makhana at our heart, with nuts and seeds for customers and food businesses in India and international markets.", url: "/", images: [{ url: "/images/flavoured-makhana.jpg", width: 923, height: 1152, alt: "Grainbodha roasted makhana flavor range" }] },
  twitter: { card: "summary_large_image", title: "Makhana, Nuts & Seeds from India | Grainbodha", description: "Discover Grainbodha’s makhana, nuts and seeds. Rooted in India, for everyday tables near and far." },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
};
export const viewport: Viewport = { themeColor: "#f7f5ef", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const org = { "@context": "https://schema.org", "@type": "Organization", name: "Grainbodha", legalName: "Grainbodha Global Food Private Limited", url: siteUrl, logo: `${siteUrl}/icon.svg`, email: businessEmail, telephone: businessPhoneHref, address: { "@type": "PostalAddress", streetAddress: "C-473/C, Indira Nagar, near HAL Gate", addressLocality: "Lucknow", addressRegion: "Uttar Pradesh", postalCode: "226016", addressCountry: "IN" } };
  return <html lang="en-IN"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org).replace(/</g, "\\u003c") }} /><div className="announcement"><span>✦</span> Rooted in India · made for everyday tables <span>·</span> India & international enquiries welcome</div><header className="site-header"><div className="header-inner"><Link href="/" className="brand" aria-label="Grainbodha home"><span className="brand-mark">G</span><span>grainbodha<small>MAKHANA · NUTS · SEEDS</small></span></Link><nav aria-label="Main navigation"><Link href="/#range">Our food range</Link><Link href="/#journey">Our story</Link><Link href="/learn">Makhana guide</Link><Link href="/bulk-orders">Business enquiries</Link></nav><Link className="header-cta" href="/contact">Contact our team <span>↗</span></Link></div></header><main>{children}</main><footer className="site-footer"><div className="footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">G</span><span>grainbodha<small>MAKHANA · NUTS · SEEDS</small></span></Link><p>Rooted in Lucknow, India. Makhana is at our heart, alongside nuts and seeds for customers and food businesses near and far.</p></div><div><b>Discover</b><Link href="/#range">Our food range</Link><Link href="/learn">What is makhana?</Link><Link href="/bulk-orders">Business enquiries</Link></div><div><b>Get in touch</b><Link href="/contact">Phone, email & WhatsApp</Link><span>C-473/C, Indira Nagar, near HAL Gate, Lucknow 226016, India</span><a href={`tel:${businessPhoneHref}`}>{businessPhoneDisplay}</a><a href={`mailto:${businessEmail}`}>{businessEmail}</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Grainbodha Global Food Private Limited</span><span>Made in Lucknow, India · Connecting with food lovers everywhere</span></div></footer></body></html>;
}
