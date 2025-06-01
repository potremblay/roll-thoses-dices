import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  color: string;
};

export const Hexagon = ({ children, color, className, ...rest }: Props) => {
  return (
    <div className="relative aspect-square">
      <div className={"relative z-1 " + className} {...rest}>
        {children}
      </div>
      <svg
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ fill: color ?? "currentColor" }}
        height="800px"
        width="800px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path
          d="M485.291,129.408l-224-128c-3.285-1.877-7.296-1.877-10.581,0l-224,128c-3.328,1.899-5.376,5.44-5.376,9.259v234.667
              c0,3.819,2.048,7.36,5.376,9.259l224,128c1.643,0.939,3.456,1.408,5.291,1.408s3.648-0.469,5.291-1.408l224-128
              c3.328-1.899,5.376-5.44,5.376-9.259V138.667C490.667,134.848,488.619,131.307,485.291,129.408z"
        />
      </svg>
    </div>
  );
};
