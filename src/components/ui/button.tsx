import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-navy text-white shadow-soft hover:bg-navy-700 hover:shadow-card hover:-translate-y-0.5",
        sage: "bg-sage-gradient text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5",
        outline:
          "border border-navy/20 bg-transparent text-navy hover:border-sage-500 hover:text-sage-700 dark:text-white dark:border-white/20 dark:hover:text-sage-400",
        ghost:
          "bg-transparent text-navy hover:bg-sage-50 dark:text-white dark:hover:bg-white/10",
        white:
          "bg-white text-navy shadow-soft hover:bg-offwhite hover:-translate-y-0.5",
        link: "text-sage-700 underline-offset-4 hover:underline dark:text-sage-400",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
