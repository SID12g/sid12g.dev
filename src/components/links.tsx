import Section from "./section";

const links = [
  { href: "https://blog.sid12g.dev", emoji: "📝", label: "blog.sid12g.dev" },
  {
    href: "https://www.linkedin.com/in/sid12g",
    emoji: "💼",
    label: "linkedin.com/in/sid12g",
  },
  {
    href: "https://www.rocketpunch.com/@sid12g",
    emoji: "🚀",
    label: "rocketpunch.com/@sid12g",
  },
  {
    href: "https://sid12g.dev/portfolio.pdf",
    emoji: "📄",
    label: "portfolio.pdf",
  },
];

export default function Links() {
  return (
    <Section title="Link">
      <div className="flex flex-col gap-2.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
          >
            <span className="text-base shrink-0">{link.emoji}</span>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
