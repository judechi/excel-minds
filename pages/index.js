// pages/index.js
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const instructors = [
    "/images/instructor1.jpeg",
    "/images/instructor2.jpeg",
    "/images/instructor3.jpeg",
  ];

  return (
    <>
      <Head>
        <title>Excel Minds</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex flex-col">

        {/* Hero Section */}
        <section className="bg-white w-full py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 flex flex-col-reverse md:flex-row items-center">
            <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                Excel Minds by Boma Learning
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600">
                Are you an IB English B or Language A: Language and Literature student, IGCSE ESL or Literature in English student? 
                We provide personalized learning to help you achieve 6 or 7 in IB, A* or A+ in IGCSE.
              </p>
              <a
                href="https://wa.me/237677431399"
                className="mt-6 inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition"
              >
                Contact on WhatsApp for more information
              </a>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Teacher instructing students in group learning"
                className="w-3/4 md:w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Welcome Message Section */}
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome to 💯 Success Platform</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              In our package: personalized learning, subject content, examination tips, past questions with sample answers, and reinforcement lessons to land your desired grades.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80"
                alt="IB English"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="font-bold text-xl mb-2">IB English B / Language A</h2>
              <p>Personalized lessons and exam tips to achieve a 6 or 7.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1555685812-4b943f1d0e27?auto=format&fit=crop&w=400&q=80"
                alt="IGCSE ESL"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="font-bold text-xl mb-2">IGCSE ESL / Literature</h2>
              <p>Past questions, sample answers, and reinforcement lessons for top grades.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1596496058580-013c7c3b0ff7?auto=format&fit=crop&w=400&q=80"
                alt="Online Learning"
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h2 className="font-bold text-xl mb-2">Flexible Online Learning</h2>
              <p>Classes via Zoom or Google Classroom. Contact via WhatsApp for more information.</p>
            </div>

          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24 text-center">
            <h2 className="text-3xl font-bold mb-6">Meet the Instructor</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {instructors.map((src, index) => (
                <div key={index} className="text-center">
                  <img
                    src={src}
                    alt="Instructor Boma Mercy"
                    className="w-40 h-40 sm:w-40 sm:h-40 rounded-full mx-auto shadow-lg object-cover"
                  />
                  <p className="mt-2 font-bold">Boma Mercy</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-6 mt-auto text-center">
          <p>© 2025 Excel Minds by Boma Mercy. Contact: <a href="https://wa.me/237677431399" className="underline">WhatsApp</a></p>
        </footer>
      </main>
    </>
  );
}
