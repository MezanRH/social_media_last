import React from "react";
import { Helmet } from "react-helmet-async";
import LeftPart from "../../components/HomeComponents/LeftPart";
import PostHome from "../../components/HomeComponents/PostHome";
import ReAuth from "../../components/reauth";
import { useSelector } from "react-redux";

const Home = () => {
  const { userInfo } = useSelector((state) => state.registration);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {userInfo.verified == false && <ReAuth userInfo={userInfo} />}
      <PostHome />
    </>
  );
};

export default Home;
