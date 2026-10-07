"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { submissionCall } from "@/lib/publication";

const panels = [
  {
    id: "007", category: "Intelligence / Daily editions", title: "OSINT",
    lines: ["OSINT"], theme: "blue", note: "THE WORLD / THE CITY / THE STATE OF DOWNTOWN",
    description: "World conflicts, political shifts, NYC affairs, The State of Downtown, and occult practice and machine intuition.",
    detail: "Dated developments, original sources, and practical implications. Five daily editions, with a separate Machine Intuition research series.",
    fields: [["Editions", "5:55 / 11:11 / 15:33 / 21:21 / 23:23"], ["Timezone", "New York"]],
    href: "/osint", action: "Read OSINT",
  },
  {
    id: "001", category: "Publication / Open call", title: "Blame It On Downtown",
    lines: ["BLAME IT", "ON", "DOWNTOWN"], theme: "paper",
    note: "SUBMISSIONS CLOSE OCTOBER 23, 2026",
    description: "Essays, criticism, conversations, field reports, photography, and visual work. Send us something worth putting into print.",
    detail: "Email your work or a short pitch, your name, and a few lines of context. Attach a readable file or share an accessible link.",
    fields: [["Deadline", "October 23, 2026 · 11:59 p.m. New York time"], ["Contact", submissionCall.email]],
    href: "/magazine/submissions", action: "Read the open call",
  },
  {
    id: "002", category: "Events / Selected gatherings", title: "Out in the City",
    lines: ["OUT IN", "THE CITY"], theme: "blue",
    note: "READINGS / PERFORMANCES / EXHIBITIONS",
    description: "Readings, performances, exhibitions, and gatherings in our orbit.",
    detail: "Explore selected events, dates, venues, and details from The Immanent Domain’s events calendar.",
    fields: [["Calendar", "New York time"], ["Listings", "Upcoming and past events"]],
    href: "/events", action: "Explore events",
  },
  {
    id: "003", category: "The agency / People & practice", title: "The Immanent Domain",
    lines: ["THE", "IMMANENT", "DOMAIN"], theme: "ochre",
    note: "INDEPENDENT ARTS AGENCY / NEW YORK",
    description: "Artists, writers, performers, and producers working together across publications, live events, and collaborative projects.",
    detail: "Founded by Edward Pankov, IMDO brings people together to make work and put it into circulation. The agency represents the capacity of a group.",
    fields: [["Founded by", "Edward Pankov"], ["Based in", "New York"]],
    href: "/about", action: "About the agency",
  },
  {
    id: "004", category: "Project / Live performance", title: "The Moment Is Yours",
    lines: ["THE MOMENT", "IS YOURS"], theme: "wine",
    note: "ATTENTION / PERCEPTION / PERFORMANCE",
    description: "An event in development exploring how artists can study and work with the techniques of attention.",
    detail: "Hypnosis, persuasion, and ritual become material for consensual public performance. Program, participants, date, and venue will be announced as they are confirmed.",
    fields: [["Stage", "Active planning"], ["Format", "Live performance / public experiment"]],
    href: "/work/the-moment-is-yours", action: "Explore the project",
  },
  {
    id: "005", category: "Archive / Documents", title: "The Archive",
    lines: ["THE", "ARCHIVE"], theme: "dark",
    note: "DOCUMENTS / WRITING / EXPERIMENTS",
    description: "Writing, documents, and experiments from The Immanent Domain.",
    detail: "Explore the agency’s archive of field reports, fragments, publications, and institutional experiments.",
    fields: [["Collection", "Documents and field notes"]],
    href: "/archive", action: "Enter the archive",
  },
  {
    id: "006", category: "Working together / Conduct", title: "Code of Conduct",
    lines: ["CODE OF", "CONDUCT"], theme: "paper",
    note: "HONESTY / CONSENT / RESPONSIBILITY",
    description: "Treat others as you would wish to be treated.",
    detail: "The interpersonal standards of The Immanent Domain: truthful speech, respect for boundaries, responsible conduct, and care for the people doing the work.",
    fields: [["Foundation", "The Golden Rule"], ["Applies to", "Our work together"]],
    href: "/code-of-conduct", action: "Read the code",
  },
];
type Panel = (typeof panels)[number];

function Plate({ panel }: { panel: Panel }) {
  return <span className={"dossier-plate dossier-plate--" + panel.theme} aria-hidden="true">
    <span className="dossier-label">{panel.category}</span>
    <span className="dossier-title">{panel.lines.map(line => <span key={line}>{line}</span>)}</span>
    <span className="dossier-bottom"><span>{panel.note}</span><span>{panel.id}</span></span>
  </span>;
}

export default function AgencyPanels() {
  const [active, setActive] = useState<Panel | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [active]);

  function open(panel: Panel) {
    setActive(panel);
    dialog.current?.showModal();
  }

  return <section className="dossier-section" aria-labelledby="dossier-heading">
    <div className="dossier-heading"><h2 id="dossier-heading">Inside the Domain</h2><span>001—007 / Publications, intelligence, gatherings & practice</span></div>
    <div className="dossier-grid">
      {panels.map(panel => <button key={panel.id} className="dossier-card" aria-haspopup="dialog" onClick={() => open(panel)}>
        <Plate panel={panel} />
        <span className="dossier-caption"><span className="dossier-label">{panel.id} / {panel.category}</span><span className="dossier-card-title">{panel.title}</span><span className="dossier-action">Open panel ↗</span></span>
      </button>)}
    </div>
    <dialog ref={dialog} className="dossier-dialog" aria-labelledby="active-panel-title" onClose={() => setActive(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="dossier-dialog-inner">
        <button className="dossier-close" autoFocus onClick={() => dialog.current?.close()} aria-label="Close panel">Close ×</button>
        {active && <><Plate panel={active} /><div className="dossier-detail"><p className="kicker">{active.id} / {active.category}</p><h2 id="active-panel-title">{active.title}</h2><p className="dossier-deck">{active.description}</p><dl>{active.fields.map(([label,value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><p>{active.detail}</p><Link className="button-link" href={active.href} onClick={() => dialog.current?.close()}>{active.action} ↗</Link></div></>}
      </div>
    </dialog>
  </section>;
}
