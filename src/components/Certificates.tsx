import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import Section from "./Section";
import { certificates } from "../data/certificates";
import type { Certificate } from "../data/certificates";

const PAGE_SIZE = 2;

const imgUrl = (file: string) =>
  `${import.meta.env.BASE_URL}sertifikat/${file}`;

function CardBody({ c }: { c: Certificate }) {
  return (
    <>
      {c.image && (
        <img
          src={imgUrl(c.image)}
          alt={`Sertifikat ${c.title}`}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="cert-info">
        <h3>{c.title}</h3>
        <p className="muted">
          {c.issuer}, {c.year}
        </p>
      </div>
    </>
  );
}

function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(certificates.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const visible = certificates.slice(start, start + PAGE_SIZE);

  useEffect(() => {
    if (!selected) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <Section id="certificates" title="Sertifikat">
      <ul className="certs">
        {visible.map((c, i) => (
          <li key={start + i}>
            {c.image ? (
              <button className="cert-card" onClick={() => setSelected(c)}>
                <CardBody c={c} />
              </button>
            ) : c.link ? (
              <a
                className="cert-card"
                href={c.link}
                target="_blank"
                rel="noreferrer"
              >
                <CardBody c={c} />
              </a>
            ) : (
              <div className="cert-card cert-static">
                <CardBody c={c} />
              </div>
            )}
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="cert-pager">
          <button
            className="btn"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
          >
            Sebelumnya
          </button>
          <span className="muted">
            {page + 1} / {totalPages}
          </span>
          <button
            className="btn"
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages - 1}
          >
            Berikutnya
          </button>
        </div>
      )}

      {selected && selected.image && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div
            className="lightbox-box"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-bar">
              <div>
                <h3>{selected.title}</h3>
                <p className="muted">
                  {selected.issuer}, {selected.year}
                </p>
              </div>
              <button
                className="lightbox-close"
                onClick={() => setSelected(null)}
                aria-label="Tutup"
              >
                <FaTimes />
              </button>
            </div>
            <img
              src={imgUrl(selected.image)}
              alt={`Sertifikat ${selected.title}`}
            />
            {selected.link && (
              <a
                className="btn"
                href={selected.link}
                target="_blank"
                rel="noreferrer"
              >
                Verifikasi online
              </a>
            )}
          </div>
        </div>
      )}
    </Section>
  );
}

export default Certificates;
