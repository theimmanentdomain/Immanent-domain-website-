import { videos } from "@/lib/videos";

export default function VideosPage() {
  return (
    <div className="page-body">
      <h1 className="page-title">Videos</h1>

      <ul className="video-list" style={{ borderTop: "1px solid var(--rule)" }}>
        {videos.map((video) => (
          <li key={video.slug} className="video-list__item">
            <div className="video-list__title">{video.title}</div>
            <div className="video-list__type">{video.type}</div>
            <p style={{ fontSize: "0.9rem", color: "var(--fg-dim)", marginBottom: "0.5rem" }}>
              {video.description}
            </p>
            <div className="video-list__status">{video.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
