type GalleryItem = {
  src: string;
  alt: string;
  size: "feature" | "wide" | "tall" | "square";
};

const galleryItems: GalleryItem[] = [
  {
    src: new URL("../../assets/.aistudio/imgs/studio.jpeg", import.meta.url).href,
    alt: "Studio interior",
    size: "feature",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel1.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 1",
    size: "square",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel2.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 2",
    size: "tall",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel3.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 3",
    size: "wide",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel4.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 4",
    size: "square",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel5.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 5",
    size: "tall",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel6.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 6",
    size: "square",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel7.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 7",
    size: "wide",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel8.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 8",
    size: "square",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/gel9.jpeg", import.meta.url).href,
    alt: "Gel manicure detail 9",
    size: "tall",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/pedicure1.jpeg", import.meta.url).href,
    alt: "Pedicure detail",
    size: "wide",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/inspo1.jpeg", import.meta.url).href,
    alt: "Aesthetic nail polish look 1",
    size: "square",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/inspo2.jpeg", import.meta.url).href,
    alt: "Aesthetic nail polish look 2",
    size: "tall",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/inspo3.jpeg", import.meta.url).href,
    alt: "Aesthetic nail polish look 3",
    size: "square",
  },
  {
    src: new URL("../../assets/.aistudio/imgs/inspo4.jpeg", import.meta.url).href,
    alt: "Aesthetic nail polish look 4",
    size: "wide",
  },
];

type GalleryPageProps = {
  onNavigate: (path: string) => void;
};

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  return (
    <section className="gallery-page">
      <div className="gallery-page__content">
        <a
          href="/"
          className="gallery-page__back"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/");
          }}
        >
          Zurück zur Startseite
        </a>

        <div className="gallery-page__header">
          <p className="gallery-page__eyebrow">Galerie</p>
          <h1 className="gallery-page__title">Farben, Details und kleine Studio-Momente</h1>
          <p className="gallery-page__description">
            Eine vollständige Auswahl aus meinem kleinen Studio in der Wohnung.
          </p>
        </div>

        <div className="gallery-page__grid">
          {galleryItems.map((item) => (
            <figure key={item.alt} className={`gallery-card gallery-card--${item.size}`}>
              <img className="gallery-card__image" src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}