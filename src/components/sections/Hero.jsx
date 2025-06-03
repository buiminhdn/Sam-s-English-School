import { BoyHoldCamera, BoyThumbUp } from "../../assets/images";

function Hero() {
  return (
    <div className="container relative mt-20">
      <img
        src={BoyHoldCamera}
        alt="Boy Holding Camera"
        className="absolute w-44 left-50"
      />
      <img
        src={BoyThumbUp}
        alt="Boy Thumb Up"
        className="absolute w-64 right-40 top-20"
      />
      <p className="text-8xl text-center font-medium text-gray-800">
        Nơi tốt nhất để
        <br />
        <span className="text-purple-dark">học</span> và{" "}
        <span className="text-yellow-darker">chơi</span>
        <br />
        cho mọi lứa tuổi
      </p>
      <p className="text-center mt-12">
        Khám phá hàng ngàn hoạt động học tập tương tác và thú vị
        <br />
        để hỗ trợ quá trình phát triển và học tập của con bạn.
      </p>
      <button className="mx-auto mt-12 bg-blue-dark p-3 flex items-center gap-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <p className="text-white ml-1.5">ĐĂNG KÝ NGAY</p>
        <div className="bg-white px-2.5 py-1 rounded-full">
          <i className="fa-regular fa-arrow-up-right fa-beat"></i>
        </div>
      </button>
    </div>
  );
}

export default Hero;
