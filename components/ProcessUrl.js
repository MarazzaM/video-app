// pages/index.js
"use client"
import { useState } from 'react';

export default function ProcessUrl() {
  const [iframeCode, setIframeCode] = useState('');
  const [srcUrl, setSrcUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const parser = new DOMParser();
    const doc = parser.parseFromString(iframeCode, 'text/html');
    const iframe = doc.querySelector('iframe');
    if (iframe) {
      const src = iframe.getAttribute('src');
      setSrcUrl(src);
    } else {
      setSrcUrl('Invalid or no iframe found');
    }
  };

  return (
<div className="flex flex-col items-center justify-center">
  <h1 className="text-2xl font-semibold mb-4">Extraer Iframe SRC</h1>
  <form onSubmit={handleSubmit} className="w-full max-w-md">
    <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
      URL del Incorporar
    </label>
      <textarea
        rows="5"
        className="w-full p-2 border rounded-md"
        value={iframeCode}
        onChange={(e) => setIframeCode(e.target.value)}
        placeholder="Paste the iframe code here"
      ></textarea>
    </div>
    <div className="mb-4">
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  </form>
  <div className="mt-4">
    <p className="text-lg font-medium">URL: {srcUrl}</p>
  </div>
</div>

  );
}
