export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-3xl text-white space-y-4">
        <p className="text-sm uppercase tracking-wide opacity-90">
          Christian Counseling & Spiritual Guidance with Dr. Serena Blake
        </p>

        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Find Healing, Clarity, and Purpose through Professional Christian Counseling
        </h1>

        <p className="text-lg md:text-xl opacity-90">
          Begin your journey toward emotional renewal, deeper faith, and authentic connections.
        </p>

        <p className="text-base font-medium mt-4">
          Dr. Serena Blake is here to help you achieve...
        </p>

        <p className="text-lg font-semibold text-blue-300">
          <span className="inline-flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Renewed Hope & Direction for Your Life</span>
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          <span className="inline-flex items-center space-x-1 bg-yellow-500 text-black px-2 py-1 rounded">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.084 10.1c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z"/>
            </svg>
            <span>Top Rated Counselor</span>
          </span>

          <span className="border border-white px-2 py-1 rounded">
            8+ Years Helping Clients Heal
          </span>
          <a href="#testimonials" className="underline hover:text-blue-300">
            Client Testimonials
          </a>
          <a href="#media" className="underline hover:text-blue-300">
            Featured In Media
          </a>
        </div>

        <div className="mt-6">
          <a
            href="#contact"
            className="inline-block bg-[#aee1e9] text-[#1c344e] font-semibold px-6 py-3 rounded shadow-lg "
          >
            Start Your Healing Journey
          </a>
        </div>
      </div>
    </section>
  );
}
