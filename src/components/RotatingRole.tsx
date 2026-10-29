import { useEffect, useState } from "react";

const roles = ["Web Developer", "Staf Administrasi", "Operator Komputer"];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <p className="role">
      <span key={index} className="role-text">
        {roles[index]}
      </span>
    </p>
  );
}

export default RotatingRole;
