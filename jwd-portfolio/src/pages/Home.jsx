import { useState } from "react";

function Home() {
  const slides = [
    {
      image: `${process.env.PUBLIC_URL}/images/Hackathon.jpg`,
      title: "CUHackit 2025",
      desc: "Me and some friends won a Hackathon! We created a smart mailbox attachment",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/SpringBreak.jpg`,
      title: "Spring Break Retreat",
      desc: "I got to co-lead a group of students on a Spring Break trip for an on-campus student ministry!",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/Microphone.webp`,
      title: "AI Transcription App",
      desc: "I'm actively working on a personal side project that uses live transcription and AI to take notes",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Intro */}
      <section className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Welcome
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Welcome to my professional, educational, and personal portfolio.
          Displayed on these pages are the projects, events, and organizations I
          have been involved with and the skills I have learned and acquired in
          that process.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Slideshow */}
        <section className="bg-dark-700 border border-dark-600 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-dark-600">
            <h2 className="text-xl font-semibold text-white">Recent Work</h2>
          </div>
          <div className="relative">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-semibold">
                {slides[current].title}
              </h3>
              <p className="text-gray-300 text-sm">{slides[current].desc}</p>
            </div>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
          <div className="flex justify-center gap-2 p-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === current ? "bg-accent" : "bg-dark-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* News */}
        <section className="bg-dark-700 border border-dark-600 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-dark-600">
            <h2 className="text-xl font-semibold text-white">News</h2>
          </div>
          <ul className="p-6 space-y-4 text-gray-300 text-sm leading-relaxed list-disc list-inside">
            <li>
              Currently I am studying courses related to Data Structures and
              Algorithms, Web Development, and Networking!
            </li>
            <li>
              Some projects I am actively working on include this personal
              portfolio, a chatbot utilizing OpenAI's API, and a synchronized
              timer for coaches to manage their athletes timing and performances
              across devices.
            </li>
            <li>
              Some things I hope on learning soon include familiarity with web
              application frameworks, a deeper understanding of machine learning
              models/neural networks, and a better grasp of Python!
            </li>
            <li>
              I recently competed in a team of 3 at Clemson University's 2025
              Hackathon! We created a smart mailbox attachment that won two of
              the hackathon categories.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
