import { CardTools } from "@/components/CardTools";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import BlurFade from "@/components/ui/blur-fade";
import BlurIn from "@/components/ui/blur-in";
import { tools } from "@/lib/data/tools";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import React from "react";

function Home() {
  return (
    <>
      <div className="z-10 flex mt-12 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <a href="https://shirookami.my.id">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>Your lovely dev 💖</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </a>
        </div>
      </div>
      <BlurIn
        word="Tools 🛠️"
        className="text-4xl md:text-5xl mt-5 text-center font-bold text-black dark:text-white"
      />

      <div className="flex items-center justify-center mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-5">
          {tools.map((tool, key) => (
            <BlurFade key={key} delay={0.25 + key * 0.05} inView>
              <CardTools
                title={tool.title}
                link={tool.link}
                status={tool.status}
                description={tool.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
