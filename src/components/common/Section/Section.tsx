"use client";
import classNames from "classnames";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
};

export const Section = ({ children, id }: SectionProps) => {
  return (
    <div
      id={id}
      className={classNames(
        "relative w-4/5 max-w-screen-xl flex flex-col content-between items-stretch mx-auto pt-16 pb-16"
      )}
    >
      {children}
    </div>
  );
};
