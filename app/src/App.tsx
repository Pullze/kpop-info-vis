import Article from "@/components/article.tsx";
import {getHTMLStringFromMarkDown} from "@/lib/article.ts";
import {useEffect, useState} from "react";
import {ARTICLE_URL} from "@/lib/constant.ts";

function App() {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    getHTMLStringFromMarkDown(ARTICLE_URL)
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className={"w-full h-80 bg-neutral-900"} />
      <div
        className={"prose dark:prose-invert prose-sm mx-auto my-8 px-4 md:my-16 md:px-8 md:prose-base lg:prose-lg xl:max-w-screen-lg"}>
        <h1 className="not-prose text-neutral-950 scroll-m-20 text-4xl md:text-6xl font-bold leading-loose lg:text-7xl">
          K-pop Invasion: From a Local Trend to a Global Phenomenon
        </h1>
        <p className={"uppercase text-base font-semibold"}>By who, and who <span className="ml-8 font-normal">December 1, 2024</span></p>
      </div>
      <Article content={htmlContent}/>
      <div className={"w-full h-80 bg-neutral-900 content-center"}>
        <h4 className={"text-center text-neutral-400 scroll-m-20 font-medium tracking-tight"}>SI-649 Final Project</h4>
      </div>
    </>
  )
}

export default App
