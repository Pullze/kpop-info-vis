import Article from "@/components/article.tsx";
import {getHTMLStringFromMarkDown} from "@/lib/article.ts";

const content  = await getHTMLStringFromMarkDown('kpop');

function App() {
  return (
    <Article content={content} />
  )
}

export default App
