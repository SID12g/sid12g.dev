export default function Separator({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center gap-4 mb-6">
      <p className="text-sm text-muted font-jetbrains-mono">{title}</p>
      <div className="w-full h-[1px] bg-white-10" />
    </div>
  );
}
