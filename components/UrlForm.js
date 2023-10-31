// components/UrlForm.js
"use client"
// components/UrlForm.js

import { useState } from 'react';
import { useRouter } from 'next/navigation'

const UrlForm = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      setError('Invalid URL. Please enter a valid URL.');
      return;
    }

    try {
      const response = await fetch('/api/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        // URL saved successfully

        console.log('URL saved successfully');

        //this will reload the page without doing SSR

      } else {
        // Handle the error response
        console.error('Error saving URL');
      }
    } catch (error) {
      console.error('Error saving URL:', error);
    }
    router.push('/video');

  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
<form onSubmit={handleSubmit} className="w-full max-w-md">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
      URL embed del vídeo
    </label>
    <input
      className={`w-full p-2 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}
      type="text"
      id="url"
      name="url"
      value={url}
      onChange={(e) => {
        setUrl(e.target.value);
        setError('');
      }}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
  <div className="mb-4">
    <button
      type="submit"
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
    >
      Guardar
    </button>
  </div>
</form>
  
  );
};

export default UrlForm;
