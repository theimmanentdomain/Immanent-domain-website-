"use client";

import { useEffect, useMemo, useState } from "react";

type Project = {
  id: string;
  title: string;
  type:
    | "FILM"
    | "PUBLICATION"
    | "PERFORMANCE"
    | "PROJECT"
    | "SCREENING"
    | "EXHIBITION"
    | "TEXT"
    | "DOCUMENT";
  status: "CURRENT" | "PAST";
  date: string;
  descriptor: string;
  body?: string;
  note: string;
};

const projects: Project[] = [
  { id: "001", title: "PSYCHIC SPIES FOR HIRE", type: "FILM", status: "CURRENT", date: "2026", descriptor: "A film by The Immanent Domain.", note: "Additional material pending public release." },
  { id: "002", title: "I BLAME DOWNTOWN", type: "PUBLICATION", status: "CURRENT", date: "2026", descriptor: "Essays, interviews, criticism, dispatches, literature, photography, documents.", note: "First issue material pending public release." },
  { id: "003", title: "THE MOMENT IS YOURS", type: "PERFORMANCE", status: "CURRENT", date: "FORTHCOMING", descriptor: "Readings, performance, screening, movement, and live social form.", note: "Event material pending public release." },
  { id: "004", title: "LIT DUNGEON", type: "PROJECT", status: "CURRENT", date: "ACTIVE DEVELOPMENT", descriptor: "An immersive literary event.", note: "Material pending public release." },
  { id: "005", title: "NIGHTMARE CYCLE", type: "SCREENING", status: "CURRENT", date: "ACTIVE DEVELOPMENT", descriptor: "A hosted cycle of short films and live presentation.", note: "Program information pending public release." },
  { id: "006", title: "YUM", type: "EXHIBITION", status: "PAST", date: "APRIL 12, 2026", descriptor: "YUM: YOUR ULTERIOR MOTUS. Previous IMDO show.", note: "Public event record. Additional media remains in the private archive." },
  { id: "007", title: "THE BODY AFTER THE OMEN", type: "TEXT", status: "CURRENT", date: "2026", descriptor: "Brilliance is a product. Genius is communication.", body: "Brilliance can be marketed, displayed, praised, collected, ranked, and exhausted. Genius does something else. Genius continues moving. It reorganizes perception. It changes the condition of the viewer. It turns looking into reception.", note: "An IMDO text on art as communication." },
  { id: "008", title: "A DECLARATION OF INTENT", type: "DOCUMENT", status: "CURRENT", date: "2026", descriptor: "A public declaration by The Immanent Domain.", body: "We affirm the work that alters the room by entering it. We affirm the image, the poem, the event, the gesture, and the symbol that reorder perception and leave their residue upon the mind.", note: "Public doctrine. Network and operating structure omitted." },
  { id: "009", title: "SENTIENCE. SAPIENCE. SALIENCE.", type: "DOCUMENT", status: "PAST", date: "ARCHIVE", descriptor: "A manifesto fragment from the IMDO archive.", body: "The streets, the internet, anywhere and everywhere is the stage. We band together to create and distribute novelty and perspective, and to dismantle the cynicism of the postmodern.", note: "Archive document. Language standardized to the current IMDO name." },
];

const categories = ["ALL", "FILM", "PUBLICATION", "PERFORMANCE", "PROJECT", "SCREENING", "EXHIBITION", "TEXT", "DOCUMENT"] as const;

function Mark() {
  return <span className="mark" aria-hidden="true"><i>i</i>D</span>;
}

function Plate({ project }: { project: Project }) {
  switch (project.id) {
    case "001":
      return <div className="plate plate-psychic"><span className="psychic-kicker">A FILM</span><span className="psychic-line">PSYCHIC</span><span className="psychic-line psychic-line-mid">SPIES</span><span className="psychic-line">FOR HIRE</span><span className="psychic-registration">IMDO / MOTION PICTURE</span></div>;
    case "002":
      return <div className="plate plate-downtown"><div className="downtown-head">I BLAME</div><div className="downtown-body"><span>DISPATCH</span><b>DOWNTOWN</b><span>PUBLICATION / IMDO</span></div><div className="downtown-columns" aria-hidden="true"><span>TEXT TEXT TEXT TEXT TEXT</span><span>IMAGE DOCUMENT REPORT</span><span>NEW MATERIAL IN ORDER</span></div></div>;
    case "003":
      return <div className="plate plate-moment"><span className="moment-small">THE MOMENT IS</span><span className="moment-now">YOURS</span><span className="moment-foot">PERFORMANCE / CURRENT</span></div>;
    case "004":
      return <div className="plate plate-dungeon"><span className="dungeon-counter">004 / CURRENT</span><div className="dungeon-box"><span>LIT</span><span>DUNGEON</span></div><span className="dungeon-foot">PROJECT FILE OPEN</span></div>;
    case "005":
      return <div className="plate plate-nightmare"><div className="nightmare-cross" aria-hidden="true"/><span className="nightmare-a">NIGHT</span><span className="nightmare-b">MARE</span><span className="nightmare-c">CYCLE</span><span className="nightmare-foot">SCREENING / CURRENT</span></div>;
    case "006":
      return <div className="plate plate-yum"><span className="yum-word">YUM</span><div className="yum-rule" aria-hidden="true"/><span className="yum-foot">ARCHIVE / PREVIOUS SHOW</span></div>;
    case "007":
      return <div className="plate plate-body"><span className="body-kicker">TEXT / IMDO / 2026</span><span className="body-line">BRILLIANCE</span><span className="body-is">IS A PRODUCT.</span><span className="body-line body-line-genius">GENIUS</span><span className="body-is">IS COMMUNICATION.</span></div>;
    case "008":
      return <div className="plate plate-declaration"><span className="declaration-kicker">DOCUMENT / 2026</span><span className="declaration-repeat">WE AFFIRM / WE AFFIRM / WE AFFIRM</span><span className="declaration-title">A DECLARATION<br/>OF INTENT</span><span className="declaration-foot">BY THE IMMANENT DOMAIN</span></div>;
    default:
      return <div className="plate plate-sentience"><span className="sentience-word">SENTIENCE.</span><span className="sentience-word">SAPIENCE.</span><span className="sentience-word">SALIENCE.</span><span className="sentience-foot">MANIFESTO FRAGMENT / ARCHIVE</span></div>;
  }
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return <button className={`project-card project-card-${project.id}`} type="button" onClick={() => onOpen(project)} aria-label={`Open ${project.title}, ${project.type}`}><Plate project={project}/><span className="project-caption"><span className="project-number">{project.id}</span><span className="project-title">{project.title}</span><span className="project-type">{project.type}</span><span className="project-open">OPEN FILE ↗</span></span></button>;
}

