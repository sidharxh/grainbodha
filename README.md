# Grainbodha

Next.js App Router website for Grainbodha Global Food Private Limited.

## Website structure and SEO

- Homepage for roasted makhana and the Grainbodha flavour concepts.
- Individual flavour pages, a makhana guide, and direct contact details for retail and bulk enquiries.
- Server-rendered pages with page metadata, canonical URLs, structured data, sitemap, robots rules and descriptive image text.
- Product pricing stays enquiry-only. The supplied packaging images are concepts; confirm final products, ingredients, labels, claims, sizes and availability before treating them as sale listings.

## Contact

The website does not collect or store enquiries. The contact and business enquiry pages direct visitors to Grainbodha by phone, email, WhatsApp or office address. Public contact details and the canonical website URL can be configured through the matching `NEXT_PUBLIC_*` variables in `.env.local` or the deployment environment.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```
