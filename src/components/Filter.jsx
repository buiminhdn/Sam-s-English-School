import React from "react";

function Filter() {
  return (
    <form action="" className="mt-10 mx-auto w-fit">
      <div className="flex gap-4 text-base font-light">
        <button className="bg-blue-dark text-white border border-gray-200  w-36 p-2 rounded-xl">
          All Programs
        </button>

        <button className="bg-gray-50 border border-gray-200 text-gray-600 w-36 p-2 rounded-xl">
          Online
        </button>

        <button className="bg-gray-50 border border-gray-200 text-gray-600 w-36 p-2 rounded-xl">
          Offline
        </button>

        <button className="bg-gray-50 border border-gray-200 text-gray-600 w-36 p-2 rounded-xl">
          1 kèm 1
        </button>

        <button className="bg-gray-50 border border-gray-200 text-gray-600 w-36 p-2 rounded-xl">
          Nhóm
        </button>
      </div>
      <div className="flex gap-3 mt-5">
        <div className="flex gap-2 bg-gray-50 border border-gray-200 rounded-xl w-full p-2">
          <input
            type="text"
            className="w-full outline-none ml-2"
            placeholder="Tìm kiếm Khóa học, Tên giáo viên"
          />
          <button className="py-2 px-3 bg-blue-dark text-white rounded-lg">
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="bg-gray-50 border border-gray-200 py-2 px-4 flex items-center rounded-lg">
          <div className="whitespace-nowrap flex gap-12 items-center">
            <p>
              <span className="text-gray-500 font-light">Sort by:</span> Lastest
            </p>
            <i className="fa-regular fa-angle-down text-blue-dark"></i>
          </div>

          {/* <div>
              <button>Sort by: Price</button>
              <button>Sort by: Popularity</button>
            </div> */}
        </div>
      </div>
    </form>
  );
}

export default Filter;
