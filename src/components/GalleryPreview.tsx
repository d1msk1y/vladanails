type GalleryPreviewProps = {
  onNavigate: (path: string) => void;
};

export function GalleryPreview({ onNavigate }: GalleryPreviewProps) {
  const galleryPreviewOne = new URL("../../assets/.aistudio/imgs/studio.jpeg", import.meta.url).href;
  const galleryPreviewTwo = new URL("../../assets/.aistudio/imgs/gel1.jpeg", import.meta.url).href;

  return (
    <section className="gallery-preview-section">
      <div className="gallery-preview-content">
        <div className="gallery-preview-copy">
          <p className="gallery-preview-eyebrow">Galerie</p>
          <h2 className="gallery-preview-title">Ein kleiner Blick in die Galerie</h2>
          <p className="gallery-preview-description">
            Eine kurze Auswahl aus dem Studio und ein paar Details, die dir einen Eindruck vom Stil geben.
          </p>

          <a
            href="/gallery"
            className="gallery-preview-button"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/gallery");
            }}
          >
            Galerie öffnen
          </a>
        </div>

        <div className="gallery-preview-grid">
          <figure className="gallery-preview-card gallery-preview-card--large">
            <img className="gallery-preview-image gallery-preview-image--studio" src={galleryPreviewOne} alt="Studio preview" />
          </figure>
        </div>
      </div>
    </section>
  );
}