// pages/index.js
"use client"
import { useState } from 'react';

export default function ProcessUrl() {
  const [iframeCode, setIframeCode] = useState('');
  const [srcUrl, setSrcUrl] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const parser = new DOMParser();
    const doc = parser.parseFromString(iframeCode, 'text/html');
    const iframe = doc.querySelector('iframe');
    if (iframe) {
      const src = iframe.getAttribute('src');
      setSrcUrl(src);
    } else {
      setSrcUrl('Inválido o no src encontrado');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(srcUrl);
      setCopySuccess(true);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-4 text-gray-700">Extraer Iframe SRC</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
            Obtener URL embed del vídeo
          </label>
          <p className="text-gray-700 text-sm">Utiliza esta opción para obtener la URL procesada y utilizarla para <b>enviar URL a video</b>.</p>
          <textarea
            rows="5"
            className="w-full p-2 border rounded-md"
            value={iframeCode}
            onChange={(e) => setIframeCode(e.target.value)}
            placeholder="Pega el código del iframe acá"
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Procesar
          </button>
        </div>
      </form>
      <div className="mt-4">
        <p className="text-lg font-medium">URL: {srcUrl}</p>
        {srcUrl && (
          <button
            onClick={copyToClipboard}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {copySuccess ? 'Copiado ✅' : 'Copiar URL'}
          </button>
        )}
      </div>
    </div>
  );
}
