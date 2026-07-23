import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type Service = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  time: string;
  images: string[];
};

export function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const services: Service[] = [
    {
      id: "manicure",
      title: "Maniküre Klassik",
      description: "Formgebung, Nagelhautpflege & Handmassage",
      longDescription: "Meine klassische Maniküre bietet eine schonende Pflege für Ihre Naturnägel. Nach einem entspannenden Handbad werden Ihre Nägel schonend in die gewünschte Form gefeilt, die Nagelhaut sanft entfernt und die Hände mit einer wohltuenden Massage und reichhaltigen Pflegeprodukten verwöhnt.",
      price: "35€",
      time: "45 Min",
      images: [
        "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1632832791334-08fceb5c4004?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop"
      ],
    },
    {
      id: "manicure-gel",
      title: "Maniküre + Gel",
      description: "UV-Lack für bis zu 3 Wochen Haltbarkeit",
      longDescription: "Zusätzlich zur klassischen Maniküre wird ein hochwertiger UV-Lack in Ihrer Wunschfarbe aufgetragen. Der Gellack sorgt für sofort trockene Nägel, brillanten Glanz und einen kratzfesten Halt von bis zu drei Wochen. Ideal für den stressigen Alltag oder besondere Anlässe.",
      price: "55€",
      time: "60 Min",
      images: [
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595856417551-614b1ccdf877?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512496015851-a1dcafafca17?q=80&w=800&auto=format&fit=crop"
      ],
    },
    {
      id: "pedicure",
      title: "Pediküre",
      description: "Revitalisierendes Fußbad & Hornhautentfernung",
      longDescription: "Gönnen Sie Ihren Füßen eine Auszeit. Nach einem erfrischenden und revitalisierenden Fußbad werden die Nägel gekürzt und geformt. Die sanfte und gründliche Hornhautentfernung macht Ihre Füße wieder streichelzart. Eine kleine Abschlussmassage rundet das Pflegeerlebnis ab.",
      price: "45€",
      time: "45 Min",
      images: [
        "https://images.unsplash.com/photo-1516975080661-46b08078df42?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1534065602766-384da18b4ddb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508609590684-2a6231362e5b?q=80&w=800&auto=format&fit=crop"
      ],
    },
    {
      id: "pedicure-spa",
      title: "Pediküre + Feet Care",
      description: "Intensive Tiefenpflege mit Peeling & Maske",
      longDescription: "Das ultimative Verwöhnprogramm für Ihre Füße. Aufbauend auf meiner klassischen Pediküre erhalten Sie ein verfeinerndes Peeling, das abgestorbene Hautschüppchen sanft löst. Eine intensiv pflegende Fußmaske und eine tiefgehende Fußmassage sorgen für maximale Entspannung und langanhaltende Geschmeidigkeit.",
      price: "65€",
      time: "75 Min",
      images: [
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop"
      ],
    },
  ];

  useEffect(() => {
    if (activeService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  const openService = (service: Service) => {
    setActiveService(service);
    setCurrentImageIndex(0);
  };

  const closeService = () => {
    setActiveService(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeService) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeService.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeService) return;
    setCurrentImageIndex((prev) => (prev - 1 + activeService.images.length) % activeService.images.length);
  };

  return (
    <section id="services" className="py-12 bg-white px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark">
            Meine<br />Dienstleistungen
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {services.map((service) => (
            <button 
              key={service.id} 
              onClick={() => openService(service)}
              className="flex justify-between items-center py-6 border-b border-brand-dark/10 group hover:bg-[#FAF7F5] transition-colors w-full text-left px-2 md:px-4 -mx-2 md:-mx-4 rounded-lg"
            >
              <div className="flex flex-col gap-1 pr-4">
                <h3 className="text-base md:text-lg font-medium text-brand-dark group-hover:text-[#B87F75] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-brand-dark/60 italic font-light">
                  {service.description}
                </p>
              </div>
              <div className="text-xl md:text-2xl font-serif text-[#D1A3A3]">
                {service.price}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-brand-dark/40 backdrop-blur-sm"
            onClick={closeService}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden flex flex-col max-h-[90vh] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeService}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur text-brand-dark rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image Carousel */}
              <div className="relative w-full h-64 md:h-80 shrink-0 bg-[#FAF7F5]">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={activeService.images[currentImageIndex]}
                    alt={`${activeService.title} preview`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Carousel Controls */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button 
                    onClick={prevImage}
                    className="w-10 h-10 bg-white/50 backdrop-blur hover:bg-white/90 text-brand-dark rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-10 h-10 bg-white/50 backdrop-blur hover:bg-white/90 text-brand-dark rounded-full flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {activeService.images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow overflow-y-auto">
                <div className="flex justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif text-brand-dark mb-2">
                      {activeService.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#8C6B66]">
                      <Clock size={14} />
                      <span>{activeService.time}</span>
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-serif text-[#D1A3A3]">
                    {activeService.price}
                  </div>
                </div>

                <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed mb-8">
                  {activeService.longDescription}
                </p>

                <div className="mt-auto pt-6 border-t border-brand-dark/10">
                  <a
                    href="https://cal.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center bg-[#D1A3A3] text-white px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#B87F75] transition-colors w-full text-center"
                  >
                    Termin Buchen
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

