import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce App",
      description:
        "A full-stack app for small grocery businesses,Built RESTful APIs for e-commerce features like user authentication, product management, and order processing. Optimized database interactions with Entity Framework.",
      link: "https://github.com/Saumya-Patel/E-Com",
    },
    {
      title: "Car Rental System",
      description:
        "A scalable app for booking rental cars,Designed and implemented APIs for user authentication car search rental agreement management, and return requests using .NET Core and Angular.",
      link: "https://github.com/Saumya-Patel/car-rental",
    },
    {
      title: "Library Management Application",
      description:
        "An app to manage library records efficiently,Created APIs for managing book inventory, user authentication and borrowing processes. Enhanced user experience by reducing page load times by 30%.",
      link: "https://github.com/Saumya-Patel/result-management-NODE",
    },
    {
      title: "Portfolio Website",
      description:
        "Showcased my technical expertise through a personal portfolio built with React and Tailwind CSS.",
      link: "#",
    },
    {
      title: "Blog Post Application",
      description:
        "Developed a platform to create and share blogs using React. Designed user-friendly interfaces and handled API integration.",
      link: "https://github.com/Saumya-Patel/Blog-Post-React",
    },
    {
      title: "Result Management Application",
      description:
        "A comprehensive result management system for students and teachers, allowing both to view academic results by entering roll number and date of birth.",
      link: "https://github.com/Saumya-Patel/result-management-NODE",
    },
  ];

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const [isReadMore, setIsReadMore] = useState(false);

            const handleReadMoreClick = () => {
              setIsReadMore(!isReadMore);
            };

            const displayDescription = isReadMore
              ? project.description
              : truncateText(project.description, 12); 
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 flex-grow">
                    {displayDescription}
                  </p>

                  {/* Conditionally render Read More or Read Less */}
                  {project.description.split(" ").length > 12 && (
                    <button
                      onClick={handleReadMoreClick}
                      className="text-green-400 hover:text-blue-600 mb-4"
                    >
                      {isReadMore ? "Read Less" : "Read More"}
                    </button>
                  )}

                  <div className="mt-auto flex justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white bg-green-400 hover:bg-blue-600 px-5 py-2 rounded transition-colors duration-300"
                    >
                      View Project <FaExternalLinkAlt className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
