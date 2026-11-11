"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  discoveryPageFields, discoveryTopicFields, editorialFields, maxEntries, validateEditorialContent,
  type DiscoveryPage, type DiscoveryTopic, type EditorialContent,
} from "@/lib/editorial-content";

type Snapshot = { content: EditorialContent; revision: string; live: boolean };
type Section = "home" | "about" | "discovery" | "pages" | "topics";
type Field = { label: string; max: number; multiline?: boolean };

const sections: { id: Section; label: string }[] = [
  { id: "home", label: "Homepage" },
  { id: "about", label: "About" },
  { id: "discovery", label: "Discovery copy" },
  { id: "pages", label: "Web pages" },
  { id: "topics", label: "Research topics" },
];

async function request<T>(path: string, method = "GET", body?: object): Promise<T> {
  const response = await fetch(path, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(35000),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "The request failed. Try again.");
  return data as T;
}

function TextFields<Key extends string>({ values, schema, change }: {
  values: Record<Key, string>;
  schema: Record<Key, Field>;
  change: (key: Key, value: string) => void;
}) {
  return (Object.keys(schema) as Key[]).map((key) => {
    const { label, max, multiline } = schema[key];
    return (
      <label className="studio-field" key={key}>
        <span>{label}</span>
        {multiline ? (
          <textarea rows={max > 700 ? 5 : 3} maxLength={max} value={values[key]} onChange={(event) => change(key, event.target.value)} />
        ) : (
          <input type={key === "url" ? "url" : "text"} maxLength={max} value={values[key]} onChange={(event) => change(key, event.target.value)} />
        )}
      </label>
    );
  });
}

