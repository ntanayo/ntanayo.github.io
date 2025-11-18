---
title: 'SEO, Google Analytics, and GTM — A Non-Technical Guide'
date: 2025-11-20
slug: seo-analytics-guide
categories: [growth, analytics]
tags: [seo, analytics, gtm]
draft: false
---

This post explains, in plain language, what SEO, Google Analytics (GA4), and Google Tag Manager (GTM) are, and how a non-technical blogger can use them to improve the site.

SEO (Search Engine Optimization)

- What it is: SEO is the process of making your content easy for search engines to find and understand.
- Quick actions:
  - Use descriptive titles and clear URLs (we use /posts/:slug/).
  - Add a short description or excerpt to each post and fill `site.description` in `src/data/site.ts`.
  - Use headings (H1, H2) and include keywords naturally in the first paragraph.
  - Add alt text to images.

Google Analytics (GA4)

- What it is: GA4 collects anonymous visitor metrics (how many visitors, which pages they view, which countries they come from).
- How to enable: replace the placeholder `G-XXXXXXXXXX` in `src/data/site.ts` with your Measurement ID.
- What to check: after enabling, open the Realtime report to confirm visits and then check Engagement to see which posts get traffic.

Google Tag Manager (GTM)

- What it is: GTM is a container for scripts (tags) like Google Analytics, Facebook Pixel, etc. It allows you to add tracking without changing code every time.
- Non-technical workflow:
  1. Create a GTM account and container at tagmanager.google.com.
  2. Install the GTM snippet once in `src/layouts/BaseLayout.astro` (I can add instructions or add it for you).
  3. From GTM's web UI, add tags (e.g., Google Analytics) and publish the container — no code changes needed later.

Privacy and consent

- Consider a simple privacy statement in your footer explaining that you use GA for anonymous analytics and Utterances for comments.
- If you need GDPR/consent handling, use a consent manager or a basic banner that explains tracking and links to your privacy page.

Where to start (recommended order)

1. Create a Google Analytics (GA4) property and get the Measurement ID.
2. Put the GA ID into `src/data/site.ts` (googleAnalytics field).
3. Use `npm run dev` to preview locally and ensure the GA snippet appears in the page source.
4. Optionally add GTM and move GA into GTM if you want more control over tags.

Need help?

- I can add the GA snippet directly into `src/layouts/BaseLayout.astro` and/or add GTM snippet placeholders. Tell me which you prefer and I will update the layout file with clear instructions and placeholders.
