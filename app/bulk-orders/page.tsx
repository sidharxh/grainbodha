import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "U.S. Wholesale Makhana & Fox Nuts",
  description: "Source roasted Indian makhana for U.S. retail, distribution and food businesses. Contact Grainbodha to discuss wholesale quantities, pricing and delivery by state.",
  alternates: { canonical: "/bulk-orders" },
};

export default function BulkOrders() {
  return <>
    <div className="breadcrumb"><Link href="/">Home</Link><span> / </span>U.S. wholesale</div>
    <section className="bulk-page">
      <div className="page-intro">
        <span className="eyebrow">RETAIL · DISTRIBUTION · FOOD SERVICE</span>
        <h1>Indian makhana<br /><em>for U.S. shelves.</em></h1>
        <p>Bring a distinctive Indian snack to your customers. Grainbodha welcomes conversations with American retailers, importers, distributors and food businesses.</p>
        <div className="business-note"><span>01</span><p>When you call or email, share your business type, destination state, preferred flavors and estimated quantity. We’ll respond with current product and delivery information.</p></div>
        <Link href="/contact" className="button button-dark">Discuss wholesale with us <span>↗</span></Link>
      </div>
      <div className="bulk-contact-card"><span className="eyebrow">YOUR U.S. MARKET, OUR INDIAN ROOTS</span><h2>Let’s explore what’s possible.</h2><p>From first product questions to a larger sourcing conversation, our team can help you understand the Grainbodha range and current options for your location.</p><Link href="/contact" className="text-link">Call, email or WhatsApp <span>→</span></Link></div>
    </section>
  </>;
}
