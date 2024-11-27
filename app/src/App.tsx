import Article from "@/components/article.tsx";
import {getHTMLStringFromMarkDown} from "@/lib/article.ts";
import {useEffect, useState} from "react";

function App() {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    getHTMLStringFromMarkDown("kpop")
      .then((html) => setHtmlContent(html))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Article content={htmlContent} />
  )
}

export default App
