import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact The Immanent Domain.",
};

export default function ContactPage() {
  return (
    <div className="site-wrapper">
      <div className="page-body" style={{ maxWidth: "480px" }}>
        <div className="page-title-block">
          <h1 className="page-title">The Immanent Domain</h1>
        </div>

        <table className="field-table" style={{ width: "100%" }}>
          <tbody>
            <tr className="field-row">
              <td className="field-row__label">Email</td>
              <td className="field-row__value">
                <a href={`mailto:${site.contact}`}>{site.contact}</a>
              </td>
            </tr>
            <tr className="field-row">
              <td className="field-row__label">Instagram</td>
              <td className="field-row__value">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
                  @theimmanentdomain
                </a>
              </td>
            </tr>
            <tr className="field-row">
              <td className="field-row__label">Substack</td>
              <td className="field-row__value">
                <a href={site.social.substack} target="_blank" rel="noopener noreferrer">
                  theimmanentdomain.substack.com
                </a>
              </td>
            </tr>
            <tr className="field-row">
              <td className="field-row__label">YouTube</td>
              <td className="field-row__value">
                <a href={site.social.youtube} target="_blank" rel="noopener noreferrer">
                  @theimmanentdomain
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
