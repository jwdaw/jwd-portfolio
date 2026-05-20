import Card from "../components/Card";

function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        My Blog
      </h1>

      {/* Hackathon post */}
      <article className="bg-dark-700 border border-dark-600 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-2">
          CU Hackathon 2025
        </h2>
        <p className="text-gray-500 text-sm mb-4">March 9, 2025</p>
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
      </article>

      {/* Capstone post */}
      <Card
        title="Capstone Project Update Coming Soon!"
        image={`${process.env.PUBLIC_URL}/images/capstone.png`}
        imageAlt="Capstone project screenshot"
        content={
          <div>
            <p className="text-gray-500 text-sm mb-3">January 20, 2025</p>
            <p className="text-gray-300 leading-relaxed">
              Capstone Project will be coming up soon and I'm excited to begin
              working with a group on a real world project that will not only be
              a portfolio piece but also be a great space to learn and push
              myself to develop better software!
            </p>
          </div>
        }
      />
    </div>
  );
}

export default Blog;
