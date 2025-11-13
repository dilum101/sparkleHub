import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center  font-medium transition-colors focus:outline-none focus:ring-none disabled:opacity-50 disabled:cursor-not-allowed ",
  {
    variants: {
      variant: {
        primary: "bg-sparkleBlue text-white hover:bg-sparkleDark ",
        outline:
          "border-2 border-sparkleBlue  hover:text-white hover:bg-sparkleBlue ",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 ",
      },
      size: {
        sm: "px-2 py-1 text-sx md:px-3 md:py-1 md:text-sm ",
        md: "px-3 py-2 text-sm md:px-4 md:py-3 md:text-base",
        lg: "px-4 py-2 text:md md:px-8 md:py-4 md:text-lg",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        lg: "rounded-2xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  rounded,
  children,
  disabled,
  loading,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded }), className)}
      disabled={disabled || loading}
      {...props}
    >
      <span className="flex items-center gap-2">
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {children}
      </span>
    </button>
  );
};

export default Button;
