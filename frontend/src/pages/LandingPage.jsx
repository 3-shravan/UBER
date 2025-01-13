import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="bg-cover bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen w-full flex flex-col justify-between ">
      <img
        className="w-14 my-8 mx-4"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="bg-white text-black py-1 px-3 pb-4 flex flex-col rounded">
        <h2 className="font-bold leading-loose text-[22px] text-left">
          Get Started with Uber
        </h2>
        <div className="flex items-center justify-center">
          <Link
            to="/userLogin"
            className=" flex items-center justify-center bg-black text-white font-semibold rounded w-full mt-2 p-2 "
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
