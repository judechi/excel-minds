import Head from 'next/head'
import { CONFIG } from '../lib/config'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>{CONFIG.APP_NAME}</title>
        <meta name="description" content="Personal tutoring — IB & IGCSE English" />
        <meta property="og:title" content={CONFIG.APP_NAME} />
        <meta property="og:description" content={CONFIG.HERO_SUB} />
      </Head>

      <Header />
      <main className="max-w-4xl mx-auto px-6">
        <Hero />
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>
            {CONFIG.APP_NAME} offers personalized online tutoring for IB English (Language A & B), IGCSE ESL and
            Literature in English. With over 10 years' experience, we focus on exam strategies and improving grades.
          </p>
        </section>

        <Courses />

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Why choose us?</h2>
          <ul className="list-disc pl-5">
            <li>Targeted exam techniques and past-paper practice</li>
            <li>Personalized learning plans</li>
            <li>Zoom or Google Classroom lessons</li>
          </ul>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
