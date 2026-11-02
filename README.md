# Grainbodha

Next.js App Router website for Grainbodha Global Food Private Limited.

## Website structure and SEO

- Homepage for roasted makhana and the Grainbodha flavour concepts.
- Individual flavour pages, a makhana guide, contact form, and retail/bulk enquiry form.
- Server-rendered pages with page metadata, canonical URLs, structured data, sitemap, robots rules and descriptive image text.
- Product pricing stays enquiry-only. The supplied packaging images are concepts; confirm final products, ingredients, labels, claims, sizes and availability before treating them as sale listings.

## Enquiry storage and admin

Website forms submit to `/api/contact`. Enquiries are stored in the site's Neon Postgres database. The private `/admin` page lists recent enquiries after sign-in. It does not use Google Sheets.

Vercel serverless functions cannot reliably keep data in local files, so the site needs a persistent database. In Vercel, install the Neon Marketplace integration and connect it to the Grainbodha project; this provisions `DATABASE_URL`. The app creates its `grainbodha_enquiries` table on the first form submission or admin list request.

Set these server-side Vercel environment variables for Production (and Preview/Development if needed):

- `DATABASE_URL`: provisioned by the Neon integration.
- `ADMIN_USERNAME`: admin sign-in ID (for example, `admin`).
- `ADMIN_PASSWORD`: use a private, strong password. Do not use `admin` on a public website: this dashboard contains customer contact details.
- `ADMIN_SESSION_SECRET`: long random secret used to sign an 8-hour, HTTP-only admin session cookie. Generate with `openssl rand -base64 32`.
- `NEXT_PUBLIC_SITE_URL`: confirmed canonical website URL.
- Optional public contacts: `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_CONTACT_PHONE`, `NEXT_PUBLIC_WHATSAPP_NUMBER`.

Admin credentials are read only on the server and are not included in browser code. After adding or changing Vercel environment variables, redeploy the site.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```
