export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-brand-light flex justify-center items-center">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.1] font-serif font-bold tracking-tighter uppercase text-brand-dark max-w-[90%] mx-auto">
          Wir helfen dabei, <span className="text-brand-pink italic font-light tracking-normal lowercase text-3xl md:text-5xl lg:text-7xl align-middle mx-2">über uns</span> Momente der Schönheit für Dich und Dein Strahlen zu kreieren
        </h2>
        
        <div className="mt-12 md:mt-20 max-w-lg mx-auto text-center flex flex-col items-center gap-8">
          <p className="text-base md:text-lg font-medium leading-relaxed">
            Vlada ist ein Premium-Nagelstudio für Frauen. Wir bieten exzellente Pflege für Hände und Füße in einer entspannten, ästhetischen Atmosphäre an. Jede Behandlung wird individuell auf die Bedürfnisse unserer Kundinnen abgestimmt.
          </p>
          
          <a
            href="#services"
            className="border-b border-brand-dark pb-1 text-sm uppercase tracking-widest font-bold hover:text-brand-dark/70 hover:border-brand-dark/70 transition-colors"
          >
            Mehr lesen
          </a>
        </div>
      </div>
    </section>
  );
}
