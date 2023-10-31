// components/UrlDisplay.js
"use client"
import { useEffect, useState } from 'react';

export const UrlDisplay = () => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const fetchUrlData = async () => {
      try {
        const response = await fetch('/api/fetchUrl');
        if (response.ok) {
          const data = await response.json();
          setUrl(data.URL);
        }
      } catch (error) {
        console.error('Error fetching URL:', error);
      }
    };

    fetchUrlData();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mt-4">Saved URL</h2>
      <p>{url}</p>
    </div>
  );
};
