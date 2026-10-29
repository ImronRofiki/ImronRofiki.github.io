import { useState } from "react";
import { FaDownload, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Section from "./Section";
import { projects } from "../data/projects";

const PER_PAGE = 2;

const fileUrl = (file: string) => `${import.meta.env.BASE_URL}proyek/${file}`;

function Projects() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = projects.slice(start, start + PER_PAGE);

  const goTo = (n: number) => {
    setPage(n);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="projects" title="Proyek">
      <ul className="projects">
        {visible.map((p, i) => (
          <li key={start + i} className="project">
            {p.image ? (
              <img
                src={fileUrl(p.image)}
                alt={`Tampilan ${p.title}`}
                loading="lazy"
              />
            ) : (
              <div className="project-ph" aria-hidden="true">
                <span className="ph-title">{p.title}</span>
                <span className="ph-tech">
                  {p.tech.slice(0, 3).join(" / ")}
                </span>
              </div>
            )}
            <div className="project-body">
              <span className="project-tag">{p.category}</span>
              <h3>{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <ul className="chips">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {(p.demo || p.repo || p.file) && (
                <div className="project-links">
                  {p.demo && (
                    <a
                      className="btn primary"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                  {p.repo && (
                    <a
                      className="btn"
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {p.file && (
                    <a
                      className="btn primary"
                      href={fileUrl(p.file)}
                      download={p.fileName ?? p.file}
                    >
                      <FaDownload /> Unduh File
                    </a>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className="cert-pager">
          <button
            className="btn"
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
          >
            Sebelumnya
          </button>
          <span className="muted">
            {page} / {totalPages}
          </span>
          <button
            className="btn"
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
          >
            Berikutnya
          </button>
        </div>
      )}
    </Section>
  );
}

export default Projects;