function EntryFields<Entry extends Record<string, string>>({ entries, blank, schema, change }: {
  entries: Entry[];
  blank: Entry;
  schema: Record<keyof Entry & string, Field>;
  change: (entries: Entry[]) => void;
}) {
  const [openIndex, setOpenIndex] = useState<number>();
  return (
    <div className="studio-entries">
      <p>{entries.length} entries</p>
      <button className="studio-button" type="button" disabled={entries.length >= maxEntries} onClick={() => { setOpenIndex(0); change([{ ...blank }, ...entries]); }}>Add entry</button>
      {entries.map((entry, index) => (
        <details key={index} open={openIndex === index}>
          <summary onClick={(event) => { event.preventDefault(); setOpenIndex(openIndex === index ? undefined : index); }}>{entry.title || "New entry"}</summary>
          <div>
            <TextFields values={entry} schema={schema} change={(key, value) => change(entries.map((item, i) => i === index ? { ...item, [key]: value } : item))} />
            <button className="studio-button studio-remove" type="button" disabled={entries.length <= 2} onClick={() => { setOpenIndex(undefined); change(entries.filter((_, i) => i !== index)); }}>Remove entry</button>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function StudioForm({ initiallySignedIn }: { initiallySignedIn: boolean }) {
  const [signedIn, setSignedIn] = useState(initiallySignedIn);
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState<Snapshot>();
  const [draft, setDraft] = useState<EditorialContent>();
  const [section, setSection] = useState<Section>("home");
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const dirty = Boolean(saved && draft && JSON.stringify(saved.content) !== JSON.stringify(draft));

  useEffect(() => {
    if (!signedIn) return;
    let active = true;
    request<Snapshot>("/studio/content/").then((snapshot) => {
      if (!active) return;
      setSaved(snapshot);
      setDraft(snapshot.content);
    }).catch((failure: Error) => { if (active) setError(failure.message); });
    return () => { active = false; };
  }, [signedIn]);

  useEffect(() => {
    if (!dirty) return;
    function preserveEdits(event: BeforeUnloadEvent) { event.preventDefault(); }
    window.addEventListener("beforeunload", preserveEdits);
    return () => window.removeEventListener("beforeunload", preserveEdits);
  }, [dirty]);

  async function run(action: () => Promise<void>) {
    setBusy(true);
    setError("");
    setStatus("");
    try {
      await action();
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "The request failed. Try again.");
    } finally {
      setBusy(false);
    }
  }

  function signIn(event: FormEvent) {
    event.preventDefault();
    void run(async () => {
      await request("/studio/session/", "POST", { password: password.trim() });
      setPassword("");
      setSignedIn(true);
    });
  }

  function signOut() {
    if (dirty && !window.confirm("Discard your unsaved edits and sign out?")) return;
    void run(async () => {
      await request("/studio/session/", "DELETE");
      setSaved(undefined);
      setDraft(undefined);
      setSignedIn(false);
    });
  }

  function reload() {
    void run(async () => {
      const snapshot = await request<Snapshot>("/studio/content/");
      setSaved(snapshot);
      setDraft(snapshot.content);
    });
  }

  function checkLive() {
    void run(async () => {
      const snapshot = await request<Snapshot>("/studio/content/");
      if (saved?.revision !== snapshot.revision) {
        setStatus("A newer version was saved. Reload it to see those changes.");
      } else {
        setSaved(snapshot);
        setStatus(snapshot.live ? "This version is live." : "The saved version is still awaiting deployment.");
      }
    });
  }

  function publish(event: FormEvent) {
    event.preventDefault();
    if (!draft || !saved) return;
    void run(async () => {
      const content = validateEditorialContent(draft);
      const snapshot = await request<Snapshot>("/studio/content/", "PUT", { content, revision: saved.revision });
      setSaved(snapshot);
      setDraft(snapshot.content);
      setStatus(snapshot.live ? "This version is live." : "Saved. Vercel will publish this version after the deployment builds.");
    });
  }

  if (!signedIn) {
    return (
      <form className="studio-signin" onSubmit={signIn}>
        <label className="studio-field"><span>Owner password</span><input type="password" required maxLength={128} value={password} autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} /></label>
        <button className="studio-button studio-primary" type="submit" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        {error && <p role="alert" className="studio-error">{error}</p>}
      </form>
    );
  }

  return (
    <>
      <div className="studio-toolbar">
        <p>{saved ? saved.live ? "Saved version is live." : "Saved version is awaiting deployment." : "Loading site content…"}</p>
        <button className="studio-button" type="button" disabled={busy} onClick={signOut}>Sign out</button>
      </div>
      {draft && saved && (
        <form className="studio-form" onSubmit={publish} noValidate>
          <nav className="studio-tabs" aria-label="Editor sections">
            {sections.map(({ id, label }) => (
              <button type="button" key={id} aria-pressed={section === id} onClick={() => setSection(id)}>{label}</button>
            ))}
          </nav>
          <fieldset className="studio-panel" disabled={busy}>
            <legend>{sections.find(({ id }) => id === section)?.label}</legend>
            {section === "home" && <TextFields values={draft.home} schema={editorialFields.home} change={(key, value) => setDraft({ ...draft, home: { ...draft.home, [key]: value } })} />}
            {section === "about" && <TextFields values={draft.about} schema={editorialFields.about} change={(key, value) => setDraft({ ...draft, about: { ...draft.about, [key]: value } })} />}
            {section === "discovery" && <TextFields values={{ heading: draft.discovery.heading, intro: draft.discovery.intro }} schema={editorialFields.discovery} change={(key, value) => setDraft({ ...draft, discovery: { ...draft.discovery, [key]: value } })} />}
            {section === "pages" && <EntryFields<DiscoveryPage> entries={draft.discovery.pages} blank={{ title: "", category: "", note: "", url: "" }} schema={discoveryPageFields} change={(pages) => setDraft({ ...draft, discovery: { ...draft.discovery, pages } })} />}
            {section === "topics" && <EntryFields<DiscoveryTopic> entries={draft.discovery.topics} blank={{ title: "", category: "", query: "" }} schema={discoveryTopicFields} change={(topics) => setDraft({ ...draft, discovery: { ...draft.discovery, topics } })} />}
          </fieldset>
          <div className="studio-actions">
            <button className="studio-button studio-primary" type="submit" disabled={busy || !dirty}>Publish changes</button>
            <button className="studio-button" type="button" disabled={busy} onClick={checkLive}>Check live status</button>
            <button className="studio-button" type="button" disabled={busy} onClick={reload}>{dirty ? "Discard edits and reload" : "Reload saved version"}</button>
            {error && <p role="alert" className="studio-error">{error}</p>}
            {status && <p role="status">{status}</p>}
          </div>
        </form>
      )}
      {!draft && error && <>
        <p role="alert" className="studio-error">{error}</p>
        <button className="studio-button" type="button" disabled={busy} onClick={reload}>Retry loading</button>
      </>}
    </>
  );
}
