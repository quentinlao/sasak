"use client";
import { animated, useSpring } from "@react-spring/web";
import { useScroll } from "@use-gesture/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Tilt } from "react-tilt";
import { Section } from "../../common/Section/Section";
import { HeaderDescription } from "../Header/HeaderDescription/HeaderDescription";

function useSafeScroll(handler: (state: { xy: [number, number] }) => void, options?: Partial<{ target: EventTarget }>) {
  if (typeof window !== "undefined") {
    return useScroll(handler, { target: window });
  }
}

const HeaderImage = () => {
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
          transform: y.interpolate(trans2),
        }}
        className='mt-[450px] ml-[-30px] z-2 absolute w-16 h-16 flex-shrink-0 rounded-full bg-primary'
      ></animated.div>{" "}
      <Image
        className='w-[340px] h-[510px] object-cover rounded-[6.25rem]'
        src='/img/quentinlao-hero.jpeg'
        alt='Hero Image'
        placeholder='blur'
        blurDataURL='/img/quentinlao-hero.jpeg'
        width={340}
        height={510}
      />
    </div>
  );
};

const HeaderLeft = () => {
  const texts = [
    "Un développeur frontend React/TS",
    "Un développeur backend Java",
    "Un développeur mobile Flutter",
    "Un CTO en devenir",
  ];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const CONSTANTS = {
    DELETING_SPEED: 30,
    TYPING_SPEED: 50,
  };
  const [typingSpeed, setTypingSpeed] = useState(CONSTANTS.TYPING_SPEED); // Faster typing speed

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(CONSTANTS.DELETING_SPEED); // Faster erasing speed
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(CONSTANTS.TYPING_SPEED);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }
    };

    const timer = setInterval(handleTyping, typingSpeed);
    return () => clearInterval(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className=''>
      <div className='text-left  md:h-[150px]'>
        <p className='text-24 font-nunitoRegular'>Bienvenue</p>
        <p className='text-28 md:text-36 font-nunitoBold'>
          Je suis <span className='text-primary'>Quentin LAO</span>
        </p>
        <p className='text-36 font-nunitoBold hidden md:block'>
          {displayText}
          <span className='animate-blink text-primary'>|</span>
        </p>
      </div>
      <div className='mt-10 md:mt-0'>
        <p className='text-20 mb-8 md:mb-10'>
          Après avoir choisi de me spécialiser dans le développement logiciel, en mettant l'accent sur la technique et
          l'architecture, j'ai acquis une expertise qui me permet aujourd'hui de travailler dans un large éventail de
          projets
        </p>
        <button className='bg-primary text-white font-nunitoRegular w-[160px] h-[60px] p-4 rounded-2xl transition duration-300 ease-in-out hover:bg-primary--hover'>
          <a href='https://www.linkedin.com/in/quentinlao/' target='_blank'>
            Me recruter
          </a>
        </button>
      </div>
    </div>
  );
};

const LogoCarousel = () => {
  const logos = [
    { id: 0, url: "/img/gmf.svg" },
    { id: 1, url: "/img/ivalua.svg" },
    { id: 2, url: "/img/interieur.svg" },
    { id: 3, url: "/img/sante.svg" },
    { id: 4, url: "/img/upec.svg" },
    { id: 5, url: "/img/sopra.svg" },
    { id: 6, url: "/img/thales.svg" },
    { id: 7, url: "/img/canal.svg" },
  ];

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
          <Image src={item.url} alt='logo' width={100} height={80} className='object-contain filter grayscale' />
        ))}
      </div>

      <div className='flex md:hidden justify-items-center items-center space-x-40 h-[100px]'>
        <animated.div style={props}>
          <Image
            src={logos[index].url}
            alt='logo'
            width={100}
            height={80}
            className='object-contain filter grayscale'
          />
        </animated.div>
        <animated.div style={props}>
          <Image
            src={logos[(index + 1) % logos.length].url}
            alt='logo'
            width={100}
            height={80}
            className='object-contain filter grayscale'
          />
        </animated.div>
        <animated.div style={props}>
          <Image
            src={logos[(index + 2) % logos.length].url}
            alt='logo'
            width={100}
            height={80}
            className='object-contain filter grayscale'
          />
        </animated.div>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <svg
        className='absolute top-0 left-0 w-full h-[800px] z-0'
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
            <HeaderLeft />
          </div>
          <div className='w-[360px] h-[530px] hidden md:block'>
            <HeaderImage />
          </div>
          <div className='w-[140px] hidden md:block'>
            <HeaderDescription />
          </div>
        </div>
        <div className='flex flex-row justify-around items-center mt-[18px]'>
          <LogoCarousel />
        </div>
      </Section>
    </>
  );
};

type TitleProps = {
  title: string;
  subTitle: string;
  description?: string;
  color?: string;
  centered?: boolean;
};

const Title = ({ title, subTitle, description, color = "text-black", centered = false }: TitleProps) => {
  return (
    <div className={`${centered ? "text-center" : ""}`}>
      <p className='text-16 font-nunitoRegular uppercase text-primary'>{subTitle}</p>
      <p className={`text-32 font-nunitoBold ${color}`}>{title}</p>
      <p className={`text-18 font-nunitoRegular ${color}`}>{description}</p>
    </div>
  );
};

