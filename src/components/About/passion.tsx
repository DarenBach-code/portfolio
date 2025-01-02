import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

export default async function AnimatedGradientTextDemo() {
  return (
    <div className="dark">
      <AnimatedGradientText>
      🖥️  <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#f9957f] via-[#f2f5d0] to-[#f9957f] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Lifelong Learner | Community leader
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
    </div>
  );
}