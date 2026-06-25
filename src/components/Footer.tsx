export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-14 mb-3">
      <p className="text-base text-primary font-jetbrains-mono">
        © {year} sid12g All rights reserved.
      </p>
    </footer>
  );
}
