import React from "react";
import { PuffLoader } from "react-spinners";

const Activate = ({ type, text, head, loading }) => {
  return (
    <div className=" fixed top-0 left-0 w-full h-screen bg-blur z-10 flex justify-center items-center">
      <div className="w-[400px] bg-white p-4 text-center shadow-lg">
        <h3
          className={`font-noto font-medium text-lg ${
            type === "success" ? "text-green" : "text-red"
          }`}
        >
          {head}
        </h3>
        <h5 className="font-noto font-normal text-lg mt-5">{text}</h5>
        <PuffLoader
          className="m-auto mt-2"
          color="#21D997"
          loading={loading}
          size={40}
        />
      </div>
    </div>
  );
};

export default Activate;
