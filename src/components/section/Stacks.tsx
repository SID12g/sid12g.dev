import Separator from "@/components/Separator";
import { stacks } from "@/data/stacks";

export default function Stacks() {
  return (
    <div>
      <Separator title="STACKS" />
      <div className="flex flex-row flex-wrap gap-3">
        {stacks.map((stack) => (
          <StackItem key={stack} stack={stack} />
        ))}
      </div>
    </div>
  );
}

function StackItem({ stack }: { stack: string }) {
  return (
    <div className="flex flex-row items-center gap-2 py-[6px] px-3 bg-muted-15 border-faint border rounded-full w-fit hover:border-accent hover:bg-hover transition-colors duration-150 cursor-default">
      <div className="bg-accent w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-full" />
      <span className="font-jetbrains-mono text-[10px] sm:text-xs text-muted">
        {stack}
      </span>
    </div>
  );
}
