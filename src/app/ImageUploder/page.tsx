// app/upload/page.tsx
"use client";
import React, { useState } from "react";

/**
 * Single-file solution: upload + show gallery (images & videos)
 * No separate Imageshow page needed.
 */

type UploadedItem = {
  url: string;
  resource_type: "image" | "video" | string;
  format?: string | null;
};

export default function UploadPage() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const [files, setFiles] = useState<File[]>([]);
  const [items, setItems] = useState<UploadedItem[]>([]);
  const [progress, setProgress] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // file input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files ? Array.from(e.target.files) : [];
    setFiles(chosen);
    setProgress(null);
    setError(null);
  };

  const resourceTypeForFile = (file: File) => (file.type.startsWith("video/") ? "video" : "image");

  const uploadOne = (file: File) =>
    new Promise<UploadedItem>((resolve, reject) => {
      if (!cloudName || !uploadPreset) return reject("Missing Cloudinary config (env).");

      const resourceType = resourceTypeForFile(file);
      const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
      const fd = new FormData();
      fd.append("file", file);
      fd.append("upload_preset", uploadPreset);

      const xhr = new XMLHttpRequest();
      xhr.open("POST", endpoint);

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) setProgress(Math.round((e.loaded / e.total) * 100));
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const res = JSON.parse(xhr.responseText);
            const url = res.secure_url || res.url;
            const rt = res.resource_type || resourceType || "image";
            const fmt = res.format || null;
            if (!url) return reject("No URL returned from Cloudinary");
            resolve({ url, resource_type: rt, format: fmt });
          } catch (err) {
            reject("Invalid JSON from Cloudinary");
          }
        } else {
          reject(`Upload failed: ${xhr.status} ${xhr.responseText || xhr.statusText}`);
        }
      };

      xhr.onerror = () => reject("Network error during upload");
      xhr.send(fd);
    });

  const handleUpload = async () => {
    if (!files || files.length === 0) {
      setError("No file selected");
      return;
    }
    setError(null);
    setProgress(0);
    setUploading(true);

    try {
      for (const f of files) {
        const item = await uploadOne(f);
        // prepend newest
        setItems((p) => [item, ...p]);
      }
      setFiles([]);
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(String(err));
    } finally {
      setUploading(false);
      setProgress(null);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 960 }}>
      <h1 style={{ marginBottom: 12 }}>Upload (Image & Video)</h1>

      <div style={{ marginBottom: 12 }}>
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleChange}
          disabled={uploading}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <button onClick={handleUpload} disabled={uploading || files.length === 0}>
          {uploading ? "Uploading..." : "Upload Selected"}
        </button>
      </div>

      {progress !== null && <div style={{ marginBottom: 12 }}>Progress: {progress}%</div>}
      {error && <div style={{ marginBottom: 12, color: "red" }}>{error}</div>}

      {/* Gallery (inline) */}
      <h2 style={{ marginTop: 20 }}>Gallery</h2>
      {items.length === 0 ? (
        <div style={{ color: "#666", padding: 8 }}>No uploaded items yet.</div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }}>
          {items.map((it, i) => (
            <div key={i} style={{ border: "1px solid #eee", padding: 8, borderRadius: 8 }}>
              {it.resource_type === "video" ? (
                <video src={it.url} controls style={{ width: "100%", height: 160, objectFit: "cover" }} />
              ) : (
                <img src={it.url} alt={`uploaded-${i}`} style={{ width: "100%", height: 160, objectFit: "cover" }} />
              )}
              <div style={{ marginTop: 8, fontSize: 12, wordBreak: "break-all" }}>
                <a href={it.url} target="_blank" rel="noreferrer">{it.url}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
