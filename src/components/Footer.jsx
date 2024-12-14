export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Saumya. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/Saumya-Patel" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/saumya-patel-95b369194/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  