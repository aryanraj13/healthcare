export default function Footer() {
  return (
    <footer className="bg-[#174249] text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Dr. Serena Blake, PsyD
          </h3>
          <p>Clinical Psychologist in Los Angeles, CA</p>
          <p className="mt-2 font-medium text-white">Top Rated</p>
          <p className="mt-4">1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p className="mt-2">Contact: (323) 555-0192</p>
          <p className="mt-1">
            <span className="inline-block bg-[#01262c] text-white text-xs px-2 py-1 rounded">
              Psychology Today Verified
            </span>
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Links</h4>
          <ul className="space-y-2">
            <li><a href="#contact" className="hover:underline">Get In Touch</a></li>
            <li><a href="#about" className="hover:underline">About Me</a></li>
            <li><a href="#faq" className="hover:underline">FAQs</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Areas Served</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p>Los Angeles, CA</p>
            <p>Pasadena, CA</p>
            <p>Glendale, CA</p>
            <p>Burbank, CA</p>
            <p>Santa Monica, CA</p>
            <p>Long Beach, CA</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-sm flex flex-col md:flex-row justify-between">
        <p>© {new Date().getFullYear()} Dr. Serena Blake. All Rights Reserved.</p>
        <p>
          Credits to Freepik for media illustrations:{" "}
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.freepik.com
          </a>
        </p>
      </div>
    </footer>
  );
}
