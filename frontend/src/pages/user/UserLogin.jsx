import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="h-screen w-full flex flex-col">
      <img
        className="w-14  mt-8 mx-4 "
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="  flex mx-4 mt-6 flex-col h-full">
          <label
            htmlFor="email"
            className="font-semibold text-zinc-900 leading-7 text-base py-1"
          >
            What's your email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="email@example.com"
            required
            className="  text-sm rounded bg-[#eeee] py-2.5 px-3 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
          />
          <label
            htmlFor="password"
            className="font-semibold text-zinc-800 mt-3 py-1 text-base leading-7"
          >
            Enter Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="password"
            required
            className="  text-sm rounded bg-[#eeee] py-2.5 px-3 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500"
          />
          <button className="border-none p-1 font-bold text-white mt-5 leading-7 rounded w-full bg-black">
            Login
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center mt-1 w-full">
        <span className="text-xs font-medium text-zinc-800">
          {" "}
          New here ?{" "}
          <Link to="/userRegister" className="text-blue-400">
            Create new Account
          </Link>
        </span>
      </div>

      <div className=" flex mx-4 mt-6 flex-col h-full">
        <button className="border-none p-1 font-bold text-white mt-20 leading-7 text-sm rounded w-full bg-emerald-800">
          <Link to="/captainLogin">Sign In as Captain</Link>
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
