import React, { useRef, useState } from "react";
import { SearchIcon } from "../../../../svg/SearchIcon";
import SearchBox from "./SearchBox";
import OutSideClick from "../../../../functions/click";

const Header = () => {
  const [show, setShow] = useState(false);
  const clickOutSide = useRef(null);

  OutSideClick(clickOutSide, () => {
    setShow(false);
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-noto font-bold text-2xl text-black">Feeds</h4>
        </div>
        <div className="w-[30%] relative">
          <div
            className="flex items-center gap-x-3 border-secondary_color border py-[10px] px-4 rounded-full"
            onClick={() => setShow(true)}
          >
            <div className="text-secondary_color cursor-pointer">
              <SearchIcon />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none font-noto font-normal text-base"
              />
            </div>
          </div>
          <div className="absolute -top-6 left-[-27px]" ref={clickOutSide}>
            {show && <SearchBox />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
