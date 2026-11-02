import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale & Business Enquiries | Makhana, Nuts and Seeds",
  description: "Speak with Grainbodha about makhana, nuts and seeds for retail, distribution and food businesses in India and international markets.",
  alternates: { canonical: "/bulk-orders" },
};

export default function BulkOrders() {
  return <>
    <div className="breadcrumb"><Link href="/">Home</Link><span> / </span>Business enquiries</div>
    <section className="bulk-page">
      <div className="page-intro">
        <span className="eyebrow">RETAIL · DISTRIBUTION · FOOD SERVICE</span>
        <h1>Good food<br /><em>for your market.</em></h1>
        <p>Makhana is at our heart, alongside nuts and seeds. We welcome conversations with retailers, distributors and food businesses in India and international markets.</p>
        <div className="business-note"><span>01</span><p>When you call or email, share your business type, city or country, the products you’re interested in and estimated quantity. We’ll respond with current product and delivery information.</p></div>
        <Link href="/contact" className="button button-dark">Discuss wholesale with us <span>↗</span></Link>
      </div>
      <div className="bulk-contact-card"><span className="eyebrow">ROOTED IN INDIA · OPEN TO THE WORLD</span><h2>Let’s explore what’s possible.</h2><p>From first product questions to a larger sourcing conversation, our team can help you understand the Grainbodha range and current options for your location.</p><Link href="/contact" className="text-link">Call, email or WhatsApp <span>→</span></Link></div>
    </section>
  </>;
}
