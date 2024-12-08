import {ComponentPropsWithoutRef, useCallback, useEffect, useMemo, useRef, useState} from "react";
import {cn} from "@/lib/utils.ts";
import embed from "vega-embed";

type ChartProps = {
  spec: string;
} & ComponentPropsWithoutRef<'div'>;

export default function Chart(props: ChartProps) {
  const {spec, className, ...rest} = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const parsedJSON = useMemo(() => JSON.parse(spec), [spec]);
  const [width, setWidth] = useState<number>(0);
  
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

    embed(divElement, parsedJSON, {actions: false, width: width / 2, height: 400}).then((res) => {
      cleanUp = res.view.finalize;
    });

    return cleanUp;
  }, [parsedJSON, width]);

  return (
    <div className={cn("w-full not-prose mt-16", className)} {...rest} ref={ref} />
  )
}