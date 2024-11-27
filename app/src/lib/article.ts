import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";

export async function getHTMLStringFromMarkDown(
  url: string
): Promise<string> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
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