import {ComponentPropsWithoutRef, useCallback, useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils.ts";
import embed from "vega-embed";
import {useTheme} from "@/components/theme-provider.tsx";

type ChartProps = {
  spec: object;
} & ComponentPropsWithoutRef<'div'>;

export default function Chart(props: ChartProps) {
  const {spec, className, ...rest} = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const parsedJSON = spec;
  const [width, setWidth] = useState<number>(0);
  const {theme} = useTheme();

  const handleResize = useCallback(() => {
    setWidth(ref.current?.offsetWidth ?? 200);
  }, [setWidth]);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    const divElement = ref.current as HTMLDivElement;
    let cleanUp;

    embed(divElement, parsedJSON, {
      actions: false,
      width: width - 200,
      height: 400,
      theme: theme === 'dark' ? 'carbong90' : "googlecharts",
      config: {background: theme === 'dark' ? '#0a0a0a' : "white"}
    }).then((res) => {
      cleanUp = res.view.finalize;
    });

    return cleanUp;
  }, [parsedJSON, theme, width]);

  return (
    <div className={cn("w-full not-prose mt-16", className)} {...rest} ref={ref}/>
  )
}