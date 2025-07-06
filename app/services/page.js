"use client";
import Image from "next/image";
import Link from "next/link";

import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          How I Help
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
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
              <Link
                href={`/services/${service.slug}`}
                className="mt-auto w-full border border-gray-700 text-center text-gray-800 hover:bg-gray-100 py-2 rounded transition"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
