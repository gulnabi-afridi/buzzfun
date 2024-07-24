import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  style?: string;
}

const ComponentWrapper: React.FC<Props> = ({
  children,
  style = "h-full",
}: Props) => {
  return (
    <div className={`w-full ${style}`}>
      <div className="w-full h-full max-w-[1450px] m-auto lg:px-8 px-4">
        {children}
      </div>
    </div>
  );
};

export default ComponentWrapper;
