import Image from "next/image";
export default function About() {
  return (
    <section id="about" className="bg-[#f7f7f7]">
      <div className="container">
        <div className="flex flex-wrap gap-[40px]">
          <div className="flex-1 h-auto">
            <Image 
              src="/images/about-us.jpg" 
              alt="About Divine Simparna"
              width={600} 
              height={400}
              className="h-full w-full object-cover boject-center"
            />
          </div>
          <div className="w-[calc(50%-80px)] py-[50px]">
            <h6 className="sub-title">About Us</h6>
            <h2 className="sec-title">Your Gateway to Global <span>Adventures & Trade</span></h2>
            <p className="mt-[25px]">
              At Divine Simparna, we believe the world is full of opportunities — for both exploration and business. Our mission is to bridge cultures, continents, and connections.
            </p>
            <p className="mt-[12px]">With years of expertise, a global network of partners, and a commitment to excellence, Divine Simparna is more than just a service — it’s your trusted partner for journeys that matter.</p>
          </div>
        </div>
      </div>
    </section>
  );
}