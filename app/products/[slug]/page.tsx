import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const product = products.find((p) => p.slug === slug); if (!product) return {};
  return { title: `${product.name} | Roasted Fox Nuts`, description: `${product.description} Contact Grainbodha about current availability, pack sizes and ordering.`, alternates: { canonical: `/products/${product.slug}` }, openGraph: { title: `${product.name} | Grainbodha`, description: product.description, url: `/products/${product.slug}` } };
}
export default async function ProductPage({ params }: Props) {
  const { slug } = await params; const p = products.find((item) => item.slug === slug); if (!p) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Product", name: p.name, description: p.description, brand: { "@type": "Brand", name: "Grainbodha" }, category: "Roasted Makhana Snacks", url: `${siteUrl}/products/${p.slug}` };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><div className="breadcrumb"><Link href="/">Home</Link><span> / </span><Link href="/#range">Makhana</Link><span> / </span>{p.flavour}</div><section className="detail-hero"><div className={`detail-image product-icon-tile ${p.color}`} aria-hidden="true"><span className="product-flavour-icon">{p.icon}</span></div><div className="detail-copy"><span className="eyebrow">GRAINBODHA · ROASTED MAKHANA</span><h1>{p.name}</h1><p>{p.description}</p><p>Contact us to confirm available pack sizes, ingredients, pricing and delivery options for this flavour.</p><div className="detail-cta"><Link href="/contact" className="button button-dark">Contact to order <span>↗</span></Link><Link href="/bulk-orders" className="text-link">Need a bulk quantity? <span>→</span></Link></div><div className="detail-note">Ingredients, nutrition, pack size and product availability should be confirmed against the final product label before ordering.</div></div></section><section className="related"><div className="section-heading"><div><span className="eyebrow">MORE TO CRUNCH ON</span><h2>Explore the <em>range.</em></h2></div><Link href="/contact" className="text-link">Contact us <span>→</span></Link></div><div className="mini-products">{products.filter((x)=>x.slug!==p.slug).slice(0,3).map((x)=><Link className="mini-product" key={x.slug} href={`/products/${x.slug}`}><span>{x.flavour}</span><span>↗</span></Link>)}</div></section></>;
}
