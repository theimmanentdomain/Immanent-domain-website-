# IMDO Discovery and Studio

Visitors can open /discovery/ from the main navigation. Filtered draws use the pages and topics in data/site-content.json. Unfiltered web draws use the October 2026 Common Crawl CDXJ snapshot (CC-MAIN-2026-43), sampled across byte ranges of its cluster index, with at most one HTTPS HTML capture per hostname after removing the www prefix and excluding query strings. The sample is stored in data/discovery/common-crawl.json. Unfiltered topic draws use the English Wikipedia Action API's main-namespace random list. data/discovery/wikipedia.json contains backup titles and article IDs sampled from the same API.

## Enable owner access on Vercel

The private imdo-studio-content Vercel Blob store is connected to the project and supplies BLOB_READ_WRITE_TOKEN. In the project's Production environment, set IMDO_EDITOR_SECRET as a sensitive variable and redeploy. Use a password manager to generate and save a unique 32–128 character password without spaces. Enter it on /studio/.

Open /studio/ to edit homepage copy, About copy, the Discovery introduction, and the filtered page and topic lists. Publish changes saves to the private store and invalidates the public pages' caches. The bundled content in data/site-content.json is the initial version until the first save. Rotating the Studio password expires all existing Studio sessions.
