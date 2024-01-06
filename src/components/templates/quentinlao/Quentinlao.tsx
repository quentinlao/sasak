"use client";
import { animated, useSpring } from "@react-spring/web";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { Tilt } from "react-tilt";
import { data } from "../../../app/utils/data";
import { Section } from "../../common/Section/Section";
import { Title } from "../../common/Title/Title";
import { Header } from "../Header/Header";
import { useSafeScroll } from "../Header/hooks/useSafeScroll";
import { Services } from "../Services/Services";
import { Experiences } from "../Experiences/Experiences";

const Canal = () => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useSafeScroll(({ xy: [, y] }) => {
    set({ y });
  });

  const trans1 = (y: number) => `translate3d(${y / 30}px, 0, 0)`;
  const trans2 = (y: number) => `translate3d(-${y / 50}px, 0, 0)`;

  return (
    <div className='flex justify-start flex-col md:flex-row mt-[50px] md:mt-[180px]'>
      <animated.div
        style={{
          transform: y.to((value) => `${trans1(value)}`),
        }}
        className='z-0 mt-[-80px] hidden md:flex ml-[-120px] absolute w-[100px] h-[100px] flex-shrink-0 rounded-xl bg-white shadow-md items-center justify-center'
      >
        <Image width={70} height={70} src={"/img/samsung.svg"} alt='Logo' />
      </animated.div>
      <animated.div
        style={{
          transform: y.to((value) => `${trans2(value)}`),
        }}
        className='z-20 mt-[-70px] md:ml-[350px] absolute w-[140px] h-[140px] flex-shrink-0 rounded-xl bg-white shadow-md hidden md:flex  items-center justify-center'
      >
        <Image width={100} height={100} src={"/img/tim.svg"} alt='Logo' />
      </animated.div>
      <animated.div
        style={{
          transform: y.to((value) => `${trans1(value)}`),
        }}
        className='hidden md:flex z-20 mt-[300px] ml-[-100px] absolute w-[140px] h-[140px] flex-shrink-0 rounded-xl bg-white shadow-md items-center justify-center'
      >
        <Image width={100} height={100} src={"/img/playstation.svg"} alt='Logo' />
      </animated.div>
      <Image
        className='w-[400px] h-[400px] object-cover rounded-xl shadow-md z-10'
        src='/img/mycanal.jpeg'
        alt='Hero Image'
        placeholder='blur'
        blurDataURL='/img/quentinlao-hero.jpeg'
        width={400}
        height={400}
      />
      <div className='mt-[50px] md:mt-0  md:ml-[100px]'>
        <Title title='Application unififié myCANAL' subTitle='CANAL+ GROUP' />
        <p className='text-17 font-nunitoRegular mt-10'>
          myCANAL est une plateforme de streaming qui permet aux utilisateurs de regarder en direct ou en différé. J’ai
          travaillé sur de nombreux défis techniques pour assurer une expérience utilisateur fluide et intuitive sur
          leur téléphone, tablette, TV, FAI ou ordinateur. J'ai été chargé de retravailler complètement la partie
          Transactional Video On Demand de la plateforme.
        </p>
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10 hover:bg-primary--hover'>
          <a href='https://www.canalplus.com/' target='_blank'>
            myCANAL
          </a>
        </button>
      </div>
    </div>
  );
};

const Ans = () => {
  return (
    <div className='flex flex-col md:flex-row items-center mt-[50px] md:mt-[150px]'>
      <Tilt options={{ max: 10, scale: 1 }}>
        <div className='w-[380px] h-[380px]'>
          <Image
            className='object-cover rounded-xl shadow-md z-10'
            src='/img/ans.jpg'
            alt='Hero Image'
            placeholder='blur'
            blurDataURL='/img/ans.jpg'
            width={380}
            height={380}
          />
        </div>
      </Tilt>
      <div className='md:ml-[100px]'>
        <Title title='IRIS' subTitle='Agence Du Numérique En Santé' />
        <p className='text-17 font-nunitoRegular mt-10'>
          Depuis 2019, le ministère chargé de la Santé porte une stratégie nationale du numérique en santé. Elle a pour
          but d'accélérer la sécurisation des échanges et du partage des données en s'appuyant sur des documents de
          référence et services socles. J'ai travaillé sur le projet IRIS qui une API Annuaire Santé, le nouveau service
          permettant au grand public de consulter les données en accès libre de l'Annuaire Santé au format JSON,
          structurées selon le standard d’interopérabilité FHIR
        </p>
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10 hover:bg-primary--hover'>
          <a href='https://annuaire.sante.fr/web/site-pro' target='_blank'>
            Annuaire santé
          </a>
        </button>
      </div>
    </div>
  );
};

