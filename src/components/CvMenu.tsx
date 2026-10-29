import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import { cvList } from "../data/cv";

function CvMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="cv-menu" ref={ref}>
      <button
        className="btn primary"
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <FaDownload /> Unduh CV
        <FaChevronDown className={`cv-chevron${open ? " up" : ""}`} />
      </button>

      {open && (
        <ul className="cv-list">
          {cvList.map((cv) => (
            <li key={cv.file}>
              <a
                href={`${import.meta.env.BASE_URL}${cv.file}`}
                download={cv.filename}
                onClick={() => setOpen(false)}
              >
                <strong>{cv.label}</strong>
                <span className="muted">{cv.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CvMenu;
