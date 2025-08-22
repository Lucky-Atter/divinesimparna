export default function Hero() {
  return (
    <section id="home" className="bg-cover bg-no-repeat bg-center md:mt-[74px] md:pt-[50px] mt-[65px] pt-[20px] relative z-10 after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-secondary after:z-[-1] after:opacity-35" style={{ backgroundImage: "url('/images/banner-image.jpg')" }}>
      <div className="container">
        <div className="md:w-[50%] sm:w-[80%] bg-white 2xl:py-[32px] md:py-[25px] py-[20px] md:ml-[20px] 2xl:px-[30px] md:px-[20px] px-[12px] shadow-lg relative md:bottom-[-30px] bottom-[-15px] max-sm:w-[calc(100%-20px)] max-md:mx-auto">
          <h6 className="sub-title">Divine Simparna</h6>
          <h1 className="sec-title">Connecting Journeys, <span>Connecting Worlds</span></h1>
          <p className="sm:mt-[15px] mt-[10px]">Discover the perfect blend of unforgettable travel experiences and reliable import-export solutions. At Divine Simparna, we take you beyond borders — from dream holiday destinations to seamless global trade partnerships. Your journey, whether for leisure or business, starts here.</p>
        </div>
      </div>
    </section>
  );
}