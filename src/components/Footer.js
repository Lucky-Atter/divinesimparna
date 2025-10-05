"use client";
import Image from "next/image";
import { Link } from "react-scroll";
export default function Footer({data}) {
  return (
    <footer className="bg-primary text-white xl:pt-[80px] md:pt-[60px] pt-[40px]">
      <div className="container">
        <div className="w-full">
          <div>
            {data.logoSrc && (
              <Link href={data.logoPath} className="w-fit block mx-auto bg-white p-[10px]">
                <Image 
                  src={data.logoSrc}
                  alt={data.logoAlt}
                  width={150}
                  height={50}
                  className="sm:max-w-[150px] max-w-[120px] object-contain"
                />
              </Link>
            )}
          </div>
          <nav className="flex flex-wrap gap-y-[16px] justify-center items-center 2xl-mt-[60px] xl-mt-[50px] md:mt-[40px] mt-[30px]">
            {data.footerMenu.map((menu) => (
              <Link
                key={menu.id}
                to={menu.link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70} 
                activeClass="active-menu"
                className="footer-menu cursor-pointer"
              >
                {menu.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.075)] text-center xl:mt-[80px] md:mt-[60px] mt-[40px] xl:text-[14px] sm:text-[12px] text-[11px] border-t border-t-[rgba(255,255,255,0.75)] text-white font-[300] leadking-[1.2] tracking-[.36px] py-[20px] px-[15px]">© {new Date().getFullYear()} Divine Simparna PVT. LTD. All rights reserved.</div>
    </footer>
  );
}