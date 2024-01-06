import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";
import { data } from "../../../../app/utils/data";
import Image from "next/image";

type LogoCarouselProps = {
  logos: typeof data.header.logos;
};
export const LogoCarousel = ({ logos }: LogoCarouselProps) => {
  const [index, setIndex] = useState(0);
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1000 } });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000);
    return () => clearTimeout(timer);
  }, [index, logos.length]);

  return (
    <>
      <div className='hidden md:flex justify-items-center	space-x-40'>
        {logos.map((item, index) => (
          <Image src={item.url} alt={item.id} width={100} height={80} className='object-contain filter grayscale' />
        ))}
      </div>

      <div className='flex md:hidden justify-items-center items-center space-x-40 h-[100px]'>
        <animated.div style={props}>
          <Image
            src={logos[index].url}
            alt={logos[index].id}
            width={100}
            height={80}
            className='object-contain filter grayscale'
          />
        </animated.div>
        <animated.div style={props}>
          <Image
            src={logos[(index + 1) % logos.length].url}
            alt={logos[index].id}
            width={100}
            height={80}
            className='object-contain filter grayscale'
          />
        </animated.div>
        <animated.div style={props}>
          <Image
            src={logos[(index + 2) % logos.length].url}
            alt={logos[index].id}
            width={100}
            height={80}
            className='object-contain filter grayscale'
          />
        </animated.div>
      </div>
    </>
  );
};
