import { useState, useEffect } from "react";
import { data } from "../../../../app/utils/data";

type HeaderLeftProps = {
  headerLeft: typeof data.header.headerLeft;
};

export const HeaderLeft = ({ headerLeft }: HeaderLeftProps) => {
  const { title, subtitle, slogans, description, cta } = headerLeft;

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
      const i = loopNum % slogans.length;
      const fullText = slogans[i];

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
        <p className='text-24 font-nunitoRegular'>{subtitle}</p>
        <p className='text-28 md:text-36 font-nunitoBold'>
          {title} <span className='text-primary'>Quentin LAO</span>
        </p>
        <p className='text-36 font-nunitoBold hidden md:block'>
          {displayText}
          <span className='animate-blink text-primary'>|</span>
        </p>
      </div>
      <div className='mt-10 md:mt-0'>
        <p className='text-20 mb-8 md:mb-10'>{description}</p>
        <button className='bg-primary text-white font-nunitoRegular w-[160px] h-[60px] p-4 rounded-2xl transition duration-300 ease-in-out hover:bg-primary--hover'>
          <a href='https://www.linkedin.com/in/quentinlao/' target='_blank'>
            {cta}
          </a>
        </button>
      </div>
    </div>
  );
};
