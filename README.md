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

## Contact form and Google Sheets

The contact and bulk order forms submit to `/api/contact`. The route appends an India-time timestamp, name, email, phone, enquiry type, business, quantity, delivery city and message to the `Contacts` tab of a Google Sheet. It returns success only when the append succeeds; if credentials, sheet access or the request fail, the form displays an error.

Configure these environment variables in Vercel (and `.env.local` for local development):

- `GOOGLE_CLIENT_EMAIL`: Google service-account email.
- `GOOGLE_PRIVATE_KEY`: service-account private key. Store as a secret; preserve newlines or use `\\n` sequences.
- `SHEET_ID`: spreadsheet ID from its URL.
- `NEXT_PUBLIC_SITE_URL`: canonical production website URL.
- Optional public contacts: `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER`.

Create a `Contacts` sheet tab with this header row in columns A:I: `Timestamp`, `Name`, `Email`, `Phone`, `Enquiry Type`, `Business`, `Estimated Quantity`, `Delivery City`, `Message`. Share the spreadsheet with `GOOGLE_CLIENT_EMAIL` and grant Editor access. Never commit service-account credentials.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```
