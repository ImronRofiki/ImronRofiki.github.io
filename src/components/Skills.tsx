import Section from "./Section";
import { skills } from "../data/skills";

function Skills() {
  return (
    <Section id="skills" title="Skill">
      <div className="skills">
        {skills.map((s, i) => (
          <article className="skill-card" key={s.group}>
            <header className="skill-head">
              <span className="skill-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{s.group}</h3>
              <span className="skill-count">{s.items.length}</span>
            </header>
            <ul className="chips">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
