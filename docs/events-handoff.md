# Events coordination → website

Calendar account: eipankov@gmail.com. Website account and contact: immanentdomain@gmail.com. These are separate accounts; do not use the website account to infer the calendar source.

The source workflow is the user's ChatGPT conversation **Events coordination** (6a8dd5c2-e464-83e9-8851-feb4f4d9b588). The chat records show events being added to Google Calendar.

## Current state
The website has a working server-side Google Calendar adapter in lib/calendar.ts, with five-minute refresh, pagination, cancellation/private-entry filtering, detail routes, and automatic upcoming/past grouping.
Two saved public event listings were extracted from the coordination chat. Personal attendance choices, scheduling conflicts, and guessed end times were excluded.
Google Calendar authentication requested reconnection twice during this task. No live calendar or credentials were available to verify; the site currently uses the saved listings.

## To finish live connection
1. Choose or create a dedicated IMDO public calendar in Google Calendar. Do not make the existing personal calendar public.
2. In the mobile Events coordination conversation, direct events selected for the website into that dedicated calendar; keep personal notes and attendance decisions in the personal calendar.
3. Enable Google Calendar API in a Google Cloud project and configure a server-side API key restricted to that API.
4. Set GOOGLE_PUBLIC_CALENDAR_ID, GOOGLE_CALENDAR_API_KEY and IMDO_CALENDAR_PUBLISH_APPROVED=true in the hosting environment. The key is never sent to a browser.
5. Verify one selected event appears and a cancellation disappears.

The ChatGPT conversation is not itself a feed. No claim of live chat synchronization is made. The adapter reads only the explicitly configured public calendar. The Next.js static-export setting was removed to support live updates on Vercel.

## Submission deadline
October 23, 2026, 11:59 p.m., America/New_York. Editorial settings: lib/publication.ts. No publication date is promised.
