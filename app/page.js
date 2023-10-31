// pages/index.js
import UrlForm from '@/components/UrlForm';
import { UrlDisplay } from '@/components/UrlDisplay';

export default function Home() {


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">URL Form</h1>
      <UrlForm />
      <UrlDisplay/>
    </div>
  );
}
