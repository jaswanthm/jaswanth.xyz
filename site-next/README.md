This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Google Analytics 4 Setup

This project is wired for GA4 using an environment variable.

1. Create a GA4 property and a Web Data Stream in Google Analytics.
2. Copy your Measurement ID (format: `G-XXXXXXXXXX`).
3. Create a local env file from `.env.example` and set:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. For Netlify production, add the same variable in Site settings -> Environment variables.
5. Redeploy and verify events in GA4 Realtime report.

### What is tracked now

1. Automatic pageviews on route changes (App Router compatible).

### Pricing implications

1. GA4 standard tier is free for typical portfolio traffic.
2. There is a paid enterprise tier (GA4 360), but most personal/professional sites do not need it.
3. Netlify does not charge extra specifically for GA4 scripts, but normal bandwidth/build usage still applies.
