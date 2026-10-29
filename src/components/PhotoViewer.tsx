import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { createPortal } from "react-dom";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMinus,
  FaPlus,
  FaSyncAlt,
  FaTimes,
} from "react-icons/fa";
import { contact } from "../data/contact";

type Props = {
  src: string;
  alt: string;
};

const MAX_TILT = 25;
const MIN_ZOOM = 1;
const MAX_ZOOM = 2.5;

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

function PhotoViewer({ src, alt }: Props) {
  const [open, setOpen] = useState(false);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({
    startX: 0,
    startY: 0,
    baseX: 0,
    baseY: 0,
    moved: false,
  });

  const openViewer = () => {
    setRot({ x: 0, y: 0 });
    setZoom(1);
    setOpen(true);
  };

  // Esc untuk menutup + kunci scroll halaman
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Saat drag: dengarkan gerakan di seluruh window
  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: PointerEvent) => {
      const d = drag.current;
      const dx = e.clientX - d.startX;
      const dy = e.clientY - d.startY;
      if (Math.abs(dx) + Math.abs(dy) > 5) d.moved = true;
      setRot({
        x: clamp(d.baseX - dy * 0.3, -MAX_TILT, MAX_TILT),
        y: d.baseY + dx * 0.5,
      });
    };

    // Saat dilepas: kartu menempel ke sisi depan atau belakang
    const onUp = () => {
      setDragging(false);
      setRot((r) => ({ x: 0, y: Math.round(r.y / 180) * 180 }));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      baseX: rot.x,
      baseY: rot.y,
      moved: false,
    };
    setDragging(true);
  };

  const flip = () => setRot((r) => ({ x: 0, y: r.y + 180 }));
  const changeZoom = (delta: number) =>
    setZoom((z) => clamp(z + delta, MIN_ZOOM, MAX_ZOOM));

  return (
    <>
      <button
        className="photo-btn"
        onClick={openViewer}
        aria-label="Perbesar foto"
      >
        <img className="about-photo" src={src} alt={alt} />
        {/* <span className="photo-hint">Klik untuk perbesar</span> */}
      </button>

      {open &&
        createPortal(
          <div
            className="viewer"
            role="dialog"
            aria-modal="true"
            aria-label="Foto profil"
          >
            <div
              className={`viewer-stage${dragging ? " dragging" : ""}`}
              onPointerDown={onPointerDown}
              onWheel={(e) =>
                setZoom((z) => clamp(z - e.deltaY * 0.002, MIN_ZOOM, MAX_ZOOM))
              }
              onClick={(e) => {
                if (e.target === e.currentTarget && !drag.current.moved)
                  setOpen(false);
              }}
            >
              <div
                className="viewer-card"
                style={{
                  transform: `scale(${zoom}) rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                  transition: dragging ? "none" : undefined,
                }}
                onClickCapture={(e) => {
                  if (drag.current.moved) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                <div className="card-face card-front">
                  <img src={src} alt={alt} draggable={false} />
                </div>

                <div className="card-face card-back">
                  <div>
                    <h3>Moh Imron Rofiki</h3>
                    <p className="card-role">Web Developer</p>
                  </div>
                  <dl className="card-facts">
                    <div>
                      <dt>Lokasi</dt>
                      <dd>Pamekasan, Indonesia</dd>
                    </div>
                    <div>
                      <dt>Fokus</dt>
                      <dd>Administrasi perkantoran dan pengembangan web</dd>
                    </div>
                    <div>
                      <dt>Status</dt>
                      <dd>Terbuka untuk posisi administrasi dan IT</dd>
                    </div>
                  </dl>
                  <div className="card-links">
                    <a href={`mailto:${contact.email}`} aria-label="Email">
                      <FaEnvelope />
                    </a>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={contact.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="viewer-bar">
              <div className="viewer-tools">
                <button
                  className="viewer-btn"
                  onClick={() => changeZoom(-0.5)}
                  disabled={zoom <= MIN_ZOOM}
                  aria-label="Perkecil"
                >
                  <FaMinus />
                </button>
                <span className="viewer-zoom">{Math.round(zoom * 100)}%</span>
                <button
                  className="viewer-btn"
                  onClick={() => changeZoom(0.5)}
                  disabled={zoom >= MAX_ZOOM}
                  aria-label="Perbesar"
                >
                  <FaPlus />
                </button>
                <button className="viewer-btn" onClick={flip}>
                  <FaSyncAlt /> Balik
                </button>
              </div>
              <button
                className="viewer-btn"
                onClick={() => setOpen(false)}
                aria-label="Tutup"
              >
                <FaTimes />
              </button>
            </div>

            <p className="viewer-hint">
              Geser untuk memutar. Pakai + dan − untuk zoom.
            </p>
          </div>,
          document.body,
        )}
    </>
  );
}

export default PhotoViewer;
