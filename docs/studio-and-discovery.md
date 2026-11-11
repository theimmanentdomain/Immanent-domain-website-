# IMDO Discovery and Studio

Visitors can open /discovery/ from the main navigation. Filtered draws use the pages and topics in data/site-content.json. Unfiltered web draws use the October 2026 Common Crawl CDXJ snapshot (CC-MAIN-2026-43), sampled across byte ranges of its cluster index, with at most one HTTPS HTML capture per hostname after removing the www prefix and excluding query strings. The sample is stored in data/discovery/common-crawl.json. Unfiltered topic draws use the English Wikipedia Action API's main-namespace random list. data/discovery/wikipedia.json contains backup titles and article IDs sampled from the same API.

## Enable owner access on Vercel

In the IMDO Vercel project's Production environment, add these server-side variables and redeploy:

- IMDO_EDITOR_SECRET. Use your phone’s password manager to generate and save a unique 32–128 character password without spaces. Enter that password on /studio/.
- IMDO_EDITOR_GITHUB_TOKEN. Use a fine-grained GitHub token limited to the site repository with Contents read/write. This is optional if the existing OSINT_GITHUB_TOKEN already has that access.
- IMDO_EDITOR_GITHUB_BRANCH. Optional override for the existing OSINT_GITHUB_BRANCH, or main if neither is set. Use the branch Vercel deploys to production.

Open /studio/ to edit homepage copy, About copy, the Discovery introduction, and the filtered page and topic lists. Publish changes commits the public content file to GitHub. Check live status compares the committed content against the current Vercel deployment. GitHub keeps past versions of the file. Rotating the Studio secret expires all existing Studio sessions.
