import { CONFIG } from '../lib/config'
export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold">EM</div>
          <div>
            <div className="font-semibold">{CONFIG.APP_NAME}</div>
            <div className="text-sm text-gray-500">Personal tutoring (IB / IGCSE English)</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href={`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20learn%20more%20about%20${encodeURIComponent(CONFIG.APP_NAME)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-green-600 text-green-700">
            WhatsApp
          </a>
          <button onClick={() => { const el = document.getElementById('momo'); if(el) el.scrollIntoView({behavior:'smooth'}) }} className="px-4 py-2 rounded-md bg-accent text-white">
            Pay via MoMo
          </button>
        </nav>
      </div>
    </header>
  )
}
