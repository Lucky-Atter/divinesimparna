"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header({ data }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  return (
    <header className="bg-white shadow-[0_0_10px_#595959] fixed top-0 left-0 w-full z-[999] max-md:py-[15px]">
      <div className="container">
        <div className="flex justify-between">
          {data.logoSrc && (
            <Link href={data.logoPath}>
              <Image
                src={data.logoSrc}
                alt={data.logoAlt}
                width={150}
                height={50}
                className="md:max-w-[150px] max-md:max-w-[120px] object-contain md:py-[15px]"
              />
            </Link>
          )}
          <div className="md:hidden max-md:self-center" onClick={() => setShowMenu(showMenu?false:true)}>
            <Image
              src={showMenu?'/images/hide-menu.svg':'/images/show-menu.svg'}
              alt={data.logoAlt}
              width={30}
              height={30}
              className="max-w-[30px] max-h-[20px] object-contain"
            />
          </div>
          <nav className={`md:flex md:justify-end md:flex-1 w-full max-md:absolute max-md:right-0 max-md:top-[100%] max-md:bg-white max-md:pb-[25px] max-md:max-w-[200px] max-md:border-y max-md:text-center transition-all duration-500 ease-in-out max-md:after:content-[''] max-md:after:absolute max-md:after:top-0 max-md:after:z-[-1] max-md:after:right-0 max-md:after:min-h-[100vh] max-md:after:min-w-[100vw] max-md:after:bg-black max-md:after:opacity-50  ${showMenu ? '' : 'max-md:right-[-100%] max-md:invisible'}`}>
            {data.headerMenu.map((menu, index) => (
              <Link
                key={menu.id}
                to={menu.link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active-menu"
                className={`cursor-pointer ${menu.id !== 4 ? "header-menu" : "header-menu-btn self-center"} ${
                  !hasScrolled && index === 0 ? "active-menu" : ""
                }`}
              >
                {menu.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}