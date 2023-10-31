"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useRouter } from 'next/navigation';

export const UrlDisplay = () => {
  const [url, setUrl] = useState('');
  const router = useRouter();
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

  const handleStopTransmission = () => {
    // Use SweetAlert2 to confirm the action
    Swal.fire({
      title: 'Confirm Detener transmisión',
      text: 'Are you sure you want to stop the transmission?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, stop it',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed, you can add the logic to stop the transmission here
        // For example, you can make a request to your delete URL endpoint
        fetch('/api/stopVideo', {
          method: 'DELETE',
        }).then((response) => {
          if (response.ok) {
            // Handle success
            console.log('Transmission stopped successfully');
            router.push('/video');
          } else {
            // Handle error
            console.error('Error stopping transmission');
          }
        });
      }
    });
  };

  useEffect(() => {
    fetchUrlData();
  }, []); // Empty dependency array to fetch data on component mount

  return (
    <div className='text-white flex items-center justify-center flex-col'>
      <h2 className="text-xl font-semibold mt-4">URL publicada actualmente:</h2>
      <p className='m-2'>{url}</p>
      <iframe
        className='mx-auto my-4'
        src={url}
        title="Video"
        width="400px"
        height="300px"
        allowFullScreen
      />
      <Link href="/video" className="bg-blue-500  font-bold py-2 px-4  rounded-md hover:bg-blue-600">
        Ir al video publicado actualmente
      </Link>
      <button
        onClick={handleStopTransmission} // Add the click event handler
        className="bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition-all m-4"
      >
        Detener transmisión
      </button>
    </div>
  );
};
