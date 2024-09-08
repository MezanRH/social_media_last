import React, { useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";
import SearchBox from "./SearchBox";
import OutSideClick from "../../../../functions/click";
import { LeftData } from "../../LeftPart/Data";
import { Link } from "react-router-dom";
import LeftHomeData from "../../LeftPart/LeftHomeData";

const Header = () => {
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, () => {
    setShow(false);
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <div className=" w-[20%]">
          <h4 className="font-noto font-bold text-2xl text-black hidden lg:block">
            Feeds
          </h4>
          <div className=" lg:hidden w-14 h-14 rounded-full bg-cyan-100 mx-auto"></div>
        </div>
        <div className=" lg:hidden flex gap-x-[10px] justify-center items-center w-[60%]">
          {LeftData.map((data, index) => (
            <LeftHomeData key={index} data={data} />
          ))}
        </div>
        <div className="w-[20%] lg:w-[30%] relative">
          <div
            className="flex w-11 ml-auto lg:ml-0 h-11 lg:w-full lg:h-auto justify-center items-center gap-x-3 border-secondary_color border lg:py-[10px] lg:px-4 rounded-full"
            onClick={() => setShow(true)}
          >
            <div className="text-secondary_color cursor-pointer">
              <SearchIcon />
            </div>
            <div className="hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none font-noto font-normal text-base w-full"
              />
            </div>
          </div>
          <div
            className="absolute -top-6 -right-5 4xl:left-[-40px] z-10"
            ref={clickOutSide}
          >
            {show && <SearchBox />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
