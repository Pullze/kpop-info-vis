import {ComponentPropsWithoutRef, forwardRef} from "react";
import {cn} from "@/lib/utils.ts";

const Header = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(({children, className, ...props}, ref) => (
  <div {...props} className={cn("w-full h-96 bg-neutral-900 content-center", className)} ref={ref}>
    {children}
  </div>
));

Header.displayName = 'Header';

export default Header;