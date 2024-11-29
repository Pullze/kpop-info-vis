import {ThemeProvider} from "@/components/theme-provider.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";

import Kpop from "@/docs/kpop.mdx";
import Article from "@/components/article.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className={"w-full h-80 bg-neutral-900"}/>
      <Article className={"py-8"}>
        <ModeToggle/>
        <h1
          className="not-prose dark:text-neutral-50 text-neutral-950 scroll-m-20 text-4xl md:text-6xl font-bold leading-normal lg:text-7xl">
          K-pop Invasion: From a Local Trend to a Global Phenomenon
        </h1>
        <p className={"uppercase text-base font-semibold"}>By who, and who <span className="ml-8 font-normal">December 1, 2024</span>
        </p>
      </Article>
      <div className={"w-full content-center overflow-clip"}>
        <img
          src={"https://0.soompi.io/wp-content/uploads/2022/07/21100645/NewJeans-1.jpeg"}
          className={"not-prose object-top object-cover h-[600px] w-full"}/>
      </div>
      <Article>
        <Kpop/>
      </Article>
      <div className={"w-full h-80 bg-neutral-900 content-center"}>
        <h4 className={"text-center text-neutral-400 scroll-m-20 font-medium tracking-tight"}>SI-649 Final Project</h4>
      </div>
    </ThemeProvider>
  )
}

export default App
