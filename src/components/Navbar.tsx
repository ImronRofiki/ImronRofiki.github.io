import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#skills", label: "Skill" },
  { href: "#projects", label: "Proyek" },
  { href: "#education", label: "Pendidikan" },
  { href: "#certificates", label: "Sertifikat" },
  { href: "#contact", label: "Kontak" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className="nav">
      <a href="#top" className="brand">
        MOH IMRON ROFIKI
      </a>

      <div className="nav-right">
        <nav className={open ? "open" : ""}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="theme-btn"
          onClick={toggle}
          aria-label={
            theme === "dark" ? "Ganti ke tema terang" : "Ganti ke tema gelap"
          }
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
