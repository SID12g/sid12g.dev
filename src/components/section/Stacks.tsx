import Separator from "@/components/Separator";
import { stacks } from "@/data/stacks";

export default function Stacks() {
  return (
    <div>
      <Separator title="STACKS" />
      <div className="flex flex-row flex-wrap gap-4">
        {stacks.map((stack) => (
          <StackItem key={stack} stack={stack} />
        ))}
      </div>
    </div>
  );
}

function StackItem({ stack }: { stack: string }) {
  return (
    <div className="flex flex-row items-center gap-2 py-2 px-4 bg-muted-15 border-faint border rounded-full w-fit hover:border-accent hover:bg-white-10 transition-colors duration-150 cursor-default">
      <div className="bg-accent w-[8px] h-[8px] rounded-full" />
      <span className="font-jetbrains-mono text-xs sm:text-sm text-muted">
        {stack}
      </span>
    </div>
  );
}
