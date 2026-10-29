import Section from "./Section";
import foto from "../assets/non-formal.jpg";
import PhotoViewer from "./PhotoViewer";

const facts = [
  { label: "Lokasi", value: "Pamekasan, Indonesia" },
  { label: "Fokus", value: "Administrasi perkantoran dan pengembangan web" },
  { label: "Status", value: "Terbuka untuk posisi administrasi dan IT" },
];

function About() {
  return (
    <Section id="about" title="Tentang saya">
      <div className="about">
        <PhotoViewer src={foto} alt="Foto santai Moh Imron Rofiki" />
        <div className="about-body">
          <div className="about-text">
            <p className="about-lead">
              Lulusan Teknik Informatika yang menguasai pengembangan web, serta
              berpengalaman di bidang administrasi perkantoran.
            </p>
            <p>
              Melalui Maganghub Kemnaker, saya bertugas sebagai pengelola
              fasilitas umum di bagian Tata Usaha Lapas Narkotika Kelas IIA
              Pamekasan: mengurus surat antarlembaga, memantau penggunaan
              fasilitas, dan menyiapkan sarana kantor.
            </p>
            <p>
              Di sisi teknis, saya membangun web sistem penjualan sofa,
              Al-Qur'an, dan website desa, serta menguasai Excel, Word, dan
              PowerPoint.
            </p>
            <p>
              Saat ini saya mencari posisi di bidang administrasi atau IT, di
              tempat yang menghargai ketelitian dan memberi ruang untuk
              berkembang.
            </p>
          </div>

          <dl className="about-facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}

export default About;
