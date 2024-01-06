import { FaInstagram, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { Section } from "../../common/Section/Section";
import { Title } from "../../common/Title/Title";
import { data } from "../../../app/utils/data";
import Image from "next/image";

// Function to shuffle an array
function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

type HobbiesProps = {
  hobbies: typeof data.hobbies;
};

export const Hobbies = ({ hobbies }: HobbiesProps) => {
  const { title, subtitle, backgroundImages, description } = hobbies;

  return (
    <div className='h-[450px]'>
      <div className='absolute w-full z-0 grid grid-cols-3 gap-9 '>
        {shuffleArray(backgroundImages).map((image: string, index: number) => (
          <div key={index} className='relative h-[200px]' style={{ marginTop: index % 2 !== 0 ? "10px" : "0px" }}>
            <Image className='rounded-md object-cover' src={image} alt={`Background ${index}`} layout='fill' />
          </div>
        ))}
        <div className='absolute inset-0 bg-black opacity-70' />
      </div>
      <Section id='hobbies'>
        <Title title={title} subTitle={subtitle} color='text-white' description={description} centered />
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 justify-center gap-8 mt-10'>
          <a
            className='flex items-center gap-4'
            href='https://www.instagram.com/_sasak/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram size={32} color='white' />
            <span className='ml-2 font-nunitoRegular text-white'>_sasak</span>
          </a>
          <a
            className='flex items-center gap-4'
            href='https://github.com/quentinlao'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={32} color='white' />
            <span className='ml-2 font-nunitoRegular text-white'>quentinlao</span>
          </a>
          <a
            className='flex items-center gap-4'
            href='https://www.linkedin.com/in/quentinlao/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={32} color='white' />
            <span className='ml-2 font-nunitoRegular text-white'>quentinlao</span>
          </a>
          <a
            className='flex items-center gap-4'
            href='https://medium.com/@saasak'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaMedium size={32} color='white' />
            <span className='ml-2 font-nunitoRegular text-white'>@saasak</span>
          </a>
        </div>
      </Section>
    </div>
  );
};
