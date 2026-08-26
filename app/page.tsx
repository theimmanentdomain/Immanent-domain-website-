"use client";

import { useEffect, useState } from "react";

type Record = {
  id: string;
  family: string;
  title: string;
  format: string;
  status: string;
  date: string;
  description: string;
  credits: string;
  artifact: string;
  plate: "interview" | "magazine" | "dossier";
};

const records: Record[] = [
  {
    id: "001",
    family: "FIELD INTERVIEW 001",
    title: "Ulrika Anderson: On Process, Attention, and the Work of Seeing",
    format: "VIDEO / INTERVIEW",
    status: "IN PRODUCTION",
    date: "MAY 13, 2026",
    description:
      "A field interview with Ulrika Anderson on artistic process, attention, perception, and practice.",
    credits: "Ulrika Anderson / Edward Pankov, interviewer and editor",
    artifact: "YOUTUBE RELEASE IN PREPARATION.",
    plate: "interview",
  },
  {
    id: "002",
    family: "SITREP / VOLUME ONE",
    title: "Blame It On Downtown",
    format: "MAGAZINE / RELEASE ISSUE",
    status: "IN PREPARATION",
    date: "2026",
    description:
      "The release issue of SitRep, an ongoing magazine of local goings-on through articles, dispatches, unsigned reviews, and criticism.",
    credits: "SitRep / The Immanent Domain",
    artifact: "RELEASE ISSUE IN PREPARATION. SITREP PUBLISHES UNSIGNED HOUSE CRITICISM.",
    plate: "magazine",
  },
  {
    id: "003",
    family: "FIELD NOTE 001",
    title: "The 21st-Century Mystic",
    format: "PUBLIC DOSSIER / DECK",
    status: "ARCHIVED",
    date: "MAY 24, 2026",
    description:
      "A public dossier on Edward Pankov’s practice across tarot, hypnosis, meditation, magickal development, performance, housing work, New York, lineage, and private work.",
    credits: "Edward Pankov",
    artifact: "PUBLIC DECK IN PREPARATION.",
    plate: "dossier",
  },
];

function Plate({ record }: { record: Record }) {
  if (record.plate === "interview") {
    return (
      <div className="plate plate-interview" aria-hidden="true">
        <span>FIELD INTERVIEW</span>
        <strong>ULRIKA<br />ANDERSON</strong>
        <i>ON PROCESS / ATTENTION / SEEING</i>
        <b>001</b>
      </div>
    );
  }

  if (record.plate === "magazine") {
    return (
      <div className="plate plate-magazine" aria-hidden="true">
        <span>SITREP</span>
        <strong>BLAME IT<br />ON DOWNTOWN</strong>
        <i>VOLUME ONE / RELEASE ISSUE</i>
        <b>002</b>
      </div>
    );
  }

  return (
    <div className="plate plate-dossier" aria-hidden="true">
      <span>FIELD NOTE 001</span>
      <strong>THE<br />21ST-CENTURY<br />MYSTIC</strong>
      <i>PUBLIC DOSSIER / DECK</i>
      <b>003</b>
    </div>
  );
}

function RecordPanel({ record, onClose }: { record: Record; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div className="record-panel" role="dialog" aria-modal="true" aria-label={record.title}>
      <button className="panel-scrim" onClick={onClose} aria-label="Close record" />
      <article className="panel-body">
        <button className="close-button" onClick={onClose}>CLOSE ×</button>
        <Plate record={record} />
        <div className="panel-copy">
          <p className="eyebrow">{record.family}</p>
          <h2>{record.title}</h2>
          <dl>
            <div><dt>TYPE</dt><dd>{record.format}</dd></div>
            <div><dt>DATE</dt><dd>{record.date}</dd></div>
            <div><dt>STATUS</dt><dd>{record.status}</dd></div>
          </dl>
          <p>{record.description}</p>
          <p className="credits">{record.credits}</p>
          <p className="artifact">{record.artifact}</p>
        </div>
      </article>
    </div>
  );
}

export default function Home() {
  const [activeRecord, setActiveRecord] = useState<Record | null>(null);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top">THE IMMANENT DOMAIN</a>
        <nav aria-label="Primary navigation">
          <a href="#work">WORK</a>
          <a href="#archive">ARCHIVE</a>
          <a href="#engage">ENGAGE</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">NEW YORK / EST. 2026</p>
        <h1>THE<br />IMMANENT<br />DOMAIN</h1>
        <div className="hero-bottom">
          <p>INDEPENDENT CULTURAL-INTELLIGENCE AGENCY AND BROKERAGE.</p>
          <p>Creative solutions for small business. Cultural intelligence and private consultation by request.</p>
        </div>
      </section>

      <section className="intro">
        <p>
          The Immanent Domain connects people, information, art, resources, and opportunities, then turns those connections into concrete work.
        </p>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <p>001—003 / CURRENT PUBLIC RECORD</p>
        </div>
        <div className="work-grid">
          {records.map((record) => (
            <button className="work-card" key={record.id} onClick={() => setActiveRecord(record)}>
              <Plate record={record} />
              <span className="card-meta">{record.id} / {record.format}</span>
              <h2>{record.title}</h2>
              <span className="card-action">OPEN RECORD ↗</span>
            </button>
          ))}
        </div>
      </section>

      <section className="doctrine" aria-label="Doctrine">
        <p>BRILLIANCE IS A PRODUCT.</p>
        <p>GENIUS IS COMMUNICATION.</p>
      </section>

      <section className="archive-section" id="archive">
        <div className="section-heading">
          <p className="eyebrow">ARCHIVE</p>
          <p>FILES OPEN ON REQUEST</p>
        </div>
        <div className="archive-list">
          {records.map((record) => (
            <button key={record.id} className="archive-row" onClick={() => setActiveRecord(record)}>
              <span>{record.id}</span>
              <span>{record.title}</span>
              <span>{record.format}</span>
              <span>{record.status}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="engage" id="engage">
        <p className="eyebrow">REQUEST / CONTACT</p>
        <h2>ENGAGE THE DOMAIN.</h2>
        <div className="engage-grid">
          <div>
            <h3>CREATIVE SOLUTIONS</h3>
            <p>For small business: branding, advertising, events, websites, business development, intelligence, and strategy.</p>
          </div>
          <div>
            <h3>PRIVATE CONSULTATION</h3>
            <p>For matters personal, business, political, social, and spiritual.</p>
          </div>
        </div>
        <p className="contact-direction">FOR PROJECTS, INTELLIGENCE, COLLABORATION, PRODUCTION, OR OTHER SERIOUS PROPOSITIONS.</p>
        <a className="contact-link" href="mailto:theimmanentdomain@gmail.com">THEIMMANENTDOMAIN@GMAIL.COM</a>
      </section>

      <footer>
        <span>© 2026 THE IMMANENT DOMAIN</span>
        <span>NEW YORK</span>
      </footer>

      {activeRecord && <RecordPanel record={activeRecord} onClose={() => setActiveRecord(null)} />}
    </main>
  );
}

