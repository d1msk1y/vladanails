import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative w-full pt-32 pb-24 px-6 md:px-12 bg-[#FAF7F5] flex flex-col justify-center min-h-[90vh] overflow-hidden">
      {/* Background Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Abstract Almond Nail Shape */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [15, 25, 15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[-5%] md:top-[10%] md:right-[15%] w-24 h-40 md:w-28 md:h-48 bg-[#EAD4D4] opacity-50 md:opacity-60"
          style={{ borderRadius: '50% 50% 50% 50% / 70% 70% 30% 30%' }}
        />
        
        {/* Material Design Arch (replacing drop) */}
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -10, 0], rotate: [-10, 5, -10] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[40%] right-[10%] md:top-[35%] md:right-[30%] w-16 h-20 md:w-20 md:h-24 bg-[#D1A3A3] opacity-40 md:opacity-60 rounded-t-full"
        />
        
        {/* Abstract Nail Polish Bottle */}
        <motion.svg
          viewBox="0 0 100 120"
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[2%] right-[2%] md:bottom-[7%] md:right-[15%] w-32 h-40 md:w-36 md:h-44 opacity-30 md:opacity-50 drop-shadow-sm"
        >
          <rect x="35" y="10" width="30" height="40" rx="4" fill="#B87F75" />
          <rect x="20" y="55" width="60" height="60" rx="16" fill="#D1A3A3" />
          <path d="M 20 75 Q 50 65 80 75" stroke="#FAF7F5" strokeWidth="4" fill="none" opacity="0.6" />
        </motion.svg>

        {/* Brush Handle / Wand */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [40, 50, 40] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] right-[20%] md:bottom-[20%] md:right-[35%] w-3 h-28 md:w-4 md:h-48 border-2 border-[#B87F75] rounded-full opacity-30 md:opacity-40"
        />

        {/* Upper Left Mobile Decor */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-15, 15, -15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[5%] left-[-15%] md:hidden w-32 h-32 bg-[#D1A3A3] opacity-20 rounded-full"
        />

        {/* Sparkle/Gloss Elements (Stars) */}
        {/* Star 1 - Moves to top left on mobile */}
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, 90], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[8%] left-[5%] md:top-[25%] md:left-[65%] w-10 h-10 md:w-16 md:h-16 text-[#B87F75] opacity-40"
        >
          <path d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" fill="currentColor"/>
        </motion.svg>

        {/* Star 2 - Added tiny star */}
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, -90], scale: [0.6, 1.3, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2.5 }}
          className="absolute top-[35%] left-[85%] md:top-[15%] md:left-[80%] w-6 h-6 md:w-8 md:h-8 text-[#B87F75] opacity-50"
        >
          <path d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" fill="currentColor"/>
        </motion.svg>

        {/* Star 3 - Middle right */}
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, -90], scale: [0.7, 1.2, 0.7] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute top-[55%] right-[5%] md:top-[60%] md:right-[5%] w-8 h-8 md:w-12 md:h-12 text-[#D1A3A3] opacity-40 md:opacity-50"
        >
          <path d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" fill="currentColor"/>
        </motion.svg>

        {/* Star 4 - Bottom left / Center */}
        <motion.svg
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: [0, 90], scale: [0.9, 1.3, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[25%] left-[10%] md:bottom-[35%] md:left-[55%] w-8 h-8 md:w-10 md:h-10 text-[#EAD4D4] opacity-50 md:opacity-60"
        >
          <path d="M50 0 C50 40, 60 50, 100 50 C60 50, 50 60, 50 100 C50 60, 40 50, 0 50 C40 50, 50 40, 50 0 Z" fill="currentColor"/>
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-2xl pt-12 md:pt-0">
          {/* Title */}
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-serif text-brand-dark mb-8">
            Deine<br />
            Hände,<br />
            <span className="text-[#D1A3A3] italic">deine Vision.</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-brand-dark/80 mb-12 max-w-md leading-relaxed">
            Erleben Sie erstklassige Nagelpflege in einem entspannten Ambiente. Wir vereinen Ästhetik mit höchster Qualität.
          </p>
          
          {/* CTA Button */}
          <a
            href="https://cal.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block border-2 border-[#D1A3A3] text-[#B87F75] px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#D1A3A3] hover:text-white transition-colors duration-300 bg-white/30 backdrop-blur-sm"
          >
            Termin Buchen
          </a>
        </div>
      </div>
    </section>
  );
}
