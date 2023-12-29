import React from "react";

interface NavLink {
  href: string;
  name: string;
  key: string;
}

const useScrollNavigation = (navLinks: NavLink[]) => {
  const [activeNavLink, setActiveNavLink] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const navLink = navLinks[i];
        const section = document.getElementById(navLink.key);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (
            rect.top <= window.innerHeight * 0.5 &&
            rect.bottom >= window.innerHeight * 0.5
          ) {
            setActiveNavLink(navLink.key);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Déterminer le lien actif initial lors du premier rendu

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  return activeNavLink;
};

export default useScrollNavigation;
