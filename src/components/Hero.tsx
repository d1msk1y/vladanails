import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [15, 25, 15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="hero-ornament hero-ornament--almond"
          style={{ borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%' }}
        />

        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -10, 0], rotate: [-10, 5, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hero-ornament hero-ornament--arch"
        />

        <motion.svg
          viewBox="0 0 100 120"
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="hero-ornament hero-ornament--bottle"
        >
          <rect x="35" y="10" width="30" height="40" rx="4" fill="#B87F75" />
          <rect x="20" y="55" width="60" height="60" rx="16" fill="#D1A3A3" />
          <path d="M 20 75 Q 50 65 80 75" stroke="#FAF7F5" strokeWidth="4" fill="none" opacity="0.6" />
        </motion.svg>

        <motion.div
          animate={{ y: [0, -30, 0], rotate: [40, 50, 40] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="hero-ornament hero-ornament--wand"
        />

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-15, 15, -15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="hero-ornament hero-ornament--mobile-circle md:hidden"
        />

        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, 90], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="hero-ornament hero-star hero-star--large-left"
        >
          <path className="hero-star__path" d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" />
        </motion.svg>

        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, -90], scale: [0.6, 1.3, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2.5 }}
          className="hero-ornament hero-star hero-star--small-right"
        >
          <path className="hero-star__path" d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" />
        </motion.svg>

        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, -90], scale: [0.7, 1.2, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
          className="hero-ornament hero-star hero-star--mid-right"
        >
          <path className="hero-star__path" d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" />
        </motion.svg>

        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, 90], scale: [0.9, 1.3, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          className="hero-ornament hero-star hero-star--bottom-left"
        >
          <path className="hero-star__path" d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" />
        </motion.svg>
      </div>

      <div className="hero-content">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="hero-title-line">Deine</span>
            <span className="hero-title-line">Hände,</span>
            <span className="hero-title-line hero-title-accent">deine Vision.</span>
          </h1>

          <p className="hero-description">
            Erleben Sie erstklassige Nagelpflege in einem entspannten Ambiente. Ich vereine Ästhetik mit höchster Qualität.
          </p>

          <a
            href="https://cal.eu/vladanails"
            target="_blank"
            rel="noreferrer"
            className="hero-button"
          >
            Termin Buchen
          </a>
        </div>
      </div>
    </section>
  );
}
