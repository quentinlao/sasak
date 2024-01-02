"use client";
import packageInfo from "../../../package.json";
import { Section } from "../common/Section/Section";

export const Footer = () => {
  return (
    <div className='bg-white relative w-full mb-[30px] md:mb-0'>
      <Section id='hobbies'>
        <div className='relative z-1 text-default text-12 flex  items-center justify-center'>
          <p>
            © {new Date().getFullYear()} Quentin LAO | Design version {packageInfo.version}
          </p>
        </div>
      </Section>
    </div>
  );
};
