"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#cde9ed] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-full md:w-1/3 flex-shrink-0">
          <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-lg">
            <Image
              src="/headshot.jpg"
              alt="Dr. Serena Blake"
              width={400}
              height={500}
              className="object-cover w-full h-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur px-3 py-2 rounded shadow text-sm">
            <p className="font-semibold">Dr. Serena Blake, PsyD</p>
            <p className="text-gray-600">Clinical Psychologist</p>
            <p className="mt-1">
              ⭐ <span className="font-medium">Top Rated</span> | 8+ Years Experience
            </p>
          </div>
        </div>

        <div className="md:w-2/3">
          <span className="inline-block bg-yellow-200 text-yellow-900 text-xs font-semibold px-2 py-1 rounded mb-3">
            About Dr. Serena Blake – Experienced Clinical Psychologist in Los Angeles, CA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hi, I'm Dr. Serena Blake
          </h2>
          <p className="text-gray-800 mb-4 leading-relaxed">
            With over <strong>8 years of dedicated experience</strong> in individual and couples therapy, I truly enjoy working with a wide variety of people of different ages, backgrounds, and presenting concerns. My goal is to help you build credibility in your own journey and educate you on pathways to healing.
          </p>
          <p className="text-gray-800 mb-4 leading-relaxed">
            My therapeutic approach blends evidence-based practices like <strong>cognitive-behavioral therapy</strong> and mindfulness to foster <strong>personal growth</strong>, the strengthening of <strong>relationships</strong>, and a greater sense of <strong>inner peace</strong>. I am passionate about helping clients grow in their capacity to love and thrive.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Whether you are seeking to heal from <strong>past wounds</strong>, discover your <strong>life's purpose</strong>, or build resilience, I offer a supportive space to explore these areas of life. Together, we can work towards achieving your goals for a more fulfilling and purposeful existence.
          </p>
        </div>
      </div>
    </section>
  );
}
