import React from "react";
import { Outlet } from "react-router-dom";
import LeftPart from "../HomeComponents/LeftPart";
import Header from "../HomeComponents/PostHome/header";

const RootLayout = () => {
  return (
    <>
      <div className=" mx-20 grid grid-cols-[1fr,3fr,1fr] gap-x-7 mt-10">
        <div>
          <LeftPart />
        </div>
        <div>
          <div>
            <Header />
          </div>
          <Outlet />
        </div>
        <div>3</div>
      </div>
    </>
  );
};

export default RootLayout;
