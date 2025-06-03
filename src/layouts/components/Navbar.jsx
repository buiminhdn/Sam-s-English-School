import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="border-b border-gray-300">
      <div className="container py-5 flex justify-between items-center">
        <div className="font-medium flex gap-12">
          <Link to="/">Trang chủ</Link>
          <Link to="/courses" className="flex items-center gap-2">
            <p>Khóa học</p>
            <i className="fa-regular fa-angle-down mt-1"></i>
          </Link>
          <Link to="/courses">Giáo viên</Link>
          <Link to="/about" className="flex items-center gap-2">
            <p>Về chúng tôi</p>
            <i className="fa-regular fa-angle-down mt-1"></i>
          </Link>
        </div>
        <Link
          to="/hello"
          className="bg-yellow-dark font-medium text-black py-2.5 px-5 rounded-sm hover:shadow-xl transition-shadow duration-300"
        >
          Đăng ký học thử!
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
