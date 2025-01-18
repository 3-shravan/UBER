import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/captianContext";
import axios from "axios";

const CaptainRegister = () => {
  const navigate = useNavigate();
  const [captain, setCaptain] = useContext(CaptainDataContext);

  const [formdata, setFormData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      vehicleNo: "",
      vehicleType: "",
      vehicleCapacity: "",
      vehicleColor: "",
    },
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
    } else if (
      name === "vehicleNo" ||
      name === "vehicleCapacity" ||
      name === "vehicleColor" ||
      name === "vehicleType"
    ) {
      setFormData((prev) => ({
        ...prev,
        vehicle: {
          ...prev.vehicle,
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

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formdata);
    try {
      const response = await axios.post(
        "http://localhost:3000/captain/register",
        formdata
      );
      const { data, status } = response;
      if (status === 201) {
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        navigate("/captainHome");
      }
    } catch (error) {
      alert(error.response.data.error);
    } finally {
      setFormData({
        fullname: {
          firstname: "",
          lastname: "",
        },
        email: "",
        password: "",
        vehicle: {
          vehicleNo: "",
          vehicleType: "",
          vehicleCapacity: "",
          vehicleColor: "",
        },
      });
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
        <div className=" flex mx-5 mt-4 flex-col h-full">
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
            className="font-semibold text-zinc-900 leading-7  text-xl py-1 mt-3"
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
            className="font-semibold text-zinc-900 leading-7 text-xl   py-1 mt-3"
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

          <span className="font-semibold text-zinc-900 leading-7 text-xl py-1 w-full mt-3 inline-block">
            Vehicle
          </span>
          <div className="flex  flex-wrap w-full  justify-between ">
            <input
              type="text"
              name="vehicleNo"
              value={formdata.vehicle.vehicleNo}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Number"
              required
              className="  rounded  w-[10rem] mb-2 bg-[#eeee] py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
            />
            <select
              id="vehicleType"
              name="vehicleType"
              value={formdata.vehicle.vehicleType} // Bind to formdata.vehicle.vehicleType
              onChange={handleChange} // Use the same handleChange function
              className="rounded w-[10rem] mb-2 bg-[#eeee] py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500"
            >
              <option value="">Select Vehicle</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
            <input
              type="text"
              name="vehicleCapacity"
              value={formdata.vehicle.vehicleCapacity}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Capacity"
              className="  rounded bg-[#eeee] w-[10rem] mb-2 py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
            />
            <input
              type="text"
              name="vehicleColor"
              value={formdata.vehicle.vehicleColor}
              onChange={(e) => {
                handleChange(e);
              }}
              placeholder="Color"
              className="  rounded bg-[#eeee] w-[10rem] mb-2 py-3 px-4 placeholder-zinc-500 font-semibold border-none focus:outline-yellow-500 "
            />
          </div>

          <button className="border-none p-3 text-lg font-bold text-white mt-2  rounded w-full bg-black">
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
        <div className="border-none pb-2 text-center font-semibold  text-zinc-500 leading-tight flex text-xs justify-center items-center rounded w-full">
          {" "}
          <p>
            {" "}
            This side is protected by reCAPTHCA and the{" "}
            <span className="underline cursor-pointer">
              Google Policy
            </span> and{" "}
            <span className="underline cursor-pointer">
              Terms of Services Apply
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainRegister;
