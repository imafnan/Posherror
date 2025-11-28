// components/Imageshow.tsx
import React from "react";

type Props = {
  urls?: string[]; // if empty, show message
};

export default function Imageshow({ urls = [] }: Props) {
  if (!urls || urls.length === 0) {
    return <div className="p-4 text-gray-600">No images to show yet.</div>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
      {urls.map((u, i) => (
        <div key={i} style={{ border: "1px solid #eee", padding: 8, borderRadius: 8 }}>
          {/\.(mp4|webm|ogg)(\?.*)?$/i.test(u) ? (
            <video src={u} width="100%" controls />
          ) : (
            <img src={u} alt={`uploaded-${i}`} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6 }} />
          )}
          <div style={{ fontSize: 12, marginTop: 6, wordBreak: "break-all" }}>
            <a href={u} target="_blank" rel="noreferrer">{u}</a>
          </div>
        </div>
      ))}
    </div>
  );
}
