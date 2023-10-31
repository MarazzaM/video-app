// components/UrlForm.js
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UrlForm = () => {
  const [iframeUrl, setIframeUrl] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Process the iframe URL to extract the video URL
    const parser = new DOMParser();
    const doc = parser.parseFromString(iframeUrl, 'text/html');
    const iframe = doc.querySelector('iframe');
    if (iframe) {
      const videoUrl = iframe.getAttribute('src');
      if (videoUrl) {
        try {
          const response = await fetch('/api/url', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: videoUrl }),
          });

          if (response.ok) {
            console.log('Video URL processed and saved successfully');
            router.push('/video');
          } else {
            console.error('Error saving Video URL');
          }
        } catch (error) {
          console.error('Error saving Video URL:', error);
        }
      } else {
        setError('No video URL found in the iframe.');
      }
    } else {
      setError('No iframe found in the provided URL.');
    }
  };



  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="url">
          URL embed del vídeo
        </label>
        <p className='text-white text-sm'>Copia la URL del video desde Compartir ▶ Incorporar ▶ Copiar</p>
        <input
          className={`w-full p-2 border text-gray-700 rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}
          type="text"
          id="iframeUrl"
          name="iframeUrl"
          value={iframeUrl}
          onChange={(e) => {
            setIframeUrl(e.target.value);
            setError('');
          }}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
      <div className="mb-4 ">
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Publicar video
        </button>

      </div>
    </form>
  );
};

export default UrlForm;