function Dossier({ project, onClose, onNext }: { project: Project; onClose: () => void; onNext: () => void }) {
  return <div className="dossier-backdrop" role="dialog" aria-modal="true" aria-label={project.title} onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}><article className="dossier"><header className="dossier-topbar"><span>FILE {project.id} / PUBLIC</span><button type="button" onClick={onClose} aria-label="Close project file">CLOSE ×</button></header><div className="dossier-grid"><div className="dossier-visual"><Plate project={project}/></div><div className="dossier-copy"><p>{project.type}</p><h2>{project.title}</h2><p className="dossier-descriptor">{project.descriptor}</p>{project.body && <p className="dossier-body">{project.body}</p>}<dl><div><dt>STATUS</dt><dd>{project.status}</dd></div><div><dt>FORMAT</dt><dd>{project.type}</dd></div><div><dt>DATE</dt><dd>{project.date}</dd></div><div><dt>RECORD</dt><dd>IMDO—{project.id}</dd></div></dl><p className="clearance-note">{project.note}</p><button type="button" className="next-file" onClick={onNext}>NEXT FILE →</button></div></div></article></div>;
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [category, setCategory] = useState<(typeof categories)[number]>("ALL");
  const [view, setView] = useState<"PLATES" | "REGISTER">("PLATES");
  const filteredProjects = useMemo(() => category === "ALL" ? projects : projects.filter((project) => project.type === category), [category]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveProject(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const nextProject = () => {
    if (!activeProject) return;
    const currentIndex = projects.findIndex((project) => project.id === activeProject.id);
    setActiveProject(projects[(currentIndex + 1) % projects.length]);
  };

  return <div className="site-shell"><header className="site-header"><a className="brand" href="#index" aria-label="The Immanent Domain — index"><Mark/><span className="brand-name">THE IMMANENT DOMAIN</span></a><nav aria-label="Primary navigation"><a href="#index">INDEX</a><a href="#work">WORK</a><a href="#archive">ARCHIVE</a><a href="#contact">CONTACT</a></nav></header><main><section className="index-section" id="index" aria-labelledby="index-title"><div className="index-heading"><p>PUBLIC INDEX / 001—009</p><h1 id="index-title">THE IMMANENT DOMAIN</h1><p className="index-status">NEW YORK / 2026</p></div><div className="project-grid" id="work">{projects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setActiveProject}/>)}</div></section><div className="running-line" aria-hidden="true"><span>FILM</span><span>PUBLICATION</span><span>PERFORMANCE</span><span>PROJECT</span><span>SCREENING</span><span>ARCHIVE</span></div><section className="archive-section" id="archive" aria-labelledby="archive-title"><div className="section-head"><div><p className="eyebrow">PUBLIC REGISTER</p><h2 id="archive-title">ARCHIVE</h2></div><div className="view-toggle" aria-label="Archive display">{(["PLATES", "REGISTER"] as const).map((option) => <button key={option} type="button" className={view === option ? "is-active" : ""} aria-pressed={view === option} onClick={() => setView(option)}>{option}</button>)}</div></div><div className="filters" aria-label="Filter archive">{categories.map((option) => <button key={option} type="button" className={category === option ? "is-active" : ""} aria-pressed={category === option} onClick={() => setCategory(option)}>{option}</button>)}</div>{view === "PLATES" ? <div className="archive-plates" aria-live="polite">{filteredProjects.map((project) => <button key={project.id} type="button" onClick={() => setActiveProject(project)}><span>{project.id}</span><b>{project.title}</b><span>{project.type}</span><span>{project.status}</span></button>)}</div> : <div className="archive-register" aria-live="polite"><div className="register-row register-head"><span>FILE</span><span>TITLE</span><span>TYPE</span><span>STATUS</span></div>{filteredProjects.map((project) => <button key={project.id} type="button" className="register-row" onClick={() => setActiveProject(project)}><span>{project.id}</span><b>{project.title}</b><span>{project.type}</span><span>{project.status}</span></button>)}</div>}<p className="archive-note">PUBLIC MATERIAL ONLY. RECORDS EXPAND AS WORK IS CLEARED FOR RELEASE.</p></section><section className="contact-section" id="contact" aria-labelledby="contact-title"><p className="eyebrow">DIRECT LINE</p><h2 id="contact-title">CONTACT</h2><div className="contact-copy"><p>PUBLIC CONTACT CHANNEL FORTHCOMING.</p><p>THE IMMANENT DOMAIN / NEW YORK / 2026</p></div></section></main><footer><Mark/><span>THE IMMANENT DOMAIN</span><span>INDEX UPDATED 2026</span></footer>{activeProject && <Dossier project={activeProject} onClose={() => setActiveProject(null)} onNext={nextProject}/>}</div>;
}

