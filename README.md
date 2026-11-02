# Grainbodha

Next.js App Router website for Grainbodha Global Food Private Limited.

## SEO foundation

- Server-rendered landing, product, contact, bulk-order and educational pages.
- Page-specific titles, descriptions, canonical URLs and social metadata.
- `app/sitemap.ts` and `app/robots.ts` expose `/sitemap.xml` and `/robots.txt`.
- JSON-LD for the organization, product list, product pages, FAQ and makhana guide.
- Descriptive image alternative text and responsive image sizing.

## Product details and pricing

Pricing is enquiry-only. The site does not publish product prices or estimates. Visitors can ask for current price, pack sizes, ingredients, availability and delivery options through the order or bulk enquiry forms.

The supplied product images are design concepts. Confirm final product names, formulations, labels, pack sizes, claims and availability before treating them as live sale listings.

## Email enquiries

Website form submissions are sent server-side through Resend. Configure these environment variables in local `.env.local` and in the deployment environment:

- `CONTACT_EMAIL`: the inbox that receives enquiries.
- `RESEND_API_KEY`: Resend API key.
- `INQUIRY_FROM_EMAIL`: sender address on a domain verified with Resend.
- `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER`: verified public contact details displayed on the site.
- `NEXT_PUBLIC_SITE_URL`: canonical production origin, for example `https://grainbodha.com` once confirmed.

Do not commit API keys. The form reports an error until email delivery is configured.

## Run locally

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The repository supplied with this task was empty, so this app was scaffolded in the local `grainbodha/` resource directory.
