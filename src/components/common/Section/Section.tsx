"use client";
import classNames from "classnames";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  id?: string;
};

export const Section = ({ className, children, id }: SectionProps) => {
  return (
    <div
      id={id}
      className={classNames(
        className,
        "relative w-4/5 max-w-screen-xl flex flex-col content-between items-stretch mx-auto pt-16 pb-16"
      )}
    >
      {children}
    </div>
  );
};
