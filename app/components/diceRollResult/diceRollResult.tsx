import React from "react";
import { Hexagon } from "../hexagon/hexagon";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const DiceRollResult = ({ children, className, ...rest }: Props) => {
  return (
    <div className="inline-block aspect-square">
      <Hexagon color="var(--color-primary-mosaic)" className="w-[3em] p-1">
        <Hexagon
          color="var(--color-main-bg)"
          className="flex justify-center items-center w-full h-full"
        >
          {children}
        </Hexagon>
      </Hexagon>
    </div>
  );
};
