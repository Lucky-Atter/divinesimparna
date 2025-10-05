"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export default function Header({ data }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY >= 150) {
        setHasScrolled(true);
      }else{
        setHasScrolled(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);
  return (
    <header>
      <div className="py-[12px] bg-[#101010] border-b-[1px] border-b-primary max-md:hidden">
          <div className="container flex items-center justify-between gap-[10px]">
            <span className="text-white text-[14px] leading-[1.1] tracking-[0.46px] font-[300]"><b className="font-medium text-[#707070]">Cin :</b> U12345DL2025PTC000123</span>
            <div className="flex items-center">
              <span className="text-[#707070] font-medium text-[14px] leading-[1.1] tracking-[0.46px] font-[300] me-[8px]">Ph No : </span>
              <Link href="tel:8894980986" title="Call us at: 8894980986" className="text-white font-[300] text-[14px] leading-[1.1] tracking-[0.46px] transition-all duration-500 ease-in-out hover:text-primary">8894980986</Link>
              <span className="text-white font-[300] leading-[1.1] tracking-[0.46px] px-[10px]">|</span>
              <Link href="tel:8284879420" title="Call us at: 8284879420" className="text-white font-[300] text-[14px] leading-[1.1] tracking-[0.46px] transition-all duration-500 ease-in-out hover:text-primary">8284879420</Link>
            </div>
          </div>
      </div>
      <div className={`bg-white left-0 w-full z-[999] max-md:py-[15px] transition-all duration-700 ${hasScrolled ? 'fixed shadow-[0_5px_10px_#0000001F] top-0':'top-[-200px] max-md:fixed max-md:top-0'}`}>
        <div className="container">
        <div className="flex justify-between items-center">
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
          <nav className={`md:flex md:items-center md:justify-end md:flex-1 w-full max-md:absolute max-md:right-0 max-md:top-[100%] max-md:bg-white max-md:pb-[25px] max-md:max-w-[300px] max-md:border-y max-md:text-center transition-all duration-500 ease-in-out max-md:after:content-[''] max-md:after:absolute max-md:after:top-0 max-md:after:z-[-1] max-md:after:right-0 max-md:after:min-h-[100vh] max-md:after:min-w-[100vw] max-md:after:bg-black max-md:after:opacity-50  ${showMenu ? '' : 'max-md:right-[-100%] max-md:invisible'}`}>
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
            <div className="md:hidden flex justify-center flex-wrap gap-[15px] mt-[20px] px-[15px]">
              <div className="flex items-center">
                <span className="text-secondary font-medium text-[14px] leading-[1.1] tracking-[0.46px] font-[300] me-[5px]">Ph No : </span>
                <Link href="tel:8894980986" title="Call us at: 8894980986" className="text-textGray font-[300] text-[14px] leading-[1.1] tracking-[0.46px] transition-all duration-500 ease-in-out hover:text-primary">8894980986</Link>
                <span className="text-textGray font-[300] leading-[1.1] tracking-[0.46px] px-[5px]">|</span>
                <Link href="tel:8284879420" title="Call us at: 8284879420" className="text-textGray font-[300] text-[14px] leading-[1.1] tracking-[0.46px] transition-all duration-500 ease-in-out hover:text-primary">8284879420</Link>
              </div>
              <span className="text-textGray text-[14px] leading-[1.1] tracking-[0.46px] font-[300]"><b className="font-medium text-secondary">Cin :</b> U12345DL2025PTC000123</span>
            </div>
          </nav>
        </div>
      </div>
      </div>
    </header>
  );
}