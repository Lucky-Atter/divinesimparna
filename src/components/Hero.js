export default function Hero() {
  return (
    <section id="home" className="bg-cover bg-no-repeat bg-center mt-[50px] pt-[80px] relative z-10 after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-secondary after:z-[-1] after:opacity-35" style={{ backgroundImage: "url('/images/banner-image.jpg')" }}>
      <div className="container">
        <div className="w-[50%] bg-white py-[32px] ml-[20px] px-[30px] shadow-lg relative bottom-[-30px]">
          <h6 className="sub-title">Divine Simparna</h6>
          <h1 className="sec-title">Connecting Journeys, <span>Connecting Worlds</span></h1>
          <p className="mt-[15px]">Discover the perfect blend of unforgettable travel experiences and reliable import-export solutions. At Divine Simparna, we take you beyond borders — from dream holiday destinations to seamless global trade partnerships. Your journey, whether for leisure or business, starts here.</p>
        </div>
      </div>
    </section>
  );
}