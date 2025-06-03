import React from "react";
import { ContactIllus, ContactIllus2 } from "../../assets/images";

function Contact() {
  return (
    <div className="container mt-30 ">
      <div
        style={{
          backgroundImage: `url(${ContactIllus2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top -40px left 30px",
          backgroundSize: "90rem",
        }}
        className="bg-blue-dark rounded-2xl p-20 relative"
      >
        <img
          src={ContactIllus}
          alt=""
          className="absolute w-[35rem] bottom-0 left-0"
        />
        <div className="w-3/5 ml-auto">
          <p className="text-white text-4xl leading-tight">
            Tham gia cộng đồng
            <br />
            của Sam's English School
          </p>
          <form action="" className="flex flex-col gap-4 mt-10">
            <input
              type="text"
              placeholder="Họ và tên"
              className="bg-white text-black rounded-full px-5 py-3 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white text-black rounded-full px-5 py-3 outline-none"
            />
            <button className="bg-yellow-dark rounded-full p-3 text-black">
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
