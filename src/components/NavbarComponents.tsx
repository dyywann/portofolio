import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "iconsax-react";

const NavbarComponents: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("bg-background-color");
  const [textColor, setTextColor] = useState("text-text-color");

  const navLinks = [
    { href: "home", label: "Home" },
    { href: "about-me", label: "About Me" },
    { href: "portfolio", label: "Portfolio" },
    { href: "contact", label: "Contact" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Menutup menu pada mode mobile
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          if (section.classList.contains("light-section")) {
            setNavBackground("bg-background-color");
            setTextColor("text-text-color");
          } else if (section.classList.contains("dark-section")) {
            setNavBackground("bg-background-dark-color");
            setTextColor("text-white");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300 ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold">
              <Image src="/icons/logo.svg" alt="Logo" width={40} height={40} className="w-auto h-auto max-w-[38px] max-h-[38px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center flex-grow">
            <div className="flex items-baseline space-x-4 gap-14">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleScroll(link.href)} className={`text-sm font-normal ${textColor} hover:text-accent-color`}>
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ridwanefendy" target="_blank" className="hover:opacity-80">
                <Image src={textColor === "text-text-color" ? "/icons/linkedin-dark.png" : "/icons/linkedin-light.png"} alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/dyy.wann" target="_blank" className={`hover:opacity-80`}>
                <Instagram size="26" color={textColor === "text-text-color" ? "#333333" : "#FFFFFF"} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <Image src={textColor === "text-text-color" ? "/icons/close-dark.png" : "/icons/close-light.png"} alt="Close Menu" width={24} height={24} />
              ) : (
                <Image src={textColor === "text-text-color" ? "/icons/hamburger-dark.png" : "/icons/hamburger-light.png"} alt="Open Menu" width={24} height={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleScroll(link.href)} className={`text-sm py-2 font-normal ${textColor} hover:text-accent-color`}>
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-4 pb-3">
            <div className="flex items-center justify-center px-5 pt-2 gap-4">
              <a href="https://www.linkedin.com/in/ridwanefendy" target="_blank" className="hover:opacity-80">
                <Image src={textColor === "text-text-color" ? "/icons/linkedin-dark.png" : "/icons/linkedin-light.png"} alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/dyy.wann" target="_blank" className={`hover:opacity-80`}>
                <Instagram size="26" color={textColor === "text-text-color" ? "#333333" : "#FFFFFF"} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponents;