type CardProps = {
  children: React.ReactNode;
  className?: string;
  color?: string;
};

const Card = ({ className, children, color = "#F1FFF3" }: CardProps) => {
  return (
    <div className={`${className} rounded-lg w-[288px] h-[320px]`} style={{ background: color }}>
      {children}
    </div>
  );
};

const Services = () => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  useSafeScroll(({ xy: [, y] }) => {
    set({ y });
  });

  const trans1 = (y: number) => `translate3d(0, ${y / 9}px, 0)`;
  const trans2 = (y: number) => `translate3d(0, ${y / 14}px, 0)`;

  const cardData = [
    {
      title: "Integration",
      description: "Je crée des interfaces utilisateur efficaces pour votre site web ou votre application.",
      skills: ["#Figma", "#Photoshop"],
      image: "/img/figma.svg",
      bgColor: "#FFF4E8",
      color: "#F27405",
    },
    {
      title: "Mobile",
      description: "Je transforme vos idées en applications fonctionnelles et efficaces sur Android / iOS.",
      skills: ["#Flutter", "#Dart JS", "#Java", "#Android"],
      image: "/img/flutter.svg",
      bgColor: "#EEFFEF",
      color: "#1D8D22",
    },
    {
      title: "Web",
      description: "Je réalise des sites web professionnels et personnalisés pour répondre à vos besoins spécifiques.",
      skills: ["#React", "#Next JS", "#Typescript"],
      image: "/img/react.svg",
      bgColor: "#FFF4E8",
      color: "#F27405",
    },
  ];
  return (
    <div className='bg-white w-full md:h-[500px]'>
      <Section id='services'>
        <div className='flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:space-x-10'>
          <div className='mt-20'>
            <Title
              title='Principaux services'
              subTitle='A propos de moi'
              description='Je m’adapte aux exigences spécifiques de chaque projet. Et voici parmi mes compétences clés.'
            />
          </div>

          {cardData.map((card, index) => (
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

const Experiences = () => {
  return (
    <div className='bg-white w-full mb-[50px]'>
      <Section id='experiences'>
        <Title title='Professionnelles' subTitle='experiences' />
        <ul role='list'>
          <li className='mt-20 flex flex-col md:flex-row items-start md:space-x-20 p-16 transition-all rounded-md opacity-80 hover:opacity-100 group-hover/list:opacity-100 hover:bg-[#f7f7f7] hover:shadow-md hover:shadow-[#F0F0F0]'>
            <div className='md:w-[250px]'>
              <p className='text-16 uppercase font-nunitoRegular mb-4'>sept. 2022 - aujourd’hui</p>
            </div>

            <div className='md:w-[80%]'>
              <p className='text-20 font-nunitoBold mb-4 '>Développeur web front-end myCANAL</p>
              <p className='text-18 font-nunitoRegular mb-10 '>CANAL+ Group</p>
              <p className='text-18 font-nunitoRegular mb-4'>
                Contribution des features de la webApp unifié myCANAL sur web, mobile navigateur, TV natif et
                Fournisseur d’Accès Internet.Evolution des features sous forte contrainte d’utilisateurs avec plus de
                25,5 millions d'abonnés et de performance avec les pics d’audiences lors des directs F1, MotoGP,
                Champions League...Développement du nouveau parcours utilisateurs de la partie Transactional Video On
                Demand de la plateforme myCANAL et de la marque blanche TelecomItalia TIM afin de permettre une mise en
                avant business.Travail en coopération avec le studio design CANAL+ sur figma pour la création et
                intégration du Design System de CANAL+. Conception en étroite collaboration (Code review, peer prog,
                mob, live review) pour une bonne qualité de produit et une continuité de livable des nouvelles features
                sous méthodologie scrumban.
              </p>
              <div className='space-x-8 space-y-4'>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  React
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  TypeScript
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Redux
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  TanStack
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Playwright
                </button>
              </div>
            </div>
          </li>
          <li className='mt-20 flex flex-col md:flex-row items-start md:space-x-20 p-16 transition-all rounded-md opacity-80 hover:opacity-100 group-hover/list:opacity-100 hover:bg-[#f7f7f7] hover:shadow-md hover:shadow-[#F0F0F0]'>
            <div className='md:w-[250px]'>
              <p className='text-16 uppercase font-nunitoRegular mb-4'>dec. 2020 - sept. 2022</p>
            </div>

            <div className='md:w-[80%]'>
              <p className='text-20 font-nunitoBold mb-4'>Ingénieur développement logiciel II</p>
              <p className='text-18 font-nunitoRegular mb-10'>Thales, LAS France SAS</p>
              <p className='text-18 font-nunitoRegular mb-4'>
                Réalisation d'une application web from scratch pour la simulation d’un espace aérien et la surveillance
                d’une zone cartographique. Développement d’une solution avec COTS technique, de problématique
                d'industrialisation long terme et performance. Conception de tests Jest (unitaires), Cypress
                (fonctionnels) dans un environnement d’intégration continu (Sonar 80% de couvertures de code avec+1500
                tests sur tout le projet). Contribution à la fiabilité et la maintenance du code (Code review) et
                documentation des spécifications technico-fonctionnels. Travail en méthodologie SCRUM agile sous Jira
                avec livrable régulier et prise en compte des remarques clients/PO.
              </p>
              <div className='space-x-8 space-y-4'>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  React
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Flux
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Java
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Jest / Cypress
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Java
                </button>
              </div>
            </div>
          </li>
          <li className='mt-20 flex flex-col md:flex-row items-start md:space-x-20 p-16 transition-all rounded-md opacity-80 hover:opacity-100 group-hover/list:opacity-100 hover:bg-[#f7f7f7] hover:shadow-md hover:shadow-[#F0F0F0]'>
            <div className='md:w-[250px]'>
              <p className='text-16 uppercase font-nunitoRegular mb-4'>janv. 2020 - nov. 2020</p>
            </div>

            <div className='md:w-[80%]'>
              <p className='text-20 font-nunitoBold mb-4'>Développeur fullstack</p>
              <p className='text-18 font-nunitoRegular mb-4'>Sopra Steria Group</p>
              <p className='text-18 font-nunitoRegular mb-10'>Ministère de l’intérieur</p>
              <p className='text-18 font-nunitoRegular mb-4'>
                Responsabilités sur 2 projets d'applications web d’un Dépôt d’Armes et d’un Gestionnaire de
                Propriétaires d’Armes. Gestion de la Tierce Maintenance Applicative en agilité permettant le
                décommissionnement et derniers lots d’évolutions MEP (Java, Oracle, mRemoteNG) du gestionnaire de
                propriétaires d’armes. Réalisation des features de l’application web des dépôt d’armes afin d'améliorer
                la gestion opérateur et mise en place d'accès aux données sécurisées (React, Redux, Symfony 3).
                Documentation des spécifications fonctionnelles détaillées pour le PO et automatisation des tests à
                travers HPQC
              </p>
              <div className='space-x-8 space-y-4'>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  React
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Symfony 3
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Redux
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Sonar
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Oracle 11g
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Java
                </button>
              </div>
            </div>
          </li>
          <li className='mt-20 flex flex-col md:flex-row items-start md:space-x-20 p-16 transition-all rounded-md opacity-80 hover:opacity-100 group-hover/list:opacity-100 hover:bg-[#f7f7f7] hover:shadow-md hover:shadow-[#F0F0F0]'>
            <div className='md:w-[250px]'>
              <p className='text-16 uppercase font-nunitoRegular mb-4'>nov. 2018 - janv. 2020</p>
            </div>

            <div className='md:w-[80%]'>
              <p className='text-20 font-nunitoBold mb-4'>Ingénieur d’études et de développement</p>
              <p className='text-18 font-nunitoRegular mb-4'>Sopra Steria Group</p>
              <p className='text-18 font-nunitoRegular mb-10'>Agence Du Numérique En Santé</p>
              <p className='text-18 font-nunitoRegular mb-4'>
                Développement d’une migration technique Liferay 7 (Java) pour l'application web
                https://annuaire.sante.fr/ Prise en compte MCO chez le client dans le domaine de la santé publique en
                cycle V constitués d’équipes Madrid/Paris pour les professionnels de santés (personnes
                physiques/morales). Participation aux ateliers techniques avec les architectes internes et prestataires
                afin de concevoir un webservice d'interrogation synchrone (SpringBoot) permettant aux services de santé
                de récupérer des données de personnes actives API Rest +40k données au format d’une norme médical FHIR
                permettant à tous les acteurs médicaux ARS de travailler sur ce WS.
              </p>
              <div className='space-x-8 space-y-4'>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Java
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  SpringBoot
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Oracle
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  Sonar
                </button>
                <button className='px-8 py-6 rounded-md bg-dark-blue text-light-bg-green text-16 font-nunitoRegular'>
                  J2EE
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div className='flex space-x-8 text-18 font-nunitoBold mt-10'>
          <p>
            {" "}
            <a href='https://www.linkedin.com/in/quentinlao/' target='_blank'>
              Voir mes expériences complètes
            </a>
          </p>
          <Image src='/img/arrowRight.svg' height={16} width={16} alt='logo icon' />
        </div>
      </Section>
    </div>
  );
};

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
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10'>
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
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10'>
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
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10'>
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
          travers une note sur la qualité nutritive de la recette{" "}
        </p>
        <button className='bg-primary text-white font-nunitoRegular w-[150px] h-[50px] p-4 rounded-2xl mt-10'>
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
        <Title title='Mes travaux délivrés' subTitle='Portfolio' />
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
            <Image className='rounded-md' src={image} alt={`Background ${index}`} layout='fill' objectFit='cover' />
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
        <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 justify-center  mt-10'>
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
        </div>
      </Section>
    </div>
  );
};

export const Quentinlao = () => {
  return (
    <>
      <Header />
      <Services />
      <Experiences />
      <Projects />
      <Hobbies />
    </>
  );
};
