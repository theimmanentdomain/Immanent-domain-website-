# Google indexing

The source now provides canonical URLs, route-specific titles/descriptions, robots.txt, sitemap.xml, and Organization/WebSite structured data for The Immanent Domain, Immanent Domain, and IMDO.

Production URL: https://immanent-domain-website.vercel.app/
Development and Vercel preview deployments are marked noindex. Only production is intended for Google.
Unreleased film routes return 404 and are absent from the sitemap. Only current public pages are listed.

To make these changes available to Google:
1. Publish the reviewed changes to the existing Vercel production project.
2. In Google Search Console, add the URL-prefix property https://immanent-domain-website.vercel.app/ under the website account immanentdomain@gmail.com.
3. Set GOOGLE_SITE_VERIFICATION to the HTML-tag verification token in the production environment, then redeploy and verify. Do not use the entire meta tag as the variable value.
4. Submit sitemap.xml and use URL Inspection to request indexing of the homepage.
5. Check indexing status in Search Console. Indexing and ranking are controlled by Google, not guaranteed by this implementation.

No Search Console property, verification token, or Google submission has been created by this local work.
Official reference: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
