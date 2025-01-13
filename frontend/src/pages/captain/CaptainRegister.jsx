import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainRegister = () => {
  const [formdata, setFormData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstname" || name === "lastname") {
      setFormData((prev) => ({
        ...prev,
        fullname: {
          ...prev.fullname,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      fullname: {
        firstname: "",
        lastname: "",
      },
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex gap-1 ">
        <div>
          <img
            className="w-16  mt-11 ml-5"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt=""
          />
        </div>
        <span className="mt-[34px]  text-2xl ">🚗</span>
      </div>

      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className=" flex mx-5 mt-8 flex-col h-full">
          <label
            className="font-semibold text-zinc-900 leading-7 text-xl py-1 w-full inline-block"
            htmlFor="firstname"
          >
            What's your Name
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              name="firstname"
              value={formdata.fullname.firstname}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="firstname"
              required
              className="  rounded w-1/2  bg-[#eeee] py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
            />
            <input
              type="text"
              name="lastname"
              value={formdata.fullname.lastname}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="lastname"
              className="  rounded bg-[#eeee] w-1/2 py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
            />
          </div>

          <label
            className="font-semibold text-zinc-900 leading-7  text-xl py-1 mt-4"
            htmlFor="email"
          >
            What's your Email
          </label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="email@example.com"
            required
            className="  rounded bg-[#eeee] py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
          />
          <label
            className="font-semibold text-zinc-900 leading-7 text-xl   py-1 mt-4"
            htmlFor="password"
          >
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            value={formdata.password}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="password"
            required
            className="  rounded bg-[#eeee] py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
          />
          <button className="border-none p-3 text-lg font-bold text-white mt-6  rounded w-full bg-black">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mt-1.5 w-full">
        <span className="text-sm font-medium text-zinc-800">
          Already have a Account?{" "}
          <Link to="/captainLogin" className="text-blue-400">
            Login here Captain
          </Link>
        </span>
      </div>
      <div className=" flex mx-5 flex-col h-full  justify-end ">
        <div className="border-none p-3 font-bold text-white flex mb-10 justify-center items-center leading-7 rounded w-full bg-yellow-500">
          <Link to="/userLogin">Sign In as User</Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainRegister;
