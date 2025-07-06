import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export default async function ServicePage(props) {
  const { params } = props;
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col justify-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {service.title}
        </h1>
        <div className="relative w-full h-80 md:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="text-gray-700 text-lg mb-4">{service.description}</p>
        <p className="text-gray-700 whitespace-pre-line text-base">{service.details}</p>
      </div>
    </section>
  );
}
