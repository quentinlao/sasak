import { data } from "../../../app/utils/data";
import { Section } from "../../common/Section/Section";
import { Title } from "../../common/Title/Title";
import Image from "next/image";

type ExperiencesProps = {
  experiences: typeof data.experiences;
};

export const Experiences = ({ experiences }: ExperiencesProps) => {
  const { title, subtitle, enterprise, cta } = experiences;
  return (
    <div className='bg-white w-full relative mb-[50px]'>
      <svg
        className='absolute h-full w-full z-0'
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
      <Section id='experiences'>
        <Title className='mt-32' title={title} subTitle={subtitle} />
        <ul role='list'>
          {enterprise.map((job, index) => (
            <li
              key={index}
              className='mt-5 md:mt-20 flex flex-col md:flex-row items-start md:space-x-20 p-16  hover:bg-white hover:bg-opacity-15  hover:shadow-sm md:hover:backdrop-blur-[18px]  hover:rounded-lg'
            >
              <div className='md:w-[250px]'>
                <p className='text-16 uppercase font-nunitoRegular mb-4'>{job.year}</p>
              </div>

              <div className='md:w-[80%]'>
                <p className='text-20 font-nunitoBold mb-4'>{job.title}</p>
                <p className={`text-18 font-nunitoRegular ${!job.subtitleBis && `mb-10`}`}>{job.subtitle}</p>
                {job.subtitleBis && <p className='text-18 font-nunitoRegular mb-10'>{job.subtitleBis}</p>}
                <p className='text-18 font-nunitoRegular mb-4'>{job.description}</p>
                <div className='space-x-8 space-y-4'>
                  {job.techs.map((tech, techIndex) => (
                    <button
                      key={techIndex}
                      className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='flex space-x-8 text-18 font-nunitoBold mt-10'>
          <p>
            <a href={cta.onClick} target='_blank'>
              {cta.label}
            </a>
          </p>
          <Image src='/img/arrowRight.svg' height={16} width={16} alt='logo icon' />
        </div>
      </Section>
    </div>
  );
};
