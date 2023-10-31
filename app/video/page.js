// pages/video.js
"use client"
import React, { useEffect, useState } from 'react';

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
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default VideoPage;
