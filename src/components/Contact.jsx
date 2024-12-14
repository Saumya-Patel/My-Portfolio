import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8c2rfcu', //  EmailJS Service ID
        'template_ga8v3jm', //  EmailJS Template ID
        e.target,
        'O6hIkuJuNOpAjAfFz' //  EmailJS Public Key
      )
      .then(
        (result) => {
          alert('Message Sent Successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to Send Message. Please Try Again!');
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 lg:px-20 ">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 ">
          <div className="flex-1 ">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 ">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you want to discuss a project, collaborate, or simply say hello, feel free to reach out to me. 
              I'm always happy to connect and explore new opportunities.
            </p>

            <div className="space-y-6 lg:flex-row ">
              <div className="bg-blue-500 p-6 rounded-lg shadow-lg gap-4 mt-auto flex justify-center w-[400px]">
                <a
                  href="https://www.linkedin.com/in/saumya-patel-95b369194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-lg hover:underline"
                >
                  <FaLinkedin size={25} />
                  LinkedIn
                </a>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg gap-4 mt-auto flex justify-center w-[400px]">
                <a
                  href="https://github.com/Saumya-Patel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-lg hover:underline"
                >
                  <FaGithub size={25} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>
            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="to_name" className="block text-lg font-medium text-white">
                  Recipient's Name
                </label>
                <input
                  id="to_name"
                  name="to_name"  
                  type="text"
                  placeholder="Enter recipient's name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="from_name" className="block text-lg font-medium text-white">
                  Your Name
                </label>
                <input
                  id="from_name"
                  name="from_name"  
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-lg font-medium text-white">
                  Your Email
                </label>
                <input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-white">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"  
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-400 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
