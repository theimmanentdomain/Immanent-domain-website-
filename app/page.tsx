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
  plate: "interview" | "magazine" | "dossier" | "moment" | "yum";
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
  {
    id: "004",
    family: "UPCOMING PROJECT / PUBLIC PERFORMANCE",
    title: "The Moment Is Yours",
    format: "HYPNOSIS / INTERMEDIA EVENT",
    status: "FORTHCOMING",
    date: "FORTHCOMING",
    description:
      "A hypnosis-based intermedia event that draws out the persona of each performer on a sublime level, turning poetry into hypnotic theater, music into ritual, and space into zones of heightened experience.",
    credits: "The Immanent Domain",
    artifact: "PUBLIC ANNOUNCEMENT IN PREPARATION.",
    plate: "moment",
  },
  {
    id: "005",
    family: "PUBLIC EXPERIMENT / ARCHIVE RECORD",
    title: "Y.U.M. / Your Ulterior Motives",
    format: "LIVE PERFORMANCE / PARTICIPATORY EVENT",
    status: "ARCHIVED",
    date: "APRIL 12, 2026",
    description:
      "A live work on appetite, motive, participation, hypnosis, comedy, and theatrical attention, staged at Privy Gallery.",
    credits: "The Immanent Domain / Privy Gallery",
    artifact: "ARCHIVE MATERIAL IN PREPARATION.",
    plate: "yum",
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

  if (record.plate === "moment") {
    return (
      <div className="plate plate-moment" aria-hidden="true">
        <span>UPCOMING PROJECT / PUBLIC PERFORMANCE</span>
        <strong>THE MOMENT<br />IS YOURS</strong>
        <i>HYPNOSIS / INTERMEDIA / RITUAL</i>
        <b>004</b>
      </div>
    );
  }

  if (record.plate === "yum") {
    return (
      <div className="plate plate-yum" aria-hidden="true">
        <span>PUBLIC EXPERIMENT / ARCHIVE RECORD</span>
        <strong>Y.U.M.</strong>
        <i>YOUR ULTERIOR MOTIVES / LIVE PERFORMANCE</i>
        <b>005</b>
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
        <div className="hero-cosmogram" aria-hidden="true">
          <span className="cosmogram-rings" />
          {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
        </div>
        <p className="eyebrow">NEW YORK / EST. 2026</p>
        <p className="hero-signal">WHEN THE FIELD SHIFTS, THE NEXT MOVE BECOMES VISIBLE.</p>
        <h1>THE<br />IMMANENT<br />DOMAIN</h1>
        <div className="hero-bottom">
          <p>INDEPENDENT CULTURAL-INTELLIGENCE AGENCY / EVERYTHING BROKERAGE.</p>
          <p>Creative solutions for small business. Cultural intelligence and private consultation by request.</p>
        </div>
      </section>

      <section className="intro">
        <p>
          The Immanent Domain is an everything brokerage that connects people, information, art, resources, and opportunities, then turns those connections into concrete work.
        </p>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED WORK</p>
          <p>001—005 / CURRENT PUBLIC RECORD</p>
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
        <p>THE STRUGGLE TOWARD THE HEIGHT IS ENOUGH.</p>
        <p>SENTIENCE. SAPIENCE. SALIENCE.</p>
        <p className="doctrine-business">INTELLIGENCE IS THE PRODUCT. MANIFESTATION IS THE BUSINESS.</p>
      </section>

      <section className="longform" aria-labelledby="domain-title">
        <div className="longform-heading">
          <p className="eyebrow">THE DOMAIN / A PUBLIC STATEMENT</p>
          <h2 id="domain-title">THE GRAND MIASMA</h2>
        </div>

        <div className="longform-lead">
          <p>
            The grand miasma names a condition of exhaustion, fragmentation, aesthetic deadness, and social drift. It enters the city through attention systems built for compulsion, institutional language built for delay, and cultural circuits built for self-display. Talent, capital, space, evidence, craft, ambition, and appetite remain dispersed across the same streets. The city holds enormous capacity. Coordination gives capacity direction.
          </p>
        </div>

        <div className="longform-grid">
          <article>
            <p className="eyebrow">I / THE CONDITION</p>
            <p>
              A company reaches a point where its public image has separated from its actual force. An artist reaches a point where distribution outpaces transmission. A neighborhood reaches a point where rich human intelligence sits behind locked doors, private introductions, inherited access, and stale procedure. The miasma thrives in the distance between what is possible and what is organized.
            </p>
            <p>
              The result appears everywhere: excellent work carrying an unfinished public language, capable people separated by distance, rooms stripped of atmosphere, strategy drained of pulse, and culture reduced to a procession of moments that leave a faint residue. A market can feel crowded while a field of real opportunity remains wide open. The task begins with seeing the difference.
            </p>
          </article>

          <article>
            <p className="eyebrow">II / THE RESPONSE</p>
            <p>
              The Immanent Domain works inside that distance. It reads a situation for its pressure, its assets, its people, its timing, and its available moves. Then it creates a path. The work can take the form of a brand, a campaign, a website, a publication, an event, a client strategy, a research brief, a room, or an introduction. Form follows the live question.
            </p>
            <p>
              Creative solutions give a small business a legible presence with a point of view, a voice, a visual identity, a series of signals, and a plan for expansion. Business development turns proximity into partnerships, conversations into mandates, and opportunity into a durable pipeline. Strategy turns a crowded field into a field with hierarchy.
            </p>
          </article>
        </div>

        <div className="longform-wide">
          <p className="eyebrow">III / INTELLIGENCE AS PRACTICE</p>
          <p>
            Intelligence begins with an exact account of the field. Who is here. What carries weight. Where access lives. Which story can move. Which moment holds value. Which alliance changes the scale of the work. The answer rarely arrives through a generic solution. It emerges through close attention, social fluency, research, taste, timing, and the willingness to enter the situation completely.
          </p>
          <p>
            The Domain treats art as a medium of communication and agency as a form of cultural production. A publication carries analysis into the city. An event concentrates a network inside a room. A website gives a position a front door. A brand creates a vocabulary for recognition. A well-timed introduction changes the available future. These forms hold one purpose: to make intelligence active.
          </p>
          <p>
            Every engagement creates an instrument for movement. Branding defines the signal. Advertising puts the signal into circulation. Events make the signal physical. Websites create a permanent point of contact. Business development builds the commercial architecture. Intelligence and strategy establish direction, leverage, sequence, and momentum. The finished work carries a clear proposition into the world and gives people a reason to answer it.
          </p>
        </div>

        <div className="longform-grid longform-grid-final">
          <article>
            <p className="eyebrow">IV / PRIVATE INTELLIGENCE</p>
            <p>
              Private consultation serves matters personal, business, political, social, and spiritual. It provides a focused reading of the present situation, a map of the relevant forces, a practical sequence of moves, and a language for carrying the work forward. Some questions require research. Some require a sharper decision. Some require the right person in the room. Every consultation begins with the real condition and ends with a concrete next move.
            </p>
          </article>

          <article>
            <p className="eyebrow">V / THE PRESENT TENSE</p>
            <p>
              The name declares jurisdiction over the present tense. The present contains the people, the rooms, the materials, the knowledge, the audience, the pressure, and the opening. The Immanent Domain gathers those elements and makes them legible to one another. Hard times are the air. The response is form. The work carries the stone upward and gives it blood, breath, consequence, and a future.
            </p>
          </article>
        </div>

        <div className="longform-wide longform-wide-ritual">
          <p className="eyebrow">VI / THE BUSINESS OF ATMOSPHERE</p>
          <p>
            Every enterprise produces an atmosphere. A storefront creates one before the door opens. A homepage creates one before a word receives conscious attention. A meeting creates one before the first proposal reaches the table. Atmosphere determines the level of attention available to the work. It gives a client, customer, collaborator, or audience a felt sense of the standard, the scale, and the promise that lives inside the offering.
          </p>
          <p>
            The Immanent Domain treats atmosphere as commercial architecture. Tone, pacing, visual form, language, rhythm, hospitality, and sequence come together to form a living environment for the offer. The right environment creates recognition. Recognition creates trust. Trust creates the conversation where real work begins. A strong business holds its audience in a field of meaning from the first encounter through the decisive moment.
          </p>
          <p>
            This is the practical value of cultural intelligence. A business becomes easier to choose when people can sense its character, understand its relevance, and picture their own future inside the relationship. The work gives each touchpoint a function: the image introduces a world, the sentence gives it a name, the website opens the door, the event makes it tangible, and the conversation turns possibility into an engagement.
          </p>
        </div>

        <div className="longform-grid longform-grid-extended">
          <article>
            <p className="eyebrow">VII / THE ART OF THE APPROACH</p>
            <p>
              An approach begins with a signal. The right person feels that signal before they have assembled every reason. They recognize a phrase, an image, a room, a point of view, or a carefully placed invitation. Attention gathers. Curiosity becomes specific. The field grows warmer. The work has entered the imagination.
            </p>
            <p>
              The Domain builds approaches that honor this progression. First, a visitor encounters a distinct presence. Then they discover the range of the work. Then they locate the part that touches their own question. Then a clear route appears: send the message, state the objective, begin the conversation. The progression gives the visitor room to arrive while keeping the invitation in full view.
            </p>
          </article>

          <article>
            <p className="eyebrow">VIII / THE OFFICE OF RELATIONSHIP</p>
            <p>
              Commerce moves through relationships. A brand can make the first impression. A campaign can create attention. A website can gather interest. A relationship gives the work duration. The Domain develops the human side of business development: who needs to meet, what they need to understand, which context creates value, and how the next conversation becomes a real opening.
            </p>
            <p>
              The right introduction can accelerate a project. The right framing can make an offer feel inevitable. The right gathering can place a company inside a larger cultural story. These acts create compound value over time. A single engagement produces materials, language, confidence, partners, and a sharper capacity for the next move.
            </p>
          </article>
        </div>

        <div className="longform-everything">
          <div>
            <p className="eyebrow">IX / THE EVERYTHING BROKERAGE</p>
            <h3>THE RIGHT THING MEETS THE RIGHT MOMENT.</h3>
          </div>
          <div className="everything-copy">
            <p>
              The Immanent Domain is an everything brokerage. It works across the places where people, information, craft, capital, access, space, culture, skill, and desire begin to recognize one another. A brokerage creates a meeting that carries value. Here, the material can be a client in search of a sharper position, an artist in search of a producer, a business in search of its next market, a room in search of a reason to exist, a publication in search of a live story, or a person in search of the precise intelligence that changes their next move.
            </p>
            <p>
              Every field contains people who know something, people who can do something, people who need something, and people who can open a door. The brokerage maps these capacities. It sees a relationship inside the apparent distance. It gives the relationship language, context, timing, and a practical container. A referral becomes a partnership. A conversation becomes a brief. A brief becomes a campaign. A gathering becomes an event. An event becomes a durable connection between people whose future work now has a place to begin.
            </p>
            <p>
              This model creates a rare kind of range. The Domain can develop a website for a local business, build a campaign around a new offer, stage an event that turns a client into a cultural presence, connect specialists around an unusual request, research a difficult field, and shape the language that carries each result forward. The method remains consistent: identify the live value, gather the useful elements, create the right alignment, and turn that alignment into action.
            </p>
            <p>
              The everything brokerage runs on discretion, taste, reciprocity, and results. It asks a simple sequence of questions. What is present? What is wanted? Who belongs in the picture? What relationship would make the situation richer? What form would give that relationship force? The answers create the operation. The operation creates an outcome with a signature: more clarity, more connection, more reach, more movement, more reality.
            </p>
          </div>
        </div>

        <div className="longform-solution">
          <p className="eyebrow">X / THE SOLUTION</p>
          <p>SEE THE FIELD. NAME THE OPENING. GATHER THE ELEMENTS. MAKE THE MOVE.</p>
          <div>
            <p>
              The solution lives in a disciplined return to the present tense. Begin with what is already here: the talent, the offer, the story, the room, the audience, the materials, the relationships, the evidence, the hunger, and the opportunity. Give each element a place inside a coherent whole. Then allow the work to move.
            </p>
            <p>
              The Immanent Domain exists for that movement. It creates public signal for businesses ready to grow, cultural works for audiences ready to feel more, and private intelligence for people ready to read their situation with greater precision. The mandate is simple: turn latent value into active reality, and give every valuable connection the conditions to matter.
            </p>
          </div>
        </div>

        <div className="longform-mirth">
          <div>
            <p className="eyebrow">XI / MIRTH</p>
            <h3>MANIFESTATION. INTELLIGENCE. REVERENCE. TRUTH. HARMONY.</h3>
          </div>
          <div>
            <p>
              MIRTH is the working formula behind the Domain. Manifestation carries an idea into visible form. Intelligence reads the field with judgment, timing, social knowledge, and practical precision. Reverence protects the beauty, care, and human significance inside the exchange. Truth keeps the language answerable to the situation. Harmony brings people, rooms, materials, timing, and consequence into right relation.
            </p>
            <p>
              Together, these principles give an engagement its character. A campaign gains a point of view. A consultation gains a useful decision. An event gains a memorable atmosphere. A publication gains editorial force. A business gains a signal that feels true to its actual capacity. The formula turns the abstract into a sequence of actions that people can see, feel, enter, and carry forward.
            </p>
            <p>
              Beauty sets the standard. Love supplies the motive. Truth provides the discipline. Intelligence reads the opening. Manifestation makes it real. Harmony gives the result a life beyond the first encounter. This is how the Domain turns a moment of possibility into a durable piece of culture, business, relationship, or work.
            </p>
          </div>
        </div>
      </section>

      <section className="upcoming" aria-labelledby="upcoming-title">
        <div className="upcoming-heading">
          <p className="eyebrow">UPCOMING PROJECTS</p>
          <h2 id="upcoming-title">THE MOMENT IS YOURS</h2>
        </div>
        <div className="upcoming-grid">
          <Plate record={records[3]} />
          <div className="upcoming-copy">
            <p className="eyebrow">HYPNOSIS / INTERMEDIA EVENT / FORTHCOMING</p>
            <p>
              The Moment Is Yours is a hypnosis-based intermedia event built to draw out the persona of each performer on a sublime level. Poetry enters a theatrical condition shaped by induction, cadence, attention, and presence. Music becomes ritual. Space becomes a zone. The event gives language, sound, bodies, images, and audience a shared field of heightened experience.
            </p>
            <p>
              Persona forms the center of the work. Each performer arrives with a voice, a history, an image, a nervous system, and a particular charge. The performance brings that charge into focus and gives it an architecture. A poem gathers theatrical force. A song becomes an invitation. A room becomes a living instrument for transformation, recognition, and collective memory.
            </p>
            <p>
              The project continues the Domain’s work with atmosphere as infrastructure. The event produces a temporary world where art, ritual, attention, and social encounter operate as one system. The audience enters that system and carries its pressure into the city after the room has emptied.
            </p>
          </div>
        </div>
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

      <section className="client-path" aria-labelledby="client-path-title">
        <div className="client-path-heading">
          <p className="eyebrow">FOR CLIENTS / THE VALUE OF AN ENGAGEMENT</p>
          <h2 id="client-path-title">THE CLIENT ADVANTAGE</h2>
        </div>

        <div className="client-path-lead">
          <p>
            A serious enterprise reaches a moment when its current story has carried as far as it can. The field sends a signal through dispersed attention, blurred offers, stalled interest, and weaker conversion. The Immanent Domain turns that signal into a strategic opening. One relationship spans creative direction, market position, communications, digital presence, business development, intelligence, strategy, and cultural execution. Each engagement creates a coherent operating picture. The decision, the message, the asset, the audience, and the relationship strategy reinforce one another.
          </p>
        </div>

        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>POSITION</h3>
            <p>A sharper public identity, a stronger point of view, and a language that gives the market something clear to recognize.</p>
          </article>
          <article>
            <span>02</span>
            <h3>ATTENTION</h3>
            <p>Advertising, editorial presence, events, and cultural signal designed to create a reason for the right people to pay attention.</p>
          </article>
          <article>
            <span>03</span>
            <h3>CONVERSION</h3>
            <p>A website, offer, campaign, and client path that turns interest into inquiry, inquiry into conversation, and conversation into work.</p>
          </article>
          <article>
            <span>04</span>
            <h3>EXPANSION</h3>
            <p>Business development, relationship strategy, and practical intelligence that create new routes to partnerships, clients, and opportunity.</p>
          </article>
        </div>

        <div className="client-proof">
          <p>
            Branding becomes a business-development asset. A website becomes sales infrastructure. An event becomes a market position. Advertising becomes a reason to act. Intelligence turns instinct into a move with context. The Domain builds the signal and puts that signal to work.
          </p>
        </div>

        <div className="request-architecture">
          <p className="eyebrow">THE REQUEST / WHAT CAN ENTER THE DOMAIN</p>
          <p>
            A request can begin with a commercial objective, a cultural proposition, a difficult decision, a need for research, a need for the right collaborator, a public project, or a private question with real consequences. The first message gives the Domain the situation, the available material, the desired outcome, the relevant timing, and the practical constraints. The work then takes its proper form: a consultation, a brief, a campaign, a website, a publication, an event, a referral, an introduction, a research dossier, or coordinated fieldwork.
          </p>
          <p>
            Each engagement receives a clear scope, an appropriate exchange, and a sequence that serves the actual objective. The result becomes a useful piece of public signal, a relationship with force, a practical route forward, or a completed artifact that enters the record. The point is consequence: a situation changes because the right intelligence found its form.
          </p>
        </div>

        <div className="funnel-heading">
          <p className="eyebrow">THE ENGAGEMENT PATH</p>
          <p>FROM FIRST MESSAGE TO ACTIVE FIELDWORK</p>
        </div>
        <ol className="funnel">
          <li>
            <span>01</span>
            <div>
              <h3>STATE THE OBJECTIVE</h3>
              <p>Send the present condition: the company, project, available materials, commercial target, and desired shift. The first exchange establishes the live question.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>MAP THE FIELD</h3>
              <p>Audience, position, assets, language, access, and opportunity come into view. The engagement gains a clear route forward.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>BUILD THE SIGNAL</h3>
              <p>The work takes shape as a brand system, campaign, website, event, publication, intelligence brief, or business-development strategy.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>PUT IT INTO MOTION</h3>
              <p>The signal moves through the channels that matter: clients, collaborators, press, audience, partners, rooms, and market.</p>
            </div>
          </li>
          <li>
            <span>05</span>
            <div>
              <h3>EXPAND WHAT WORKS</h3>
              <p>The strongest elements become a repeatable system for sustained attention, new relationships, and stronger commercial leverage.</p>
            </div>
          </li>
        </ol>

        <a className="client-cta" href="#engage">START AN ENGAGEMENT ↘</a>
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
