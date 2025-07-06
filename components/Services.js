"use client";
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management Therapy",
      description:
        "Learn practical strategies to reduce anxiety and chronic stress with evidence-based techniques. Dr. Blake combines cognitive-behavioral therapy and mindfulness to help you regain calm, clarity, and resilience in your daily life.",
      image: "/anxiety.jpg",
    },
    {
      title: "Relationship & Couples Counseling",
      description:
        "Improve communication, resolve conflicts, and rebuild trust. Whether you are dating, partnered, or married, Dr. Blake offers compassionate guidance to help you strengthen your relationship and foster deeper connection.",
      image: "/relationship.jpg",
    },
    {
      title: "Trauma Recovery & Healing",
      description:
        "Work through past trauma in a safe, supportive environment. Using trauma-informed approaches, Dr. Blake empowers you to process difficult experiences and move forward with greater confidence and peace.",
      image: "/trauma.avif",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          How I Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#b7d9dc] rounded-xl border border-gray-300 shadow-md p-4 flex flex-col"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <button className="mt-auto w-full border border-gray-700 text-gray-800 hover:bg-gray-100 py-2 rounded transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
