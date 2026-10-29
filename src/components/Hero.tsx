import foto from "../assets/formal.png";
import RotatingRole from "./RotatingRole";
import CvMenu from "./CvMenu";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="status">
          <span className="dot" />
          Terbuka untuk posisi full-time atau freelance
        </p>
        <h1>
          <span className="line">
            <span>IMRON</span>
          </span>
          <span className="line">
            <span>ROFIKI</span>
          </span>
        </h1>
        <RotatingRole />
        <p className="tagline">
          Lulusan Teknik Informatika yang menguasai pengembangan web dan
          administrasi perkantoran.
        </p>
        <div className="actions">
          <CvMenu />
          <a className="btn" href="#contact">
            Hubungi saya
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={foto} alt="Foto Moh Imron Rofiki" />
      </div>
    </section>
  );
}

export default Hero;
