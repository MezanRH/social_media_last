import React from "react";
import { Moon } from "../../../../svg/Moon";
import { BackIcon } from "../../../../svg/backIcon";

const DisplayMode = ({setVisible}) => {
  return (
    <>
      <div className="bg-white w-[300px] shadow-md rounded-md p-4">
        <div className="flex items-center gap-x-4 mb-4">
          <div className="hover:text-secondary_color cursor-pointer transition-all ease-linear duration-75" onClick={()=> setVisible(false)}>
            <BackIcon />
          </div>
          <h4 className="font-noto font-bold text-lg text-black">
            {" "}
            Display & Accessability
          </h4>
        </div>
        <div className="flex justify-between gap-x-4">
          <div className="w-10 h-10 rounded-full bg-white-100 flex items-center justify-center">
            <Moon />
          </div>
          <div className="w-4/5">
            <div>
              <h4 className="font-noto font-bold text-base text-black mb-4">
                {" "}
                Dark Mode
              </h4>
            </div>
            <p className="font-noto font-normal text-sm text-secondary_color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div>
              <div className="flex justify-between items-center mb-3">
                {" "}
                <label
                  htmlFor="white"
                  className="font-noto font-medium text-sm text-black"
                >
                  Off
                </label>{" "}
                <input name="DarkMode" type="radio" id="white" />
              </div>
              <div className="flex justify-between items-center">
                <label
                  htmlFor="dark"
                  className="font-noto font-medium text-sm text-black"
                >
                  On
                </label>{" "}
                <input name="DarkMode" id="dark" type="radio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayMode;
