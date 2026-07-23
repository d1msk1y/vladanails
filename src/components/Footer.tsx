export function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>

      <div className="footer-inner">
        <h2 className="footer-title">
          Bereit für<br />perfekte Nägel?
        </h2>

        <p className="footer-text">
          Gönne dir eine Auszeit und lass dich von mir verwöhnen. Ich freue mich auf deinen Besuch bei mir in meinem kleinen Studio.
        </p>

        <a
          href="https://cal.eu/vladanails"
          target="_blank"
          rel="noreferrer"
          className="footer-button"
        >
          Termin buchen
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} VLADA</p>
        <div className="footer-links">
          <a href="#" className="footer-link">Impressum</a>
          <a href="#" className="footer-link">Datenschutz</a>
          <a href="https://www.instagram.com/nails_v3837/" target="_blank" rel="noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
