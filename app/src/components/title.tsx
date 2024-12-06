import {ModeToggle} from "@/components/mode-toggle.tsx";
import {ComponentProps} from "react";

type TitleProps = {
  title: string;
  authors: string[];
  date: string;
}
export default function Title(props: TitleProps & ComponentProps<'div'>) {
  const { title, authors, date, className, ...rest } = props;
  return (
    <div className={className} {...rest}>
      <ModeToggle/>
      <h1
        className="dark:text-neutral-50 text-neutral-950 scroll-m-20 text-5xl md:text-6xl font-bold leading-none lg:text-7xl">
        {title}
      </h1>
      <p className={"uppercase text-base font-semibold"}>By {authors.map((v, i) => (
        v + (i ===  authors.length - 1 ? "" : ", ")
      ))} <span className="ml-8 font-normal">{date}</span>
      </p>
    </div>
  )
}