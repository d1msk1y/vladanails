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
  bookingUrl: string;
  images: string[];
};

export function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const inspoOne = new URL("../../assets/imgs/inspo1.jpeg", import.meta.url).href;
  const serviceImages = {
    manicureClassic: [
      new URL("../../assets/imgs/gel1.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/gel4.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/gel8.jpeg", import.meta.url).href,
    ],
    manicureGel: [
      new URL("../../assets/imgs/gel2.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/gel3.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/gel5.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/gel6.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/gel7.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/gel9.jpeg", import.meta.url).href,
    ],
    pedicureClassic: [
      new URL("../../assets/imgs/pedicure1.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/studio.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/inspo4.jpeg", import.meta.url).href,
    ],
    pedicureSpa: [
      new URL("../../assets/imgs/pedicure1.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/studio.jpeg", import.meta.url).href,
      new URL("../../assets/imgs/inspo3.jpeg", import.meta.url).href,
    ],
  };

  const services: Service[] = [
    {
      id: "manicure",
      title: "Maniküre",
      description: "Formgebung, Nagelhautpflege & Handmassage",
      longDescription: "Meine klassische Maniküre bietet eine schonende Pflege für Ihre Naturnägel. Nach einem entspannenden Handbad werden Ihre Nägel schonend in die gewünschte Form gefeilt, die Nagelhaut sanft entfernt und die Hände mit einer wohltuenden Massage und reichhaltigen Pflegeprodukten verwöhnt.",
      price: "35.-",
      time: "60 Min",
      bookingUrl: "https://cal.eu/vladanails/manicure",
      images: serviceImages.manicureClassic,
    },
    {
      id: "manicure-gel",
      title: "Maniküre mit Gel",
      description: "UV-Lack für bis zu 3 Wochen Haltbarkeit",
      longDescription: "Zusätzlich zur klassischen Maniküre wird ein hochwertiger UV-Lack in Ihrer Wunschfarbe aufgetragen. Der Gellack sorgt für sofort trockene Nägel, brillanten Glanz und einen kratzfesten Halt von bis zu drei Wochen. Ideal für den stressigen Alltag oder besondere Anlässe.",
      price: "55.-",
      time: "120 Min",
      bookingUrl: "https://cal.eu/vladanails/manicure-gel",
      images: serviceImages.manicureGel,
    },
    {
      id: "pedicure",
      title: "Pediküre",
      description: "Revitalisierendes Fußbad & Hornhautentfernung",
      longDescription: "Gönnen Sie Ihren Füßen eine Auszeit. Nach einem erfrischenden und revitalisierenden Fußbad werden die Nägel gekürzt und geformt. Die sanfte und gründliche Hornhautentfernung macht Ihre Füße wieder streichelzart. Eine kleine Abschlussmassage rundet das Pflegeerlebnis ab.",
      price: "75.-",
      time: "90 Min",
      bookingUrl: "https://cal.eu/vladanails/pedicure",
      images: serviceImages.pedicureClassic,
    },
    {
      id: "pedicure-spa",
      title: "Pediküre mit Hautpflege",
      description: "Intensive Tiefenpflege mit Peeling & Maske",
      longDescription: "Das ultimative Verwöhnprogramm für Ihre Füße. Aufbauend auf meiner klassischen Pediküre erhalten Sie ein verfeinerndes Peeling, das abgestorbene Hautschüppchen sanft löst. Eine intensiv pflegende Fußmaske und eine tiefgehende Fußmassage sorgen für maximale Entspannung und langanhaltende Geschmeidigkeit.",
      price: "85.-",
      time: "120 Min",
      bookingUrl: "https://cal.eu/vladanails/pedicure-mit-hautpflege",
      images: serviceImages.pedicureSpa,
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
                    href={activeService.bookingUrl}
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

