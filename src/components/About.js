import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="2xl:py-[100px] lg:py-[80px] m:py-[60px] py-[50px]">
      <div className="container">
        <div className="flex flex-wrap 2xl:gap-x-[80px] xl:gap-x-[50px] gap-x-[20px] gap-y-[25px]">
          <div className="md:flex-1 w-full h-auto">
            <Image 
              src="/images/about-us.jpg" 
              alt="About Divine Simparna"
              width={600} 
              height={400}
              className="h-full w-full object-cover boject-center"
            />
          </div>
          <div className="lg:w-[calc(50%-80px)] md:w-[calc(50%-60px)] md:py-[50px] self-center">
            <h6 className="sub-title">About Us</h6>
            <h2 className="sec-title">Your Gateway to Global <span>Adventures & Trade</span></h2>
            <p className="xl:mt-[25px] md:mt-[20px] mt-[15px]">
              At Divine Simparna, we believe the world is full of opportunities — for both exploration and business. Our mission is to bridge cultures, continents, and connections.
            </p>
            <p className="mt-[12px]">With years of expertise, a global network of partners, and a commitment to excellence, Divine Simparna is more than just a service — it’s your trusted partner for journeys that matter.</p>
          </div>
        </div>
      </div>
    </section>
  );
}