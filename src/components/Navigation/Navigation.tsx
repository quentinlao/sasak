"use client";

import classNames from "classnames";
import React from "react";
import { Link } from "react-scroll";
import useScrollNavigation from "../common/utils/hooks/useScrollNavigation";

export const Navigation = () => {
  const navigation = [
    {
      href: "/#home",
      name: "Home",
      key: "home",
    },
    {
      href: "/#services",
      name: "Services",
      key: "services",
    },
    {
      href: "/#experiences",
      name: "Experiences",
      key: "experiences",
    },
    {
      href: "/#projects",
      name: "Projects",
      key: "projects",
    },
  ];

  const [activeBurger, setActiveBurger] = React.useState(false);
  const [offset, setOffset] = React.useState(0);

  const activeNavLink = useScrollNavigation(navigation || []);

  React.useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  return (
    <div className='hidden md:block'>
      {activeBurger && (
        <div className='fixed top-0 right-0 z-50 w-200 h-full bg-white shadow-lg '>
          <div className='px-6 py-4 mt-[32px]'>
            <div className='w-20' onClick={() => setActiveBurger(false)}>
              <svg
                className='h-32 w-32 text-default'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                width='64'
                height='64'
              >
                <line x1='18' y1='6' x2='6' y2='18' />
                <line x1='6' y1='6' x2='18' y2='18' />
              </svg>
            </div>

            <div className='flex-row my-8 py-8'>
              {navigation?.map((link) => {
                return (
                  <Link
                    key={link.key}
                    activeClass='font-semibold'
                    to={link.key}
                    spy={true}
                    smooth={true}
                    offset={-50} // ajustez la valeur en fonction de votre mise en page
                    duration={500} // ajustez la durée de défilement
                    className={classNames(
                      "flex text-default hover:text-default--hover cursor-pointer transition-colors duration-300",
                      { "font-semibold": activeNavLink === link.key }
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <a
                href='mailto:calixte.lao@outlook.com'
                className='mt-8 relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold  rounded-full  bg-active hover:bg-active-400 group'
              >
                <span className='absolute right-16 pr-4 '>
                  <svg
                    className='w-5 h-5 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path stroke-strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
                  </svg>
                </span>

                <span className='relative w-full text-white text-left text-sm px-6'>Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}
      <nav
        className={classNames(
          "flex justify-between  px-[128px]    w-full h-100 fixed    z-50 transition-opacity duration-150",
          {
            "bg-white/80 backdrop-blur-md shadow-md": offset > 100,
            "opacity-0": offset <= 100,
            "opacity-100": offset > 100,
          }
        )}
      >
        <div className='flex items-center'>
          <a className='cursor-pointer' href='/'>
            <h3 className='text-2xl font-nunitoBold text-default'>Quentin LAO</h3>
          </a>
        </div>

        <div className='hover:cursor-pointer mt-[32px] md:hidden' onClick={() => setActiveBurger(true)}>
          <span className='h-1 rounded-full block w-10 m mb-1 bg-gradient-to-tr from-gray-600 to-gray-200'></span>
          <span className='h-1 rounded-full block w-10  mb-1 bg-gradient-to-tr from-gray-600 to-gray-200'></span>
          <span className='h-1 rounded-full block w-10 mb-1 bg-gradient-to-tr from-gray-600 to-gray-200'></span>
        </div>

        <div className='hidden md:flex items-center space-x-5'>
          {navigation?.map((link) => {
            return (
              <Link
                key={link.key}
                activeClass='font-semibold'
                to={link.key}
                spy={true}
                smooth={true}
                offset={-50} // ajustez la valeur en fonction de votre mise en page
                duration={500} // ajustez la durée de défilement
                className={classNames(
                  "flex text-default hover:text-default--hover cursor-pointer transition-colors duration-300",
                  { "font-semibold": activeNavLink === link.key }
                )}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href='mailto:quentinlao@outlook.com'
            className='relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold  rounded-full  bg-[#F28705] hover:bg-active-400 group'
          >
            <span className='absolute right-16 pr-4 '>
              <svg
                className='w-5 h-5 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinejoin='round' strokeWidth='2' d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
              </svg>
            </span>

            <span className='relative w-full text-white text-left text-sm px-6'>Contact</span>
          </a>
        </div>
      </nav>
    </div>
  );
};
