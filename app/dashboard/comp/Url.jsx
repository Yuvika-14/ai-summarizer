// components/UrlInputBar.tsx
"use client";
import { useState } from "react";

const Url = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!url) return alert("Please paste a YouTube URL");
    setLoading(true);
    setError("");
    setSummary("");

    try {
     
        const res = await fetch("https://aisummary-0-0-1-release.onrender.com/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url, languages: ["en"] })
        });

      const data = await res.json();
      if (data.summary) setSummary(data.summary);
      else setError("Could not generate summary.");
    } catch (err) {
      console.error(err);
      setError("Backend error");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="p-4 flex flex-col items-center gap-2 ">
      <div className="flex gap-2 items-center w-full max-w-2xl">
        <input
          type="text"
          placeholder="Paste YouTube URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="p-2 rounded-md border border-gray-300 w-full"
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition-all"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}
      {summary && (
        <div className="mt-2 p-3 bg-dark-100 rounded max-w-2xl w-full">
          <strong>Summary:</strong>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default Url;
