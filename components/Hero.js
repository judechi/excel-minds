import { CONFIG } from '../lib/config'
export default function Hero(){
  const wa = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Boma, I am interested in Excel Minds classes')}`
  return (
    <section className="mt-12 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">{CONFIG.HERO_TITLE}</h1>
        <p className="text-gray-700 mb-6">{CONFIG.HERO_SUB}</p>
        <div className="flex gap-4">
          <a href={wa} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-md bg-green-600 text-white">Chat on WhatsApp</a>
          <button onClick={() => { document.getElementById('momo')?.scrollIntoView({behavior:'smooth'}) }} className="px-6 py-3 rounded-md border">Pay via MoMo</button>
        </div>
      </div>
      <div className="w-64 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
        <img src="/student-laptop.svg" alt="Student on laptop" className="w-48 h-36" />
      </div>
    </section>
  )
}
