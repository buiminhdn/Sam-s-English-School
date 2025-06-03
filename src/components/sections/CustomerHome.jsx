import React from "react";
import { Schools } from "../../assets/images";

function CustomerHome() {
  return (
    <div className="container mt-28">
      <p className="text-5xl font-medium text-gray-800">
        <span className="text-purple-dark">Khách hàng</span> của chúng tôi
      </p>
      <img src={Schools} alt="" className="mt-14" />
    </div>
  );
}

export default CustomerHome;
