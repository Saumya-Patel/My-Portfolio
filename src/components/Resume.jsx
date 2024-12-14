export default function Resume() {
    return (
      <section id="resume" className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">My Resume</h2>
          <p className="text-lg text-gray-700 mb-6">
            Interested in working together? Download my resume for a detailed overview of my experience and skills.
          </p>
          <a
            href="src/assets/Saumya-Resume.pdf"
            download="Saumya_Resume.pdf"
            className="bg-green-400 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  }
  