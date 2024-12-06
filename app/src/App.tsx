import {ThemeProvider} from "@/components/theme-provider.tsx";

import Kpop from "@/docs/kpop.mdx";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Kpop/>
    </ThemeProvider>
  )
}

export default App
