import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Portfolio Title on the left */}
        <h1 className="text-2xl font-bold text-green-400">MY PORTFOLIO</h1>

        {/* Hamburger menu for small screens */}
        <div className="lg:hidden lg:items-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu items aligned to the right */}
        <div className="lg:flex">
          <ul
            className={`lg:flex lg:space-x-6 lg:ml-auto ${
              isMenuOpen ? "block" : "hidden"
            } absolute lg:static top-16 right-0 w-full bg-gray-800 lg:bg-transparent p-6 lg:p-0`}
          >
            <li>
              <a href="#hero" className="hover:text-blue-500  text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-500  text-green-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#resume" className="hover:text-blue-500  text-green-400">
                Resume
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500  text-green-400">
                About
              </a>
            </li>
            
            <li>
              <a href="#contact" className="hover:text-blue-500 text-green-400">
                Contact
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}
