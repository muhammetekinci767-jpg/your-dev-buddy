import { Link } from "@tanstack/react-router";
import { forwardRef, ComponentProps } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends ComponentProps<typeof Link> {
  className?: string;
  activeClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, ...props }, ref) => {
    return (
      <Link
        ref={ref as never}
        className={className}
        activeProps={{ className: cn(className, activeClassName) }}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
