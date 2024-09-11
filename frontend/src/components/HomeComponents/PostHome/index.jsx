import React from "react";
import Header from "./header";
import { LiveIcon } from "../../../svg/Live";
import { Media } from "../../../svg/Media";

const PostHome = () => {
  return (
    <>
      <div className="mt-10 py-10 px-6 bg-white-100 rounded-md">
        <div className="flex items-center gap-x-3 w-full p-2 bg-white rounded-full mb-6">
          <div className="w-12 h-12 rounded-full bg-white-100"></div>
          <input
            type="text"
            placeholder="What's up say somthing"
            className=" focus:outline-none w-[95%]"
          />
        </div>
        <div className=" border-t-4 border-line_color">
          <div className="mt-7 flex gap-x-7 items-center">
            <div className="w-[33%] flex items-center gap-x-3 mt-4">
              <LiveIcon />
              <span className="font-noto font-medium text-black">
                Live Video
              </span>
            </div>
            <div className="w-[33%] flex items-center gap-x-3 mt-4">
              <Media />
              <span className="font-noto font-medium text-black">
                Image/Gallery
              </span>
            </div>
            <div className="w-[33%] flex items-center gap-x-3 mt-4">
              <LiveIcon />
              <span className="font-noto font-medium text-black">
                Activities
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PostHome;
