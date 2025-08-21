import Image from "next/image";
export default function Contact() {
  return (
    <section id="contact" className="bg-[rgba(89,89,89,20%)]">
      <div className="container flex flex-wrap md:max-w-full md:mr-[0] md:px-0 md:ml-auto md:w-[calc(50%+339px)] lg:w-[calc(50%+459px)] xl:w-[calc(50%+549px)] 2xl:w-[calc(50%+639px)] 3xl:w-[calc(50%+730px)]">
        <div className="w-[50%] bg-white rounded-[12px] px-7 py-8 relative z-10 mr-[-30px] my-[60px]">
          <h6 className="sub-title">About Us</h6>
          <h2 className="sec-title">We’re Here <span>To Help</span></h2>
          <form action="https://formspree.io/f/your_form_id" method="POST" className="mt-[40px]">
            <div className="flex justify-between flex-wrap gap-y-[20px]">
              <div className="w-[calc(50%-10px)]">
                <input
                  type="text"
                  placeholder="Enter first name"
                  name="first-name"
                  className="form-field"
                  required
                />
              </div>
              <div className="w-[calc(50%-10px)]">
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
              <div className="w-[calc(50%-10px)]">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  name="phone-number"
                  className="form-field"
                  required
                />
              </div>
              <div className="w-[calc(50%-10px)]">
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
              className="primary-btn mt-[36px]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 w-full h-auto relative z-0">
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