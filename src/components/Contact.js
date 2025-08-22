import Image from "next/image";
export default function Contact() {
  return (
    <section id="contact" className="bg-[rgba(89,89,89,20%)] max-md:pb-[50px] max-md:pb-[40px]">
      <div className="flex flex-wrap md:max-w-full md:mr-[0] md:px-0 md:ml-auto md:w-[calc(50%+339px)] lg:w-[calc(50%+459px)] xl:w-[calc(50%+549px)] 2xl:w-[calc(50%+639px)] 3xl:w-[calc(50%+730px)]">
        <div className="md:w-[50%] bg-white rounded-[12px] lg:px-7 lg:py-8 px-4 py-5 relative z-10 md:mr-[-30px] md:my-[60px] max-md:order-2 max-md:mt-[-30px] max-md:w-[calc(100%-30px)] max-md:mx-auto">
          <h6 className="sub-title">About Us</h6>
          <h2 className="sec-title">We’re Here <span>To Help</span></h2>
          <form action="https://formspree.io/f/your_form_id" method="POST" className="lg:mt-[40px] md:mt-[30px] mt-[20px]">
            <div className="flex justify-between flex-wrap xl:gap-y-[20px] gap-y-[14px]">
              <div className="xl:w-[calc(50%-10px)] sm:w-[calc(50%-7px)] w-full">
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="first-name"
                  className="form-field"
                  required
                />
              </div>
              <div className="xl:w-[calc(50%-10px)] sm:w-[calc(50%-7px)] w-full">
                <input
                  type="text"
                  placeholder="Enter last name"
                  name="last-name"
                  className="form-field"
                  required
                />
              </div>
              <div className="w-full"> 
                <input
                  type="email"
                  placeholder="Enter email address"
                  name="email"
                  className="form-field"
                  required
                />
              </div>
              <div className="xl:w-[calc(50%-10px)] sm:w-[calc(50%-7px)] w-full">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone-number"
                  className="form-field"
                  required
                />
              </div>
              <div className="xl:w-[calc(50%-10px)] sm:w-[calc(50%-7px)] w-full">
                <input
                  type="text"
                  placeholder="Enter company name"
                  name="company-name"
                  className="form-field"
                  required
                />
              </div>
              <div className="w-full">
                <textarea
                  placeholder="Enter message"
                  name="message"
                  className="form-field h-[100px] resize-none"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="primary-btn md:mt-[36px] mt-[25px]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:flex-1 w-full h-auto relative z-0">
          <Image 
            src="/images/contact.jpg"
            alt="Contact Image"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}