import { useSpring, animated } from "@react-spring/web";
import { useSafeScroll } from "../hooks/useSafeScroll";
import Image from "next/image";
import { data } from "../../../../app/utils/data";

type HeaderImageProps = {
  headerImage: typeof data.header.headerImage;
};
export const HeaderImage = ({ headerImage }: HeaderImageProps) => {
  const { src } = headerImage;
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useSafeScroll(({ xy: [, y] }) => {
    set({ y });
  });

  const trans1 = (y: number) => `translate3d(0, ${y / 6}px, 0)`;
  const trans2 = (y: number) => `translate3d(0, ${-y / 8}px, 0)`;
  const trans3 = (y: number) => `translate3d(${-y / 8}px, 0, 0)`;

  const rotate1 = (y: number) => {
    return `rotate(-${y / 6}deg)`;
  };
  return (
    <div className='w-[360px] h-[530px]'>
      <animated.div
        style={{
          transform: y.to((value) => `${trans1(value)} rotate(-30deg) ${rotate1(value)}`),
        }}
        className='mt-[100px] ml-[-50px] z-2 absolute w-72 h-72 flex-shrink-0 rounded-lg bg-dark-green'
      ></animated.div>
      <animated.div
        style={{ transform: y.to((value) => `${trans1(value)} ${trans3(value)}`) }}
        className='mt-[50px] ml-[350px] z-2 absolute w-16 h-16 flex-shrink-0 rounded-full bg-dark-green'
      ></animated.div>
      <animated.div
        style={{
          transform: y.to((value) => `${trans1(value)} rotate(34deg) ${rotate1(value)}`),
        }}
        className='mt-[200px] ml-[320px] z-2 absolute w-48 h-48 flex-shrink-0 rounded-lg bg-primary'
      ></animated.div>
      <animated.div
        style={{
          transform: y.to(trans2),
        }}
        className='mt-[380px] ml-[330px] z-2 absolute w-24 h-24 flex-shrink-0 rounded-full bg-dark-green'
      ></animated.div>
      <animated.div
        style={{
          transform: y.to(trans2),
        }}
        className='mt-[450px] ml-[-30px] z-2 absolute w-16 h-16 flex-shrink-0 rounded-full bg-primary'
      ></animated.div>
      <Image
        className='w-[340px] h-[510px] object-cover rounded-[6.25rem]'
        src={src}
        alt='Hero Image'
        placeholder='blur'
        blurDataURL={src}
        width={340}
        height={510}
      />
    </div>
  );
};
