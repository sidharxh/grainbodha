import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Makhana? Indian Fox Nuts Guide",
  description: "Meet makhana, the Indian roasted fox nut snack. Learn how it is enjoyed and what U.S. shoppers and food businesses should ask before ordering.",
  alternates: { canonical: "/learn" },
};

const topics = [
  ["What are makhana or fox nuts?", "Makhana is a traditional Indian food ingredient made from the seeds of the Euryale ferox aquatic plant. In the U.S., it is often introduced as fox nuts or popped water lily seeds."],
  ["How do people eat makhana?", "Makhana is roasted and seasoned for a light, crisp snack. It is also used in savory and sweet Indian recipes. Seasoning styles can range from simple salt to pepper, herbs and spice blends."],
  ["What flavors does Grainbodha offer?", "Our range highlights familiar favorites such as classic salt, mint, black pepper and spiced flavors. Ask us which products and pack formats are currently available for your market."],
  ["Can I order makhana in the United States?", "Contact Grainbodha with your U.S. state, the product you’re interested in and an estimated quantity. We’ll confirm current availability, ingredients, pack sizes, pricing and delivery options."],
];

export default function LearnPage() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: "What is makhana? A guide to Indian fox nuts", description: "Learn about makhana, roasted fox nuts from India, flavor styles and what to confirm before ordering in the United States.", author: { "@type": "Organization", name: "Grainbodha" }, publisher: { "@type": "Organization", name: "Grainbodha" } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span> / </span>Makhana guide</div>
    <article className="guide"><div className="guide-head"><span className="eyebrow">THE GRAINBODHA GUIDE</span><h1>Meet India’s<br /><em>fox nuts.</em></h1><p>Get to know makhana: a beloved Indian snack with a crisp bite, savory flavors and a place on the American snack shelf.</p><div className="guide-meta">A short introduction <span>·</span> Makhana from India</div></div>
      <div className="guide-body">{topics.map(([title, text], index) => <section key={title}><span className="guide-count">0{index + 1}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}<div className="guide-cta"><h2>Curious about Grainbodha?</h2><p>Contact us about flavors, current product options and delivery to your state.</p><Link className="button button-dark" href="/contact">Connect with our team <span>↗</span></Link></div></div>
    </article>
  </>;
}
