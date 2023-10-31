// pages/index.js
import UrlForm from '@/components/UrlForm';
import { UrlDisplay } from '@/components/UrlDisplay';
import Image from 'next/image';
export default function Home() {


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center flex-col">
    <Image
      src="/logo_smartway_optim.png"
      width={700}
      height={700}
      alt="Picture of the author"
      className='mb-4'
    />
    <div className="container flex items-center justify-center  bg-[#da251d] shadow-md rounded-lg w-full">

      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center text-white">Enviar URL a video</h1>
        <UrlForm />
        <UrlDisplay />
      </div>
    </div>
  </div>
  
  );
}