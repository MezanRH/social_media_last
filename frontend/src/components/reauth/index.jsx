import React, { useState } from "react";
import { useReVerificationMutation } from "../../features/api/authApi";

const ReAuth = (userInfo) => {
  const [reVerification] = useReVerificationMutation();
  const [Success, setSuccess] = useState();
  const [error, setError] = useState();

  const resendCode = async () => {
    try {
      let result = await reVerification(userInfo.token).unwrap();
      setSuccess(result.message);
    } catch (error) {
      setError(error.data.message);
    }
  };

  return (
    <div className="w-full p-4 shadow-md rounded-md bg-white mt-5 font-noto">
      <h4 className="text-black font-normal text-base">
        Your account is not verified. Please verify your account befor it gets
        delete after an hour of creating
      </h4>
      <button
        onClick={resendCode}
        className="font-normal text-blue text-base cursor-pointer hover:underline"
      >
        Click here to re-send verification link
      </button>
      {Success && (
        <p className="font-noto font-normal text-base text-green">{Success}</p>
      )}
      {Success && (
        <p className="font-noto font-normal text-base text-red">{error}</p>
      )}
    </div>
  );
};

export default ReAuth;
