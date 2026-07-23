export function AestheticStrip() {
  const inspoTwo = new URL("../../assets/.aistudio/imgs/inspo2.jpeg", import.meta.url).href;

  return (
    <section className="aesthetic-strip-section">
      <div className="aesthetic-strip-content">
        <figure className="aesthetic-strip-card aesthetic-strip-card--solo">
          <img className="aesthetic-strip-image" src={inspoTwo} alt="Aesthetic nail polish look 2" />
        </figure>
      </div>
    </section>
  );
}