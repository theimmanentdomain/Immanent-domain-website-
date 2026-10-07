# OSINT publication handoff

Public section: `/osint/`. Dated editions: `/osint/{id}/`. Research is a distinct series within OSINT. Navigation, homepage panel, archive, Article metadata and sitemap are included.

The five existing ChatGPT OSINT tasks have been updated and read back at 05:55, 11:11, 15:33, 21:21 and 23:23 New York time. There are no duplicate schedules. Phone notification permission and a dedicated destination have not been verified. The separate 11:30 research task has also been updated to retire Inland Empire and require verified publication.

## Durable publication

`POST /api/osint/publish` accepts JSON with a Bearer token. It stores one public JSON file per edition at `data/osint/reports/{id}.json` in `theimmanentdomain/Immanent-domain-website-`. Git history preserves corrections. Per-edition files prevent different editions from overwriting each other. Identical retries return the existing report; changed content requires a correction note. Conflicts return 409 and must be retried, not claimed successful. GitHub is the durable store, not Vercel's ephemeral filesystem.

Server-only environment variables: `OSINT_GITHUB_TOKEN` (fine-grained, only this repo, Contents read/write), `OSINT_GITHUB_BRANCH` (confirmed production branch), and `OSINT_PUBLISH_TOKEN` (separate producer credential). Configure secrets directly through the hosting/provider secret manager. Never paste them into report prompts, public files, logs or client code.

The scheduled producer needs an authenticated HTTP tool with access to the publisher credential, or a connected GitHub tool capable of creating the public report file. A textual instruction alone does not supply either capability. Cloud tasks do not inherit the desktop's Edge session; the approved public-source fallback applies on those runs.

The publisher confirms durable storage and returns the intended URL. The producer then fetches the public URL and verifies the edition ID/title, all section entries and source links before reporting website publication. Allow up to 60 seconds for the public data cache to refresh; use bounded retries. Preserve the report and disclose failures. Git integration may also trigger a deployment after the content commit; observe its status if the current production page cannot render the newly stored data.

## JSON contract

```
{
  "id": "2026-10-06-2121-osint",
  "series": "osint",
  "scheduledAt": "2026-10-06T21:21:00-04:00",
  "title": "IMDO OSINT — October 6, 2026 — 9:21 PM New York",
  "sections": [{
    "title": "Wars and Armed Conflicts",
    "entries": [{
      "title": "Actual source title",
      "sourceUrl": "https://source.example/article",
      "sourceDate": "Actual publication date",
      "eventDate": "Optional actual event date and logistics",
      "development": "Original summary of verified development",
      "significance": "Why it matters",
      "implications": "Optional supported implications",
      "uncertainty": "Optional limitations or attribution"
    }],
    "shortfall": "Required explanation if fewer than five entries"
  }],
  "nextMoves": ["Up to three actual watch points"],
  "correction": "Required when changing an existing edition"
}
```

The example above illustrates fields, not publishable report content. OSINT requires all five exact section names from `lib/osint-schema.ts`, in order. Research uses `series: research`, an ID ending in `1130-research`, one research section and 3–5 entries (or an explicit shortfall). `publishedAt` is assigned on first storage and preserved during corrections; `updatedAt` is assigned on correction. All source links must use HTTPS. No HTML, embedded media, private context or credentials are rendered or persisted outside the defined schema.

## Current blocker

The signed-in Vercel dashboard confirms the existing project is linked to this repository's main branch. The connected GitHub integration can read repository metadata but both Git tree creation and Contents writes return 403, Resource not accessible by integration. A local Git push also waits for credential-manager authentication. Repository write authorization must be restored before deployment. No publication secrets have been provisioned and no live end-to-end report publication is claimed.
