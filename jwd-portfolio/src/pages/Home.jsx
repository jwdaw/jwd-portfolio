import { useState } from "react";

function Home() {
  const slides = [
    {
      image: `${process.env.PUBLIC_URL}/images/graduation.png`,
      title: "Graduated from USC!",
      desc: "Earned my degree in Computer Information Systems with a minor in Business Administration. Goodbye USC!",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/colorado.png`,
      title: "Colorado Camping Trip",
      desc: "Headed to Colorado for the month to go on a camping trip before starting work in July.",
    },
    {
      image: `${process.env.PUBLIC_URL}/images/rvohealth.png`,
      title: "Starting at RVO Health",
      desc: "Joining RVO Health as an Associate Software Engineer in July 2026. Really excited to start!",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 pt-4">
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
            <h2 className="text-xl font-semibold text-white">Recent News</h2>
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
              <p className="text-gray-200 text-sm">{slides[current].desc}</p>
            </div>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center gap-2 p-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === current ? "bg-white" : "bg-dark-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* News */}
        <section className="bg-dark-700 border border-dark-600 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-dark-600">
            <h2 className="text-xl font-semibold text-white">Recent Work</h2>
          </div>
          <ul className="p-6 space-y-4 text-gray-300 text-sm leading-relaxed list-disc list-inside">
            <li>
              Completed my capstone project with Synchro, building mobile and
              web features for an all-in-one sports hub platform using React,
              Node/Express, and Azure.
            </li>
            <li>
              Won Best use of AWS for the second year in a row at CUHackit 2026,
              building Pill Buddy — an intelligent medication storage and
              reminder device.
            </li>
            <li>
              Finished my Software Engineering Internship at RVO Health over the
              summer of 2025, gaining real-world experience in professional
              software development.
            </li>
            <li>
              Won Best use of AWS and Best Hardware Hack at CUHackit 2025,
              building a smart mailbox attachment with a team of friends.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Home;
