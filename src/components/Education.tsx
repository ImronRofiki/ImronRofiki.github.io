import Section from "./Section";
import { education } from "../data/education";

function Education() {
  return (
    <Section id="education" title="Pendidikan">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.school}>
            <span className="period">{e.period}</span>
            <h3>{e.school}</h3>
            <p>{e.degree}</p>
            {e.note && <p className="muted">{e.note}</p>}
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Education;
