import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRegister = () => {
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
    console.log(formdata);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="flex">
        <img
          className="w-14  mt-9 ml-4 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <span className="mt-8">🚗</span>
      </div>
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className=" mx-4 mt-4 flex flex-col h-full">
          <label
            className="font-semibold text-zinc-900 leading-7 text-base py-1 w-full inline-block"
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
              className=" text-sm rounded w-1/2  bg-[#eeee] py-2.5 px-3 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
            />
            <input
              type="text"
              name="lastname"
              value={formdata.fullname.lastname}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="lastname"
              className=" text-sm rounded bg-[#eeee] w-1/2 py-2.5 px-3 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
            />
          </div>

          <label
            className="font-semibold text-zinc-900 leading-7 text-base py-1"
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
            className=" text-sm rounded bg-[#eeee] py-2.5 px-3 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
          />
          <label
            className="font-semibold text-zinc-900 leading-7 text-base py-1"
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
            className=" text-sm rounded bg-[#eeee] py-2.5 px-3 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
          />
          <button className="border-none p-1 font-bold text-white mt-5 leading-7 rounded w-full bg-black">
            Sign In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mt-1 w-full">
        <span className="text-xs font-medium text-zinc-800">
          Already have a Account?{" "}
          <Link to="/userLogin" className="text-blue-400">
            Login here
          </Link>
        </span>
      </div>
      <div className=" flex mx-4 mt-6 flex-col h-full">
        <button className="border-none p-1 font-bold text-white mt-1 leading-7 text-sm rounded w-full bg-emerald-800">
          <Link to="/userLogin">Sign In as Captain</Link>
        </button>
      </div>
    </div>
  );
};

export default UserRegister;
