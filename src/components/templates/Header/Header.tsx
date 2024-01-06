import { data } from "../../../app/utils/data";
import { Section } from "../../common/Section/Section";
import { HeaderDescription } from "./HeaderDescription/HeaderDescription";
import { HeaderImage } from "./HeaderImage/HeaderImage";
import { HeaderLeft } from "./HeaderLeft/HeaderLeft";
import { LogoCarousel } from "./LogoCarousel/LogoCarousel";

type HeaderProps = {
  header: typeof data.header;
};

export const Header = ({ header }: HeaderProps) => {
  const { headerLeft, headerImage, headerDescription, logos } = header;
  return (
    <div className='relative'>
      <svg
        className='absolute  h-full top-0 left-0 w-full  z-0'
        viewBox='0 0'
        xmlns='http://www.w3.org/2000/svg'
        preserveAspectRatio='none'
      >
        <rect className='bg' id='bg' x='0' y='0' fill='#ffffff'></rect>
        <defs>
          <filter id='f1' x='-200%' y='-200%' width='500%' height='500%'>
            <feGaussianBlur stdDeviation='116'></feGaussianBlur>
          </filter>
        </defs>
        <circle cx='1351.5770662944956' cy='349.7150343665737' r='675.84' fill='#E2F1E3' filter='url(#f1)'></circle>
        <circle cx='873.4364929198144' cy='984.2290062700579' r='675.84' fill='#FFF1E4' filter='url(#f1)'></circle>
        <circle cx='122.22428238772773' cy='725.565898743491' r='675.84' fill='#FFFFFF' filter='url(#f1)'></circle>
        <circle cx='136.09017688963763' cy='-68.81066524708035' r='675.84' fill='#FAFFFB' filter='url(#f1)'></circle>
        <circle cx='895.8719815083246' cy='-301.09927413304234' r='675.84' fill='#FFFFFF' filter='url(#f1)'></circle>
      </svg>
      <Section id='home'>
        <div className='z-2 flex flex-row justify-around space-x-4 items-center mt-[100px]'>
          <div className='w-[480px]'>
            <HeaderLeft headerLeft={headerLeft} />
          </div>
          <div className='w-[360px] h-[530px] hidden md:block'>
            <HeaderImage headerImage={headerImage} />
          </div>
          <div className='w-[140px] hidden md:block'>
            <HeaderDescription descriptions={headerDescription} />
          </div>
        </div>
        <div className='flex flex-row justify-around items-center mt-[18px]'>
          <LogoCarousel logos={logos} />
        </div>
      </Section>
    </div>
  );
};
