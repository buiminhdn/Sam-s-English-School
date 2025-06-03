import { footerillus, logo } from "../../assets/images";

function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url(${footerillus})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // This ensures the image covers the div
        backgroundPosition: "center", // Optional: centers the image
      }}
      className="mt-20 py-14 bg-blue-dark text-white"
    >
      <div className="container grid grid-cols-2 gap-20">
        <div>
          <img src={logo} alt="" className="h-20" />
          <p className="mt-7">
            At Sam's English School, we are committed to making a difference. We
            invite you to join our community and embark on a journey of positive
            change and growth. Together, we can make a significant impact on
            your life and career.
          </p>
          <div className="mt-7 flex gap-5">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <p className="text-base">Pages</p>
            <div className="mt-10 flex flex-col gap-5 text-gray-300">
              <p>Home</p>
              <p>Our Programs</p>
              <p>Our Teachers</p>
              <p>About Us</p>
            </div>
          </div>
          <div className="">
            <p className="text-base">Service</p>
            <div className="mt-10 flex flex-col gap-5 text-gray-300">
              <p>IELTS Preparation</p>
              <p>English for CEO</p>
              <p>Cambridge Curriculum</p>
              <p>Communication Skill</p>
            </div>
          </div>
          <div className="">
            <p className="text-base">Contact</p>
            <div className="mt-10 flex flex-col gap-5 text-gray-300">
              <div className="flex gap-3 items-center">
                <i className="fa-light fa-phone-volume"></i>
                <p>(406) 555-0120</p>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fa-light fa-envelope"></i>
                <p>mangcoding123@gmail.com</p>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fa-light fa-location-dot"></i>
                <p>
                  2972 Westheimer Rd. Santa Ana,
                  <br />
                  Illinois 85486{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
