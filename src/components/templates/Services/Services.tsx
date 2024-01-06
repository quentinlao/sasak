import { useSpring, animated } from "@react-spring/web";
import { Card } from "../../common/Card/Card";
import { Section } from "../../common/Section/Section";
import { Title } from "../../common/Title/Title";
import { useSafeScroll } from "../Header/hooks/useSafeScroll";
import { data } from "../../../app/utils/data";
import Image from "next/image";

type ServicesProps = {
  services: typeof data.services;
};
export const Services = ({ services }: ServicesProps) => {
  const { title, subtitle, description, cards } = services;

  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useSafeScroll(({ xy: [, y] }) => {
    set({ y });
  });

  const trans1 = (y: number) => `translate3d(0, ${y / 9}px, 0)`;
  const trans2 = (y: number) => `translate3d(0, ${y / 14}px, 0)`;

  return (
    <div className='bg-white w-full md:h-[500px]'>
      <Section id='services'>
        <div className='flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:space-x-10'>
          <div className='mt-20'>
            <Title title={title} subTitle={subtitle} description={description} />
          </div>

          {cards.map((card, index) => (
            <>
              <Card className='block md:hidden' color={card.bgColor}>
                <div className='p-32'>
                  <div className='w-64 h-64 bg-white rounded-full flex items-center justify-center mb-8 '>
                    <Image width={20} height={20} src={card.image} alt='Logo' />
                  </div>
                  <p className='text-20 font-nunitoBold mb-4'>{card.title}</p>
                  <p className='text-16 font-nunitoRegular mb-[10px]'>{card.description}</p>
                  <ul className='text-18 font-nunitoBold' style={{ color: card.color }}>
                    {card.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </Card>
              <animated.div
                key={index}
                className='hidden md:block mt-[16px]'
                style={{
                  transform: y.to((value) => `${index % 2 === 0 ? trans1(value) : trans2(value)}`),
                }}
              >
                <Card color={card.bgColor}>
                  <div className='p-32'>
                    <div className='w-64 h-64 bg-white rounded-full flex items-center justify-center mb-8 '>
                      <Image width={20} height={20} src={card.image} alt='Logo' />
                    </div>
                    <p className='text-20 font-nunitoBold mb-4'>{card.title}</p>
                    <p className='text-16 font-nunitoRegular mb-[10px]'>{card.description}</p>
                    <ul className='text-18 font-nunitoBold' style={{ color: card.color }}>
                      {card.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </animated.div>
            </>
          ))}
        </div>
      </Section>
    </div>
  );
};
