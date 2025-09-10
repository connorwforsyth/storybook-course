import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva(
  "text-brand-white inline-flex cursor-pointer items-center gap-1.5 rounded border font-semibold shadow-sm transition-colors select-none focus-visible:outline focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-600 hover:bg-primary-500 active:bg-primary-400 border-transparent",
        secondary:
          "text-brand-black border-slate-300 bg-slate-50 hover:bg-slate-50 active:bg-slate-100",
        destructive:
          "bg-danger-600 hover:bg-danger-500 active:bg-danger-400 border-transparent",
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-3 py-1.5 text-base",
        large: "px-4 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export type ButtonVariants = VariantProps<typeof variants>;
