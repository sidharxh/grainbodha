import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Makhana? A Guide to Indian Fox Nuts",
  description: "Meet makhana, a much-loved Indian food made from popped seeds. Learn how it is enjoyed in Indian kitchens and around the world.",
  alternates: { canonical: "/learn" },
};

const topics = [
  ["What are makhana or fox nuts?", "Makhana is a traditional Indian food ingredient made from the seeds of the Euryale ferox aquatic plant. It is also known as fox nuts or popped water lily seeds."],
  ["How do people eat makhana?", "Makhana is roasted and seasoned for a light, crisp snack. It is also used in savory and sweet Indian recipes. Seasoning styles can range from simple salt to pepper, herbs and spice blends."],
  ["What flavors does Grainbodha offer?", "Our range highlights familiar favorites such as classic salt, mint, black pepper and spiced flavors. Ask us which products and pack formats are currently available for your market."],
  ["Where can I order Grainbodha makhana?", "We welcome enquiries from customers and food businesses in India and international markets. Contact Grainbodha with your city or country, the product you’re interested in and an estimated quantity. We’ll confirm current availability, ingredients, pack sizes, pricing and delivery options."],
];

export default function LearnPage() {
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: "What is makhana? A guide to Indian fox nuts", description: "Learn about makhana, roasted fox nuts from India, how it is enjoyed and what to confirm before ordering.", author: { "@type": "Organization", name: "Grainbodha" }, publisher: { "@type": "Organization", name: "Grainbodha" } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <div className="breadcrumb"><Link href="/">Home</Link><span> / </span>Makhana guide</div>
    <article className="guide"><div className="guide-head"><span className="eyebrow">THE GRAINBODHA GUIDE</span><h1>Meet India’s<br /><em>fox nuts.</em></h1><p>Get to know makhana: a beloved Indian food with a crisp bite, savory flavors and a place at everyday tables around the world.</p><div className="guide-meta">A short introduction <span>·</span> Makhana from India</div></div>
      <div className="guide-body">{topics.map(([title, text], index) => <section key={title}><span className="guide-count">0{index + 1}</span><div><h2>{title}</h2><p>{text}</p></div></section>)}<div className="guide-cta"><h2>Curious about Grainbodha?</h2><p>Contact us about flavors, current product options and delivery to your location.</p><Link className="button button-dark" href="/contact">Connect with our team <span>↗</span></Link></div></div>
    </article>
  </>;
}
