import { CONFIG } from '../lib/config'
export default function Contact(){
  const wa = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Boma, I would like more info about reinforcement lessons')}`
  return (
    <section id="contact" className="mt-12 mb-16">
      <h2 className="text-2xl font-semibold mb-4">Contact & Payment</h2>
      <p className="mb-4">Click the WhatsApp link to message us directly (works internationally):</p>
      <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-4 py-3 rounded-md bg-green-600 text-white">Message on WhatsApp</a>

      <div id="momo" className="mt-6 p-4 border rounded">
        <h3 className="font-semibold">Pay via MoMo</h3>
        <p className="text-sm text-gray-700 mt-2">Send payment to: <strong>{CONFIG.MOMO_DISPLAY}</strong></p>
        <p className="text-sm text-gray-500 mt-2">After payment, please send the payment screenshot via WhatsApp and include the student name & preferred class times.</p>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded">
        <h4 className="font-semibold">WhatsApp welcome message (copy & paste)</h4>
        <pre className="mt-2 text-sm">Welcome to 💯 Success Platform. In our package: personalized learning, subject content, examination tips, past questions with sample answers, etc. How can we help you today?</pre>
      </div>

      <div className="mt-6 p-4 border rounded">
        <h4 className="font-semibold mb-2">Or send us a message directly:</h4>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col gap-3 mt-2">
          <input type="text" name="name" placeholder="Your Name" required className="p-2 border rounded"/>
          <input type="email" name="email" placeholder="Your Email" required className="p-2 border rounded"/>
          <textarea name="message" placeholder="Your Message" required className="p-2 border rounded"></textarea>
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Send Message</button>
        </form>
        <p className="text-sm text-gray-500 mt-2">Replace 'YOUR_FORM_ID' with your Formspree form ID.</p>
      </div>
    </section>
  )
}
