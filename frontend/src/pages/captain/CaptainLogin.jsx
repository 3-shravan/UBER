import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/captianContext";
import axios from "axios";

const CaptainLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [captain, setCaptain] = useContext(CaptainDataContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/captain/login",
        formData
      );
      const { data, status } = response;
      if (status === 200) {
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        navigate("/captainHome");
      }
    } catch (error) {
      alert(error.response.data.message);
    } finally {
      setFormData({ email: "", password: "" });
    }
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
        <div className="  flex mx-5 mt-8 flex-col h-full">
          <label
            htmlFor="email"
            className="font-semibold text-zinc-900 leading-7 text-xl py-1"
          >
            What's your Email
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
            className="  rounded bg-[#eeee] py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
          />
          <label
            htmlFor="password"
            className="font-semibold text-zinc-900 leading-7 mt-4 text-xl py-1"
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
            className="rounded bg-[#eeee] py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500"
          />
          <button className="border-none p-3 text-lg font-bold text-white mt-6  rounded w-full bg-black">
            Login
          </button>
        </div>
      </form>

      <div className="flex items-center justify-center mt-1.5 w-full">
        <span className="text-sm font-medium text-zinc-800">
          {" "}
          Join a fleet?{" "}
          <Link to="/captainRegister" className="text-blue-400">
            Register as a Captain
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

export default CaptainLogin;
