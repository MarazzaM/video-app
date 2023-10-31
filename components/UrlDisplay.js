// components/UrlDisplay.js
"use client"
// components/UrlDisplay.js

import { useEffect, useState } from 'react';

export const UrlDisplay = () => {
  const [url, setUrl] = useState('');

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

  useEffect(() => {
    fetchUrlData();
  }, []); // Empty dependency array to fetch data on component mount

  return (
    <div>
      <h2 className="text-xl font-semibold mt-4">Saved URL</h2>
      <p>{url}</p>
    </div>
  );
};
