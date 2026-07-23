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
  const inspoOne = new URL("../../assets/.aistudio/imgs/inspo1.jpeg", import.meta.url).href;

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
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="mb-8 gap-4">
          <h2 className="section-title section-title--services">
            Meine<br />Dienstleistungen
          </h2>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <button 
              key={service.id} 
              onClick={() => openService(service)}
              className="service-row"
            >
              <div className="service-row__content">
                <h3 className="service-row__title">
                  {service.title}
                </h3>
                <p className="service-row__description">
                  {service.description}
                </p>
              </div>
              <div className="service-row__price">
                {service.price}
              </div>
            </button>
          ))}
        </div>

        <div className="aesthetic-strip-grid services-strip-grid services-strip-grid--bottom">
          <figure className="aesthetic-strip-card aesthetic-strip-card--supporting aesthetic-strip-card--services-bottom">
            <img className="aesthetic-strip-image" src={inspoOne} alt="Aesthetic nail polish look 1" />
          </figure>
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={closeService}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={closeService}
                className="modal-close"
              >
                <X size={20} />
              </button>

              <div className="carousel">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={activeService.images[currentImageIndex]}
                    alt={`${activeService.title} preview`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="carousel-image"
                  />
                </AnimatePresence>

                <div className="carousel-controls">
                  <button 
                    onClick={prevImage}
                    className="carousel-button"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="carousel-button"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                <div className="carousel-indicators">
                  {activeService.images.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`carousel-indicator ${idx === currentImageIndex ? "carousel-indicator--active" : "carousel-indicator--inactive"}`}
                    />
                  ))}
                </div>
              </div>

              <div className="service-detail">
                <div className="service-detail__header">
                  <div>
                    <h3 className="service-detail__title">
                      {activeService.title}
                    </h3>
                    <div className="service-detail__meta">
                      <Clock size={14} />
                      <span>{activeService.time}</span>
                    </div>
                  </div>
                  <div className="service-detail__price">
                    {activeService.price}
                  </div>
                </div>

                <p className="service-detail__description">
                  {activeService.longDescription}
                </p>

                <div className="service-detail__footer">
                  <a
                    href="https://cal.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="booking-button"
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

