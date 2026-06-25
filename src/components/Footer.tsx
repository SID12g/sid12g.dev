import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-14 mb-3">
      <p className="text-base text-primary font-jetbrains-mono">
        © {year}{" "}
        <Link
          href="/"
          className="hover:text-accent transition-colors duration-150"
        >
          sid12g
        </Link>{" "}
        All rights reserved.
      </p>
    </footer>
  );
}
