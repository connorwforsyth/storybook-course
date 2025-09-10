import type { PropsWithChildren } from "react";
import { variants, type CalloutVariants } from "./callout-variants";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export type CalloutProps = PropsWithChildren<CalloutVariants> & {
  title: string;
};

export const Callout = ({ children, title, variant }: CalloutProps) => {
  return (
    <div className={clsx(twMerge(variants({ variant })))}>
      <div>
        <p className="font-semibold">{title}</p>
      </div>
      {children}
    </div>
  );
};
