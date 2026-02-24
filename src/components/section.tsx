export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
        {title}
      </h2>
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 mb-5" />
      {children}
    </section>
  );
}
