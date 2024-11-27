import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";

export async function getHTMLStringFromMarkDown(
  name: string,
  dir?: string
): Promise<string> {
  try {
    const baseDir = dir ?? `${import.meta.env.BASE_URL}/docs`; // Default to "/docs" under public
    const url = `${baseDir}/${name}.md`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${name}: ${response.statusText}`);
    }

    const markdown = await response.text();
    return micromark(markdown, {
      extensions: [gfm()],
      htmlExtensions: [gfmHtml()],
    });
  } catch (e) {
    console.warn(e);
    return `<p>Error occurred when pulling ${name}</p>`;
  }
}