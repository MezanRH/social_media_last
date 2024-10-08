import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LeftPart from "../../components/HomeComponents/LeftPart";
import PostHome from "../../components/HomeComponents/PostHome";
import Activate from "./Activate";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useVerifiedUserMutation } from "../../features/api/authApi";
import { loggedInUsers } from "../../features/users/authSlice";

const ActivatePage = () => {
  const [verifiedUser] = useVerifiedUserMutation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { userInfo } = useSelector((state) => state.registration);
  const { token } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // console.log(userInfo);
  // console.log(token);

  useEffect(() => {
    activateUser();
  }, []);

  const activateUser = async () => {
    try {
      setLoading(true);
      const result = await verifiedUser({
        token,
        userToken: userInfo.token,
      }).unwrap();
      setSuccess(result.message);
      setError("")
      localStorage.setItem('user', JSON.stringify({...userInfo,verified:true}))
      dispatch(loggedInUsers({...userInfo,verified:true}));
      setTimeout(() => {
        navigate('/')
      }, 3000);
    } catch (error) {
      setError(error.data.message);
      setLoading(false)
      setTimeout(() => {
        navigate('/')
      }, 3000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {success && (
        <Activate
          type="success"
          head="Account Successfully Activated"
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <Activate
          type="error"
          head="Account Activation Failed"
          text={error}
          loading={loading}
        />
      )}
      <PostHome />
    </>
  );
};

export default ActivatePage;
