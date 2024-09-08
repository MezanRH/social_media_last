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
          className={`flex h-10 w-10 2xl:h-auto 2xl:w-auto justify-center 2xl:justify-normal items-center 2xl:gap-x-4 font-noto 2xl:mb-6 hover:bg-black 2xl:py-3 2xl:px-6 cursor-pointer rounded-full group transition-all ease-linear duration-100 ${show && "bg-black"}`}
          onClick={() => setShow(true)}
        >
          <div className={`group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>
            <ItemIcom />
          </div>
          <div className=" hidden 2xl:block">
            <p className={`font-medium text-base 3xl:text-lg text-black group-hover:text-white transition-all ease-linear duration-100 ${show && "text-white"}`}>
              {data.tittle}
            </p>
          </div>
        </div>
        <div className=" absolute top-12 -left-2/4 -translate-x-2/4 lg:top-16 lg:left-36" ref={clickOutSide}>
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
          className=" flex h-10 w-10 2xl:h-auto 2xl:w-auto justify-center 2xl:justify-normal items-center 2xl:gap-x-4 font-noto lg:mb-5 2xl:mb-6 hover:bg-black 2xl:py-3 2xl:px-6 cursor-pointer rounded-full group transition-all ease-linear duration-100"
        >
          <div className=" group-hover:text-white transition-all ease-linear duration-100">
            <ItemIcom />
          </div>
          <div className="hidden 2xl:block">
            <p className=" font-medium text-base 3xl:text-lg text-black group-hover:text-white transition-all ease-linear duration-100">
              {data.tittle}
            </p>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default LeftHomeData;
