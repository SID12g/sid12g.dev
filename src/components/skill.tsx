import Section from "./section";

const skills = [
  "Next.js",
  "React",
  "React Native",
  "Nest.js",
  "Spring Boot",
  "Swift",
];

export default function Skill() {
  return (
    <Section title="Skill">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 text-sm bg-blue-500 text-white rounded-full whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
