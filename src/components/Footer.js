"use client";
import Image from "next/image";
import { Link } from "react-scroll";
export default function Footer({data}) {
  return (
    <footer className="bg-primary text-white pt-[40px]">
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
                  className="max-w-[150px] object-contain"
                />
              </Link>
            )}
          </div>
          <nav className="flex justify-center items-center my-[40px]">
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
      <div className="text-center mt-[40px] text-[14px] border-t border-t-[rgba(255,255,255,0.25)] text-white font-[300] leadking-[1.2] tracking-[.36px] py-[10px] px-[15px]">© {new Date().getFullYear()} Divine Simparna PVT. LTD. All rights reserved.</div>
    </footer>
  );
}