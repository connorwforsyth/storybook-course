import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva(
  "dark:text-brand-white flex max-w-xs flex-col gap-4 rounded border-1 p-4 shadow-md",
  {
    variants: {
      variant: {
        default:
          "border-slate-500 bg-slate-200 text-slate-900 dark:border-slate-900 dark:bg-slate-900 dark:text-slate-50",
        primary:
          "bg-primary-200 text-primary-800 border-primary-500 dark:border-primary-900 dark:bg-primary-900 dark:text-primary-50",
        information:
          "bg-information-200 border-information-500 dark:border-information-900 dark:bg-information-900 dark:text-information-50",
        success:
          "bg-success-200 border-success-500 dark:border-success-900 dark:bg-success-900 dark:text-success-50",
        danger:
          "bg-danger-200 border-danger-500 dark:border-danger-900 dark:bg-danger-900 dark:text-danger-50",
        warning:
          "bg-warning-200 border-warning-500 dark:border-warning-900 dark:bg-warning-900 dark:text-warning-50",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export type CalloutVariants = VariantProps<typeof variants>;
