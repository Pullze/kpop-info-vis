import {cn} from "@/lib/utils";
import React from "react";

export default React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function Article({ className, ...props }, ref) {
  return (
    <article
      ref={ref}
      className={cn(
        "prose dark:prose-invert prose-sm mx-auto my-8 px-4 md:my-16 md:px-8 md:prose-base lg:prose-lg xl:max-w-screen-lg",
        className,
      )}
      {...props}
    />
  );
});
