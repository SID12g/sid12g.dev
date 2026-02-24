import Section from "./section";

const skills = [
  "Next.js",
  "React",
  "React Native",
  "Nest.js",
  "Spring Boot",
  "Swift",
];

export default function Skills() {
  return (
    <Section title="Skills">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-full whitespace-nowrap transition hover:bg-blue-100 dark:hover:bg-blue-900/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}
