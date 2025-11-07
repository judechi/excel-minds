import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Excel Minds by Boma Learning</title>
        <meta
          name="description"
          content="Personalized IB & IGCSE tutoring by experienced educators helping students achieve top results."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative text-white text-center py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Excel Minds — Reinforcing Excellence in IB & IGCSE Learning
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Master English Language and Literature with our personalized online programs.
          </p>
          <a
            href="https://wa.me/237677431399"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">About Excel Minds</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            Excel Minds provides reinforcement lessons for IB and IGCSE students. With over 10 years of experience,
            our mission is to help you achieve A+ and 7s through personalized teaching, past papers, and exam strategies.
          </p>
          <img
            src="/images/subjects.jpg"
            alt="Students learning"
            className="rounded-xl shadow-lg w-full max-w-3xl mx-auto"
          />
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">Subjects We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "IB English B",
              "IB Language & Literature (A)",
              "IGCSE ESL",
              "IGCSE Literature in English",
              "Exam Preparation",
              "Essay Writing",
            ].map((subject, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-blue-800">{subject}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Instructor</h2>
          <div className="flex justify-center gap-6">
            <div className="text-center">
              <img
                src="/images/instructor1.jpeg"
                alt="Instructor Boma Mercy"
                className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
              />
              <p className="mt-2 font-bold">Boma Mercy</p>
            </div>
            <div className="text-center">
              <img
                src="/images/instructor2.jpeg"
                alt="Instructor Boma Mercy"
                className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
              />
              <p className="mt-2 font-bold">Boma Mercy</p>
            </div>
            <div className="text-center">
              <img
                src="/images/instructor3.jpeg"
                alt="Instructor Boma Mercy"
                className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
              />
              <p className="mt-2 font-bold">Boma Mercy</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-blue-700">What Students Say</h2>
          <img
            src="/images/testimonials.jpg"
            alt="Students group"
            className="rounded-xl shadow-lg w-full max-w-3xl mx-auto mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "I got a 7 in IB English B after joining Excel Minds!", name: "Sarah L." },
              { quote: "The lessons were interactive and practical.", name: "James T." },
              { quote: "Helped me gain confidence and clarity in essays.", name: "Nina M." },
            ].map((t, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <h4 className="font-semibold text-blue-800">— {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Excel?</h2>
        <p className="mb-8 text-lg">
          Learn online via Zoom or Google Classroom. Contact us today!
        </p>
        <a
          href="https://wa.me/237677431399"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Message Us on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400 text-center text-sm">
        <p>© {new Date().getFullYear()} Excel Minds by Boma Learning. All rights reserved.</p>
      </footer>
    </>
  );
}

