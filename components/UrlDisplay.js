// components/UrlDisplay.js
"use client"
import Link from 'next/link';

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
    <div className='text-white'>
      <h2 className="text-xl font-semibold mt-4 ">URL publicada actualmente:</h2>
      <p className='m-4'>{url}</p>
    <Link href="/video"   className="bg-blue-500  font-bold py-2 px-4 m-4 rounded-md hover:bg-blue-600">Ir al video publicado actualmente</Link>
      <iframe className='mx-auto my-4'
          src={url}
          title="Video"
          width="400px"
          height="300px"
          allowFullScreen
        />
    </div>
  );
};
