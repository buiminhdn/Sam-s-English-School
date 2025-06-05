import { america, teacherone } from "../assets/images";

function HorizontalTeacherItem() {
  return (
    <div className="rounded-xl border border-gray-300 bg-white hover:shadow-2xl transition-shadow duration-500 flex gap-5">
      <img src={teacherone} alt="" className="h-70 rounded-2xl" />
      <div className="p-4">
        <div className="flex  items-center gap-3 mt-2">
          <p className="text-2xl font-medium">Colin Hancock</p>
          <img src={america} alt="" className="size-5" />
        </div>
        <p className="text-gray-500 mt-3 text-base">
          Cô Janet là một giáo viên tận tụy với nhiều kinh nghiệm giảng dạy quốc
          tế. Cô kết hợp lý thuyết với thực hành, đảm bảo học sinh
        </p>
        <div className="flex  gap-5 mt-4 text-gray-500">
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-book"></i>
            <p className="text-base">IELTS</p>
          </div>
          <div className="flex items-center gap-3">
            <i className="fa-lg fa-light fa-user-group"></i>
            <p className="text-base">530 Học viên</p>
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          <button className="bg-blue-light text-blue-dark hover:bg-blue-dark hover:text-white hover:shadow-lg transition-all duration-500 font-medium py-2 px-4 rounded-lg">
            Đặt lịch học
          </button>
          <button className="bg-blue-dark text-white hover:bg-blue-light hover:text-blue-dark hover:shadow-lg transition-all duration-500 font-medium py-2 px-4 rounded-lg">
            Liên hệ ngay
          </button>
        </div>
      </div>
    </div>
  );
}

export default HorizontalTeacherItem;
