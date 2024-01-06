import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

export const Card = ({ className, children, color = "#F1FFF3" }: CardProps) => {
  return (
    <div className={`${className} rounded-lg w-[288px] h-[320px]`} style={{ background: color }}>
      {children}
    </div>
  );
};
