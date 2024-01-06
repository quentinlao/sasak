import { data } from "../../../../app/utils/data";

type HeaderDescriptionProps = {
  descriptions: typeof data.header.headerDescription;
};

export const HeaderDescription = ({ descriptions }: HeaderDescriptionProps) => {
  return (
    <div className='text-right space-y-10'>
      {descriptions.map(({ title, description }) => (
        <div key={title}>
          <p className='text-36 font-nunitoBold'>{title}</p>
          <p className='text-24 font-nunitoRegular'>{description}</p>
        </div>
      ))}
    </div>
  );
};
