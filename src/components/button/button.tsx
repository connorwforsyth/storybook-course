import { type ComponentProps } from "react";
import { variants, type ButtonVariants } from "./button-variants";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type ButtonProps = ComponentProps<"button"> & ButtonVariants;

export const Button = ({
  variant = "primary",
  size = "medium",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(twMerge(variants({ variant, size, className })))}
    />
  );
};
