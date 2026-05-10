import { services } from "../../../constants";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ServicePage({ params }) {
  const service = services.find(
    (service) => service.href === `/services/${params.service}`
  );

  if (!service) {
    notFound();
  }

  return (
    <div className="py-20 lg:py-28 max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <Link href="/services" className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300">
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center tracking-tighter mb-8 bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text" style={{ fontFamily: '\'Lora\', serif' }}>
        {service.text}
      </h1>
      <p className="text-xl text-center text-neutral-400 leading-8">
        {service.description}
      </p>
    </div>
  );
}
