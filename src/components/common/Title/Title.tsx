import classNames from "classnames";

type TitleProps = {
  centered?: boolean;
  className?: string;
  color?: string;
  description?: string;
  subTitle: string;
  title: string;
};

/**
 * Title component
 * @param {boolean} centered - Centered title
 * @param {string} className - Additional class name
 * @param {string} color - Color of title
 * @param {string} description - Description of title
 * @param {string} subTitle - Sub title of title
 * @param {string} title - Title
 * @returns {React.ReactElement}
 */
export const Title = ({
  centered = false,
  className,
  color = "text-default",
  description,
  subTitle,
  title,
}: TitleProps) => {
  return (
    <div className={classNames(className, `${centered ? "text-center" : ""}`)}>
      <p className='text-16 font-nunitoRegular uppercase text-primary'>{subTitle}</p>
      <p className={`text-32 font-nunitoBold ${color}`}>{title}</p>
      <p className={`text-18 font-nunitoRegular ${color}`}>{description}</p>
    </div>
  );
};
