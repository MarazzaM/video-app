// pages/video.js
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
function VideoPage() {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    // Fetch the URL when the component mounts
    fetch('/api/fetchUrl')
      .then((response) => response.json())
      .then((data) => {
        setVideoUrl(data.URL);
      })
      .catch((error) => {
        console.error('Error fetching video URL:', error);
      });
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {videoUrl ? (
        <iframe
          src={videoUrl + "?&amp;autoplay=1"}
          title="Video"
          width="100%"
          height="100%"
          allowFullScreen
          controls="0" 
          autoPlay
        />
      ) : (
        <div className='bg-[url("/bg.jpg")] w-full h-full flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-bold mb-4 text-center text-white animate-pulse	'>Listo para transmitir</h1>
          <Image
      src="/logo_smartway_optim.png"
      width={1000}
      height={1000}
      alt="Picture of the author"
      className='mb-4'
    />
        </div>
      )}
    </div>
  );
}

export default VideoPage;
