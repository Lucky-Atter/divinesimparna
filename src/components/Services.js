import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="bg-[#f7f7f7] 2xl:py-[100px] lg:py-[80px] m:py-[60px] py-[50px]">
      <div className="container">
        <h2 className="sec-title text-center w-fit mx-auto !border-none !pl-0 !text-secondary">Our <span>Services</span></h2>
        <p className="text-center text-darkBlack md:mt-[15px] mt-[10px] max-w-[600px] mx-auto">From breathtaking travel adventures to seamless global trade — we bring the world closer to you.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto lg:mt-[60px] sm:mt-[40px] mt-[30px]">
          <div className="lg:px-6 lg:pb-7 px-4 pb-5 bg-[#ffffff] rounded-lg text-center lg:mt-[40px] mt-[30px]">
            <div className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] mx-auto lg:mt-[-40px] mt-[-30px] bg-white shadow-[0_2px_0_4px_#063e79] rounded-full flex items-center justify-center"> 
              <Image 
                src="images/travel-holiday.svg"
                alt="Travel Holiday"
                width={48} 
                height={48}
                className="lg:max-w-[48px] max-w-[36px] object-contain"
              />
            </div>
            <h3 className="sub-heading">Travel <span>Holiday</span></h3>
            <p>Experience the joy of seamless travel with Divine Simparna. From exotic beaches to cultural city escapes, we curate holiday packages designed for comfort, adventure, and unforgettable memories.</p>
            <Link href="/" target="_blank" className="primary-btn mx-auto mt-[30px] pointer-events-none" title="Coming Soon">Coming Soon</Link>
          </div>
          <div className="lg:px-6 lg:pb-7 px-4 pb-5 bg-[#ffffff] rounded-lg text-center lg:mt-[40px] mt-[30px]">
            <div className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px] mx-auto lg:mt-[-40px] mt-[-30px] bg-white shadow-[0_2px_0_4px_#063e79] rounded-full flex items-center justify-center">
              <Image 
                src="images/import-export.svg"
                alt="Travel Holiday"
                width={48} 
                height={48}
                className="lg:max-w-[48px] max-w-[36px] object-contain"
              />
            </div>
            <h3 className="sub-heading">Import & <span>Export</span></h3>
            <p>Expand your business globally with our trusted import and export solutions. We connect you with international markets, ensuring smooth trade processes from start to finish.</p>
            <Link href="/" target="_blank" className="primary-btn mx-auto mt-[30px] pointer-events-none" title="Coming Soon">Coming Soon</Link> 
          </div>
        </div>
      </div>
    </section>
  );
}