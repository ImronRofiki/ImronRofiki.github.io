import { useState } from "react";
import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowRight,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import Section from "./Section";
import { contact } from "../data/contact";

type Social = { label: string; href: string; icon: IconType };

const socials: Social[] = [
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedin },
  { label: "GitHub", href: contact.github, icon: FaGithub },
  { label: "Instagram", href: contact.instagram, icon: FaInstagram },
];

// "https://www.github.com/username/" -> "github.com/username"
const shortUrl = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <Section id="contact" title="Kontak">
      <div className="contact-grid">
        <div className="contact-main">
          <p className="contact-status">
            <span className="contact-dot" aria-hidden="true" />
            Terbuka untuk posisi IT dan administrasi
          </p>
          <p className="lead">
            Tertarik bekerja sama atau ingin ngobrol? Kirim email, saya balas
            secepatnya.
          </p>

          <a className="contact-mail" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>

          <div className="contact-actions">
            <a className="btn primary" href={`mailto:${contact.email}`}>
              <FaEnvelope /> Kirim Email
            </a>
            <button type="button" className="btn" onClick={copyEmail}>
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Tersalin!" : "Salin Email"}
            </button>
          </div>
        </div>

        <ul className="contact-links">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                className="contact-link"
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">
                  <Icon />
                </span>
                <span className="contact-text">
                  <strong>{label}</strong>
                  <span className="muted">{shortUrl(href)}</span>
                </span>
                <FaArrowRight className="contact-arrow" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default Contact;
