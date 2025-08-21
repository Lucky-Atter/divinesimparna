"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header({ data }) {
  const [hasScrolled, setHasScrolled] = useState(false);

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
    <header className="bg-white shadow-[0_0_10px_#595959] fixed top-0 left-0 w-full z-[999]">
      <div className="container">
        <div className="flex justify-between">
          {data.logoSrc && (
            <Link href={data.logoPath}>
              <Image
                src={data.logoSrc}
                alt={data.logoAlt}
                width={150}
                height={50}
                className="max-w-[150px] object-contain py-[15px]"
              />
            </Link>
          )}
          <div className="md:hidden">Menu</div>
          <nav className="md:flex md:justify-end md:flex-1 w-full max-md:fixed max-md:left-0 max-md:top-0 max-md:bg-primary max-md:max-w-[300px] max-md:h-full max-md:p-[15px]">
            <Link href={data.logoPath} className="md:hidden bg-white block w-fit mx-auto p-[10px]">
              <Image
                src={data.logoSrc}
                alt={data.logoAlt}
                width={150}
                height={50}
                className="max-w-[150px] object-contain"
              />
            </Link>
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