const Thales = () => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useSafeScroll(({ xy: [, y] }) => {
    set({ y });
  });

  const trans1 = (y: number) => `translate3d(${y / 30}px, 0, 0)`;
  const trans2 = (y: number) => `translate3d(-${y / 50}px, 0, 0)`;

  return (
    <div className='flex flex-col md:flex-row mt-[50px] md:mt-[220px]'>
      <animated.div
        style={{
          transform: y.to((value) => `${trans1(value)}`),
        }}
        className='mt-[-50px] hidden md:block md:ml-[20px] absolute'
      >
        <Image
          className='w-[250px] h-[150px] object-cover rounded-xl shadow-md z-10 bg-black'
          width={250}
          height={150}
          src={"/img/rightthales.jpg"}
          alt='Logo'
        />
      </animated.div>
      <animated.div
        style={{
          transform: y.to((value) => `${trans2(value)}`),
        }}
        className='mt-[90px] hidden md:block ml-[20px] absolute'
      >
        <Image
          className='w-[250px] h-[150px] object-cover rounded-xl shadow-md z-10 bg-black'
          width={250}
          height={150}
          src={"/img/leftthales.png"}
          alt='Logo'
        />
      </animated.div>
      <Image
        className='w-[400px] h-[200px] object-cover rounded-xl shadow-md z-10'
        src='/img/thales.jpg'
        alt='Hero Image'
        placeholder='blur'
        blurDataURL='/img/quentinlao-hero.jpeg'
        width={400}
        height={200}
      />
      <div className='mt-[50px] md:mt-0 md:ml-[150px]'>
        <Title title='Logiciel de supervision' subTitle='Thales Group' />
        <p className='text-17 font-nunitoRegular mt-10'>
          Thales, un leader de la haute technologie qui construit un monde plus sûr, plus vert et plus inclusif. Une
          Toutes les activités de Thales y sont représentées, et le Groupe joue un rôle industriel et économique de
          première importance sur le plan local et national. J'ai réalisé une application web pour la simulation d’un
          espace aérien et la surveillance d’une zone cartographique.
        </p>
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10 hover:bg-primary--hover'>
          <a href='https://www.thalesgroup.com/fr' target='_blank'>
            Thales
          </a>
        </button>
      </div>
    </div>
  );
};

const Mymenuplan = () => {
  return (
    <div className='flex flex-col md:flex-row items-center mt-[50px] md:mt-[150px] mb-[50px]'>
      <Tilt options={{ max: 10, scale: 1 }}>
        <div className='w-[380px] h-[300px]'>
          <Image
            className='object-cover rounded-xl shadow-md z-10'
            src='/img/mymenuplan.jpg'
            alt='Hero Image'
            placeholder='blur'
            blurDataURL='/img/mymenuplan.jpg'
            width={400}
            height={300}
          />
        </div>
      </Tilt>
      <div className='md:ml-[100px]'>
        <Title title='MyMenuPlan' subTitle='MyMenuPlan' />
        <p className='text-17 font-nunitoRegular mt-10'>
          MyMenuPlan est une application mobile qui accompagne l’utilisateur en lui planifiant des menus hebdomadaires.
          Tout en lui proposant à la fois la liste des courses de la semaine et les informations nutritionnelles à
          travers une note sur la qualité nutritive de la recette
        </p>
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10 hover:bg-primary--hover'>
          <a href='https://www.youtube.com/watch?v=Efe9KJSVNNI&ab_channel=FlutterChallenger' target='_blank'>
            MyMenuPlan
          </a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className='bg-soft-light w-full '>
      <Section id='projects'>
        <Title className='mt-32' title='Mes travaux délivrés' subTitle='Portfolio' />
        <Canal />
        <Thales />
        <Ans />
        <Mymenuplan />
      </Section>
    </div>
  );
};

// Function to shuffle an array
function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Hobbies = () => {
  const images = [
    "/img/quentinlao-hero.jpeg",
    "/img/quentinlao-hero.jpeg",
    "/img/quentinlao-hero.jpeg",
    "/img/quentinlao-hero.jpeg",
    "/img/quentinlao-hero.jpeg",
    "/img/quentinlao-hero.jpeg",
    // Add more image URLs as needed
  ];

  return (
    <div className='h-[450px]'>
      <div className='absolute w-full z-0 grid grid-cols-3 gap-9 '>
        {shuffleArray(images).map((image: string, index: number) => (
          <div key={index} className='relative h-[200px]' style={{ marginTop: index % 2 !== 0 ? "10px" : "0px" }}>
            <Image className='rounded-md object-cover' src={image} alt={`Background ${index}`} layout='fill' />
          </div>
        ))}
        <div className='absolute inset-0 bg-black opacity-70' />
      </div>
      <Section id='hobbies'>
        <Title
          title='Mes hobbies'
          subTitle='A propos de moi'
          color='text-white'
          description='Je suis un passionné de nouvelles technologies et de développement web. Je fais des photos et découvre de nouveaux endroits. Je suis également un grand fan de mangas et de jeux vidéo.'
          centered
        />
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

export const Quentinlao = () => {
  const { header, services, experiences, projects, hobbies } = data;
  return (
    <>
      <Header header={header} />
      <Services services={services} />
      <Experiences experiences={experiences} />
      <Projects projects={projects} />
      <Hobbies hobbies={hobbies} />
    </>
  );
};
