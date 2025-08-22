import React, { useState, useEffect } from "react";
import { QR } from "../assets/images";

function Popup({ buttonContent = "Try for Free", buttonClass = "" }) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (e) => {
    e.preventDefault(); // prevent opening the link
    const audio = new Audio("/ting.mp3");
    audio.play();
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showPopup]);

  return (
    <>
      {/* <button
        onClick={openPopup}
        className={`bg-yellow-dark hover:cursor-pointer font-medium text-black py-3 px-5 rounded-sm shadow-xl hover:scale-110 transition duration-300 ${
          className || ""
        }`}
      >
        {t("tryForFree")}
      </button> */}
      <button onClick={openPopup} className={buttonClass}>
        {buttonContent}
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-40 overflow-y-scroll pb-12">
          <div className="bg-white mx-auto w-4/5 md:w-3/5 lg:w-5/6 xl:w-4/6 h-fit rounded-lg mt-28">
            <div className="border-b border-gray-300 px-5 py-3 flex justify-between items-center">
              <p className="text-xl font-semibold text-MyBlue">
                Sam's English School
              </p>
              <button
                onClick={closePopup}
                className="text-2xl hover:text-yellow-darker hover:cursor-pointer"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 p-5">
              <div className="flex flex-col gap-2 mt-5">
                <p className="text-center text-2xl font-medium">
                  🌟 Unlock Your English Potential! 🌟
                </p>
                <p className="text-center text-lg mt-4">
                  Scan the Zalo QR code and schedule your FREE DEMO CLASS with
                  our expert native English teacher. Join Sam's English School
                  today and start your journey to fluency! 🚀📚
                </p>
                <p className="text-center mt-2 text-lg">
                  Ready to take your English to the next level? Enrolling in one
                  of our courses at Sam's English School is easy! Simply reach
                  out to us through the following methods to start your
                  registration. Contact us today to begin your journey!
                </p>
                <a
                  href="tel:+84921438861"
                  className="mx-auto mt-3 bg-blue-dark text-lg transition-colors duration-300 hover:text-black py-2.5 px-5 rounded-sm text-white w-fit hover:bg-yellow-dark"
                >
                  Call now
                </a>
              </div>
              <img
                src={QR}
                alt="QR Code"
                className="mx-auto w-full sm:w-96 sm:h-96 border-8 border-MyBlue"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
