import { useState } from "react";

const posts = [
  {
    id: 6,
    title: "Capstone Project Complete - Synchro",
    date: "May 2026",
    image: `${process.env.PUBLIC_URL}/images/synchrofinal.png`,
    imagePosition: "top",
    content: (
      <>
        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/OSVJxXCtNDI"
            title="Capstone Project - Synchro"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Our capstone project with Synchro is officially complete! It's been an
          incredible semester building out mobile and web features for this
          all-in-one sports hub platform. Check out the video above for a full
          demo and overview of what our team accomplished. Grateful for the
          experience and everything I learned working with the team and our
          client David Cubrilla.
        </p>
        <p className="mt-4">
          <a
            href="https://sccapstone.github.io/JAIRE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            Check out the project website →
          </a>
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "CUHackit 2026 - Pill Buddy",
    date: "February 2026",
    image: `${process.env.PUBLIC_URL}/images/cuhackit26.png`,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Back to Back!! This weekend I got to participate in CUhackit 2026 at
          Clemson University with Brian Wisniewski, Evan Zovkic, and Maggie
          Thoem! In 24 hours, we built Pill Buddy: an intelligent medication
          storage and reminder device.
        </p>
        <div className="mb-4">
          <h3 className="text-white font-semibold mb-2">Tech Highlights</h3>
          <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
            <li>
              ESP32 using Embedded C with I/O interfacing and control logic
            </li>
            <li>Full CAD design and custom 3D printed limit switches</li>
            <li>AWS IoT Core, Lambda Functions, API Gateway, and DynamoDB</li>
            <li>React Native mobile client application</li>
            <li>ElevenLabs AI Voice Agents for Medication Setups</li>
          </ul>
        </div>
        <p className="text-gray-300 leading-relaxed mb-4">
          I worked on the backend functionality including implementation of AWS
          Lambda functions and the DynamoDB database. I also spent time building
          out the iOS client app allowing users to review medication status.
          Truly such an amazing opportunity to learn new skills and apply them!
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          We sought out two main categories of the hackathon — Hack for Good and
          Best use of AWS. While we weren't able to pull off Hack for Good due
          to some incredible competition, we took home first place in Best use
          of AWS for the second year in a row!
        </p>
        <p className="text-gray-300 leading-relaxed">
          Really grateful for the organizers of CUHackit and all the
          volunteers/sponsors that made it possible, y'all killed it!
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Capstone Project Kickoff with Synchro",
    date: "October 2025",
    image: `${process.env.PUBLIC_URL}/images/capstonestart.png`,
    imagePosition: "top",
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          Excited to announce that our capstone project is officially underway!
          Our team is partnering with Synchro, an all-in-one sports hub startup
          that aims to be a one-stop shop for all things athletics, treatment,
          and communication.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          We'll be developing a mobile application, web features, and
          potentially other concepts to build on Synchro's existing
          functionality. Our main point of contact is Senior Engineer David
          Cubrilla.
        </p>
        <div className="mb-4">
          <h3 className="text-white font-semibold mb-2">🧰 Tech Stack</h3>
          <ul className="text-gray-300 text-sm space-y-1 list-disc list-inside">
            <li>Framework: React, Azure SDK</li>
            <li>Backend: Node with Express, Azure</li>
            <li>Hosting: Azure Cloud Compute Instance</li>
            <li>Libraries: React, TailwindCSS</li>
            <li>Package Manager: NPM</li>
          </ul>
        </div>
        <p className="text-gray-300 leading-relaxed">
          Looking forward to diving in and building something meaningful with
          the team. More updates to come as we progress through the semester!
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Summer Internship with RVO Health",
    date: "August 2025",
    image: `${process.env.PUBLIC_URL}/images/internship.png`,
    content: (
      <>
        <p className="text-gray-300 leading-relaxed mb-4">
          This Friday marked the last day of my Software Engineering Internship
          with RVO Health, and what an incredible experience it has been! A lot
          of my friends often say that there are things you have to learn on the
          job that you don't learn in school, and that has been a huge truth
          this summer. Here are some of my favorite takeaways:
        </p>
        <ol className="text-gray-300 leading-relaxed list-decimal list-inside space-y-3 mb-4">
          <li>
            <span className="font-semibold text-white">Always Ask Why:</span> In
            Software Engineering, knowing the "why" behind each language,
            framework, and piece of software I interact with not only drives the
            work I do, but it gives me a better understanding of my purpose on
            my team and as a developer.
          </li>
          <li>
            <span className="font-semibold text-white">
              Don't Be An Island:
            </span>{" "}
            Go and meet people! This one was so huge for me! I have a much
            better understanding of what it means to be a developer because I
            got to meet with so many people from Designers, to Project Managers,
            to Company Leadership and more. Their perspective on the business
            and product I worked with taught me so much about how to communicate
            and interact with a team.
          </li>
          <li>
            <span className="font-semibold text-white">
              Learn and Grow at Every Opportunity:
            </span>{" "}
            Every person I meet, every framework I use, every project I get to
            work on, I try to learn as much as possible from. Whether it be new
            technical skills, a more effective way to communicate, or something
            as simple as a keyboard shortcut, making the energy and time to
            learn these things has allowed me to grow in a lot of cool areas.
          </li>
        </ol>
        <p className="text-gray-300 leading-relaxed">
          Overall this internship has taught me so much about Software
          Development as a career and other roles as well. Thank you
          specifically to my managers Brandon Brown and Mark Kroh for their
          guidance throughout this internship and special shout out to Roxana
          Carrera and Tyler Corkill for their help as well during this time!
        </p>
      </>
    ),
  },
  {
    id: 1,
    title: "CU Hackathon 2025",
    date: "March 9, 2025",
    image: `${process.env.PUBLIC_URL}/images/Hackathon.jpg`,
    content: (
      <>
        <div className="aspect-video mb-4 rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EgFc_VZ-eq8?si=VSPizkrebWtmsmr9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-300 leading-relaxed">
          I'm excited to have been able to participate in this year's Clemson
          University 2025 Hackathon! I teamed up with a group of friends to
          build a smart mailbox attachment. We won best use of AWS and best
          hardware hack!
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Capstone Project Update Coming Soon!",
    date: "January 20, 2025",
    image: `${process.env.PUBLIC_URL}/images/capstone.png`,
    content: (
      <p className="text-gray-300 leading-relaxed">
        Capstone Project will be coming up soon and I'm excited to begin working
        with a group on a real world project that will not only be a portfolio
        piece but also be a great space to learn and push myself to develop
        better software!
      </p>
    ),
  },
];

function Blog() {
  const [activePost, setActivePost] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        My Blog
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => setActivePost(post)}
            className="text-left bg-dark-700 border border-dark-600 rounded-lg overflow-hidden hover:border-gray-500 transition-colors group"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                style={
                  post.imagePosition
                    ? { objectPosition: post.imagePosition }
                    : undefined
                }
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-xs">{post.date}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {activePost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setActivePost(null)}
        >
          <div
            className="bg-dark-800 border border-dark-600 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-600">
              <div>
                <h2 className="text-lg font-bold text-white">
                  {activePost.title}
                </h2>
                <p className="text-gray-500 text-sm">{activePost.date}</p>
              </div>
              <button
                onClick={() => setActivePost(null)}
                className="text-gray-400 hover:text-white text-xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-6">{activePost.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;
