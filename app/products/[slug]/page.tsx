import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Grainbodha India`,
    description: `${product.description} Contact Grainbodha about current availability, retail, wholesale and delivery in India and international markets.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: `${product.name} | Grainbodha`, description: product.description, url: `/products/${product.slug}` },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const schema = { "@context": "https://schema.org", "@type": "Product", name: product.name, description: product.description, brand: { "@type": "Brand", name: "Grainbodha" }, category: "Roasted Makhana and Fox Nut Snacks", url: `${siteUrl}/products/${product.slug}` };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span> / </span><Link href="/#range">Makhana</Link><span> / </span>{product.flavor}</div>
    <section className="detail-hero"><div className={`detail-image product-icon-tile ${product.color}`} aria-hidden="true"><span className="product-flavor-icon">{product.icon}</span></div><div className="detail-copy"><span className="eyebrow">GRAINBODHA · MADE IN INDIA</span><h1>{product.name}</h1><p>{product.description}</p><p>A familiar Indian snack flavor for curious snackers and modern shelves. Contact our team to ask about current products, pack formats and availability in India or international markets.</p><div className="detail-cta"><Link href="/contact" className="button button-dark">Ask about availability <span>↗</span></Link><Link href="/bulk-orders" className="text-link">Buying for your business? <span>→</span></Link></div><div className="detail-note">Tell us your city or country and estimated quantity. We’ll confirm current product details, pricing and delivery options directly.</div></div></section>
    <section className="related"><div className="section-heading"><div><span className="eyebrow">EXPLORE MORE</span><h2>Find your<br /><em>favorite crunch.</em></h2></div><Link href="/contact" className="text-link">Talk with our team <span>→</span></Link></div><div className="mini-products">{products.filter((item) => item.slug !== product.slug).slice(0, 3).map((item) => <Link className="mini-product" key={item.slug} href={`/products/${item.slug}`}><span>{item.flavor} Makhana</span><span>↗</span></Link>)}</div></section>
  </>;
}
