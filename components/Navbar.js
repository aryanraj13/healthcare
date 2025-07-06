export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#dbebee] shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-800">
          Dr. Serena Blake
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#hero" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#faq" className="text-gray-700 hover:text-blue-600">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
