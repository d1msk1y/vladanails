export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light py-24 md:py-32 px-6 md:px-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tighter uppercase mb-12">
          Bereit für<br />perfekte Nägel?
        </h2>
        
        <p className="text-brand-light/80 text-base md:text-lg max-w-md mx-auto mb-12">
          Gönne dir eine Auszeit und lass dich von uns verwöhnen. Wir freuen uns auf deinen Besuch im Nagelstudio Vlada.
        </p>

        <a
          href="https://cal.com/"
          target="_blank"
          rel="noreferrer"
          className="bg-brand-light text-brand-dark px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#D1A3A3] hover:text-white transition-colors w-full sm:w-auto"
        >
          Termin buchen
        </a>
      </div>

      <div className="relative z-10 mt-32 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-brand-light/20 pt-8 text-xs uppercase tracking-widest text-brand-light/60">
        <p>© {new Date().getFullYear()} VLADA NAGELSTUDIO</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-light transition-colors">Impressum</a>
          <a href="#" className="hover:text-brand-light transition-colors">Datenschutz</a>
          <a href="#" className="hover:text-brand-light transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
