// pages/index.js
import UrlForm from '@/components/UrlForm';
import { UrlDisplay } from '@/components/UrlDisplay';
import ProcessUrl from '@/components/ProcessUrl';

export default function Home() {


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="container grid md:grid-cols-2 gap-4 bg-white shadow-md rounded-lg w-full">
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Enviar URL a video</h1>
        <UrlForm />
        <UrlDisplay />
      </div>
      <div className="p-4">
        <ProcessUrl />
      </div>
    </div>
  </div>
  
  );
}