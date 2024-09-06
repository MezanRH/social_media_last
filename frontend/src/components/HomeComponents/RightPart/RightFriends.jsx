import React from "react";
import { Link } from "react-router-dom";
import { ReduceText } from "../../../functions/ReduceText";

const RightFriends = () => {
  const originalName = "Reaz Hossain hawladar reaz ullah";
  const reduceText = ReduceText(originalName, 10);
  return (
    <>
      <div>
        <div className="font-noto flex items-center justify-between mb-10">
          <div>
            <h4 className="font-bold text-lg text-black">Friends request</h4>
          </div>
          <div>
            <Link
              to="/friends"
              className="text-base font-medium py-2 px-4 rounded-full border border-black text-black hover:bg-black hover:text-white transition-all ease-linear duration-100"
            >
              {" "}
              See All
            </Link>
          </div>
        </div>
        <div className=" font-noto flex items-center gap-x-3 mb-4">
          <div className="w-3/6 flex items-center gap-x-3">
            <div className="w-10 h-10 bg-secondary_color rounded-full"></div>
            <div className="w-[62%]">
              <h5 className="font-normal text-sm text-black leading-none">
                {reduceText}
              </h5>
              <span className="font-light text-xs text-secondary_color">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="w-3/6 flex items-center gap-x-2">
            <button className="px-4 py-2 bg-black text-sm rounded-full text-white font-normal">
              Accept
            </button>
            <button className="px-4 py-2 bg-red text-sm rounded-full text-white font-normal">
              Reject
            </button>
          </div>
        </div>

        {/* Demo line */}

        <div className=" font-noto flex items-center gap-x-3 mb-4">
          <div className="w-3/6 flex items-center gap-x-3">
            <div className="w-10 h-10 bg-secondary_color rounded-full"></div>
            <div className="w-[62%]">
              <h5 className="font-normal text-sm text-black leading-none">
                Reaz Hossain
              </h5>
              <span className="font-light text-xs text-secondary_color">
                2 hours ago
              </span>
            </div>
          </div>
          <div className="w-3/6 flex items-center gap-x-2">
            <button className="px-4 py-2 bg-black text-sm rounded-full text-white font-normal">
              Accept
            </button>
            <button className="px-4 py-2 bg-red text-sm rounded-full text-white font-normal">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightFriends;
