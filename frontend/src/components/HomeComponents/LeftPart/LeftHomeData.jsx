import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SettingOptions from "./SettingOption";
import OutSideClick from "../../../functions/click";

const LeftHomeData = ({ data }) => {
  // console.log(data);

  const [show, setShow] = useState(false);
  const ItemIcom = data.icon;
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, () => {
    setShow(false);
  });

  const settingsSeparation = data.tittle === "Settings" && (
    <>
      <div className=" relative">
        <div
          className={`flex items-center gap-x-4 font-noto mb-6 hover:bg-black py-3 px-6 cursor-pointer rounded-full group transition-all ease-linear duration-100 ${show && "bg-black"}`}
          onClick={() => setShow(true)}
        >
          <div className={`group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>
            <ItemIcom />
          </div>
          <div>
            <p className={`font-medium text-lg text-black group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>
              {data.tittle}
            </p>
          </div>
        </div>
        <div className=" absolute top-16 left-0" ref={clickOutSide}>
          {show && <SettingOptions />}
        </div>
      </div>
    </>
  );

  return (
    <>
      {settingsSeparation ? (
        settingsSeparation
      ) : (
        <NavLink
          to={data.to}
          className=" flex items-center gap-x-4 font-noto mb-6 hover:bg-black py-3 px-6 cursor-pointer rounded-full group transition-all ease-linear duration-100"
        >
          <div className=" group-hover:text-white transition-all ease-linear duration-100">
            <ItemIcom />
          </div>
          <div>
            <p className=" font-medium text-lg text-black group-hover:text-white transition-all ease-linear duration-100">
              {data.tittle}
            </p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
