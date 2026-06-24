import Separator from "@/components/Separator";

export default function Stacks() {
  return (
    <div>
      <Separator title="STACKS" />
      <div className="flex flex-row flex-wrap gap-4">
        <StackItem stack="Next.js" />
        <StackItem stack="React" />
        <StackItem stack="React Native" />
        <StackItem stack="Nest.js" />
        <StackItem stack="Spring Boot" />
      </div>
    </div>
  );
}

function StackItem({ stack }: { stack: string }) {
  return (
    <div className="flex flex-row items-center gap-2 py-2 px-4 bg-muted-15 border-faint border rounded-full w-fit">
      <div className="bg-accent w-[8px] h-[8px] rounded-full" />
      <p className="font-jetbrains-mono text-sm text-muted">{stack}</p>
    </div>
  );
}
