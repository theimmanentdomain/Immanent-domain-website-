import type { Metadata } from "next";
import { isStudioOwner, studioConfig } from "@/lib/studio-auth";
import StudioForm from "./StudioForm";
import "./studio.css";

export const metadata: Metadata = {
  title: "Studio | The Immanent Domain",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default async function Studio() {
  const config = studioConfig();
  const signedIn = config ? await isStudioOwner(config.secret) : false;
  return (
    <main className="studio">
      <header className="studio-heading">
        <p className="kicker">The Immanent Domain</p>
        <h1>Studio</h1>
      </header>
      {config
        ? <StudioForm initiallySignedIn={signedIn} />
        : <p>Studio setup is incomplete. The site owner can enable it in the hosting settings.</p>}
    </main>
  );
}
