import Image from "next/image";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-[80px]">
      <h2 className="sec-title text-center w-fit mx-auto !border-none !pl-0 !text-secondary">Our <span>Services</span></h2>
      <p className="text-center text-darkBlack mt-[25px]">From breathtaking travel adventures to seamless global trade — we bring the world closer to you.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-[80px]">
        <div className="px-6 pb-7 bg-[#f7f7f7] rounded-lg text-center">
          <div className="w-[80px] h-[80px] mx-auto mt-[-40px] bg-white shadow-[0_2px_0_4px_#063e79] rounded-full flex items-center justify-center"> 
            <Image 
              src="images/travel-holiday.svg"
              alt="Travel Holiday"
              width={48} 
              height={48}
            />
          </div>
          <h3 className="sub-heading">Travel <span>Holiday</span></h3>
          <p>Experience the joy of seamless travel with Divine Simparna. From exotic beaches to cultural city escapes, we curate holiday packages designed for comfort, adventure, and unforgettable memories.</p>
          <Link href="https://majenta.ai/" target="_blank" className="primary-btn mx-auto mt-[30px]" title="Learn More">Learn More</Link>
        </div>
        <div className="px-6 pb-7 bg-[#f7f7f7] rounded-lg text-center">
          <div className="w-[80px] h-[80px] mx-auto mt-[-40px] bg-white shadow-[0_2px_0_4px_#063e79] rounded-full flex items-center justify-center">
            <Image 
              src="images/import-export.svg"
              alt="Travel Holiday"
              width={48} 
              height={48}
            />
          </div>
          <h3 className="sub-heading">Import & <span>Export</span></h3>
          <p>Expand your business globally with our trusted import and export solutions. We connect you with international markets, ensuring smooth trade processes from start to finish.</p>
          <Link href="https://majenta.ai/" target="_blank" className="primary-btn mx-auto mt-[30px]" title="Learn More">Learn More</Link> 
        </div>
      </div>
    </section>
  );
}