import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { baseApiURL } from "../baseUrl";

const CollegeIllustration = () => (
  <div className="w-[60%] h-[100vh] bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col items-center justify-center relative overflow-hidden">
    {/* Background decorative circles */}
    <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full bg-blue-100 opacity-50" />
    <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 rounded-full bg-green-100 opacity-50" />
    <div className="absolute top-1/2 left-[-40px] w-32 h-32 rounded-full bg-blue-200 opacity-30" />

    {/* Main SVG College Building */}
    <svg
      viewBox="0 0 520 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[80%] max-w-lg drop-shadow-xl z-10"
    >
      {/* Sky background */}
      <rect width="520" height="400" fill="none" />

      {/* Ground */}
      <rect x="0" y="340" width="520" height="60" rx="4" fill="#e8f5e9" />
      {/* Ground line */}
      <line x1="0" y1="340" x2="520" y2="340" stroke="#a5d6a7" strokeWidth="2" />

      {/* Path / walkway */}
      <polygon points="220,340 300,340 280,400 240,400" fill="#c8e6c9" />
      <line x1="260" y1="340" x2="260" y2="400" stroke="#a5d6a7" strokeWidth="1" strokeDasharray="4,4" />

      {/* Trees */}
      <rect x="60" y="290" width="10" height="50" fill="#795548" />
      <circle cx="65" cy="270" r="30" fill="#4caf50" />
      <circle cx="52" cy="285" r="20" fill="#388e3c" />
      <circle cx="78" cy="283" r="22" fill="#43a047" />

      <rect x="440" y="290" width="10" height="50" fill="#795548" />
      <circle cx="445" cy="270" r="30" fill="#4caf50" />
      <circle cx="432" cy="285" r="20" fill="#388e3c" />
      <circle cx="458" cy="283" r="22" fill="#43a047" />

      {/* Small bushes */}
      <ellipse cx="155" cy="342" rx="25" ry="14" fill="#66bb6a" />
      <ellipse cx="368" cy="342" rx="25" ry="14" fill="#66bb6a" />

      {/* Main building body */}
      <rect x="100" y="160" width="320" height="180" fill="#ffffff" stroke="#90caf9" strokeWidth="2" />

      {/* Building texture - horizontal lines */}
      {[180, 200, 220, 240, 260, 280, 300, 320].map((y) => (
        <line key={y} x1="100" y1={y} x2="420" y2={y} stroke="#e3f2fd" strokeWidth="1" />
      ))}

      {/* Left wing */}
      <rect x="50" y="210" width="70" height="130" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5" />
      {/* Right wing */}
      <rect x="400" y="210" width="70" height="130" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5" />

      {/* Central portico / columns */}
      <rect x="185" y="220" width="150" height="120" fill="#e8f5e9" stroke="#a5d6a7" strokeWidth="1.5" />
      {/* Columns */}
      {[198, 218, 238, 258, 278, 298, 318].map((x) => (
        <rect key={x} x={x} y="225" width="8" height="115" rx="3" fill="#ffffff" stroke="#90caf9" strokeWidth="1" />
      ))}
      {/* Portico top beam */}
      <rect x="185" y="220" width="150" height="14" fill="#64b5f6" rx="2" />

      {/* Roof / Pediment */}
      <polygon points="155,160 260,80 365,160" fill="#64b5f6" stroke="#42a5f5" strokeWidth="2" />
      <polygon points="168,160 260,92 352,160" fill="#ffffff" stroke="#90caf9" strokeWidth="1" />

      {/* Dome on top */}
      <ellipse cx="260" cy="88" rx="30" ry="12" fill="#42a5f5" />
      <rect x="252" y="56" width="16" height="35" fill="#64b5f6" />
      <ellipse cx="260" cy="56" rx="22" ry="22" fill="#90caf9" stroke="#42a5f5" strokeWidth="2" />
      <ellipse cx="260" cy="56" rx="14" ry="14" fill="#e3f2fd" />
      {/* Flagpole */}
      <line x1="260" y1="20" x2="260" y2="56" stroke="#78909c" strokeWidth="2" />
      {/* Flag */}
      <polygon points="260,20 290,28 260,36" fill="#ef5350" />

      {/* Windows - Main building */}
      {/* Row 1 */}
      {[120, 160, 355, 395].map((x) => (
        <g key={x}>
          <rect x={x} y="180" width="30" height="35" rx="2" fill="#bbdefb" stroke="#90caf9" strokeWidth="1.5" />
          <line x1={x + 15} y1="180" x2={x + 15} y2="215" stroke="#90caf9" strokeWidth="1" />
          <line x1={x} y1="197" x2={x + 30} y2="197" stroke="#90caf9" strokeWidth="1" />
        </g>
      ))}
      {/* Row 2 */}
      {[120, 160, 355, 395].map((x) => (
        <g key={`r2-${x}`}>
          <rect x={x} y="255" width="30" height="35" rx="2" fill="#bbdefb" stroke="#90caf9" strokeWidth="1.5" />
          <line x1={x + 15} y1="255" x2={x + 15} y2="290" stroke="#90caf9" strokeWidth="1" />
          <line x1={x} y1="272" x2={x + 30} y2="272" stroke="#90caf9" strokeWidth="1" />
        </g>
      ))}

      {/* Wing windows */}
      {[60, 85].map((x) => (
        <rect key={`lw-${x}`} x={x} y="240" width="22" height="28" rx="2" fill="#bbdefb" stroke="#90caf9" strokeWidth="1.2" />
      ))}
      {[410, 435].map((x) => (
        <rect key={`rw-${x}`} x={x} y="240" width="22" height="28" rx="2" fill="#bbdefb" stroke="#90caf9" strokeWidth="1.2" />
      ))}
      {[60, 85].map((x) => (
        <rect key={`lw2-${x}`} x={x} y="285" width="22" height="28" rx="2" fill="#bbdefb" stroke="#90caf9" strokeWidth="1.2" />
      ))}
      {[410, 435].map((x) => (
        <rect key={`rw2-${x}`} x={x} y="285" width="22" height="28" rx="2" fill="#bbdefb" stroke="#90caf9" strokeWidth="1.2" />
      ))}

      {/* Main door */}
      <rect x="231" y="290" width="58" height="50" rx="4" fill="#42a5f5" stroke="#1e88e5" strokeWidth="2" />
      <rect x="231" y="290" width="28" height="50" rx="0" fill="#64b5f6" />
      <circle cx="256" cy="317" r="3" fill="#ffffff" />
      <circle cx="272" cy="317" r="3" fill="#ffffff" />
      {/* Door arch */}
      <path d="M231,295 Q260,270 289,295" fill="#bbdefb" stroke="#90caf9" strokeWidth="1.5" />

      {/* Staircase */}
      <rect x="215" y="335" width="90" height="6" fill="#b0bec5" />
      <rect x="220" y="329" width="80" height="6" fill="#cfd8dc" />
      <rect x="226" y="323" width="68" height="6" fill="#eceff1" />

      {/* Lamp posts */}
      <line x1="160" y1="310" x2="160" y2="342" stroke="#78909c" strokeWidth="3" />
      <circle cx="160" cy="306" r="6" fill="#fff9c4" stroke="#f9a825" strokeWidth="1.5" />
      <line x1="360" y1="310" x2="360" y2="342" stroke="#78909c" strokeWidth="3" />
      <circle cx="360" cy="306" r="6" fill="#fff9c4" stroke="#f9a825" strokeWidth="1.5" />

      {/* Clock on pediment */}
      <circle cx="260" cy="128" r="14" fill="white" stroke="#64b5f6" strokeWidth="2" />
      <line x1="260" y1="118" x2="260" y2="128" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="260" y1="128" x2="268" y2="133" stroke="#1e88e5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>

    {/* College name badge */}
    <div className="z-10 mt-6 text-center">
      <h2 className="text-2xl font-bold text-blue-700 tracking-wide">
        College Management System
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        Empowering Education · Simplifying Administration
      </p>
    </div>

    {/* floating stat pills */}
    <div className="z-10 flex gap-4 mt-5">
      {[
        { label: "Students", value: "2,400+", color: "bg-blue-100 text-blue-700" },
        { label: "Faculty", value: "180+", color: "bg-green-100 text-green-700" },
        { label: "Courses", value: "64", color: "bg-indigo-100 text-indigo-700" },
      ].map((s) => (
        <div key={s.label} className={`${s.color} rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm`}>
          {s.value} {s.label}
        </div>
      ))}
    </div>
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Student");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.loginid !== "" && data.password !== "") {
      const headers = { "Content-Type": "application/json" };
      axios
        .post(`${baseApiURL()}/${selected.toLowerCase()}/auth/login`, data, { headers })
        .then((response) => {
          navigate(`/${selected.toLowerCase()}`, {
            state: { type: selected, loginid: response.data.loginid },
          });
        })
        .catch((error) => {
          toast.dismiss();
          console.error(error);
          toast.error(error.response.data.message);
        });
    }
  };

  return (
    <div className="bg-white h-[100vh] w-full flex justify-between items-center">
      {/* Left: College Illustration replaces the old <img> */}
      <CollegeIllustration />

      {/* Right: Login Form — unchanged */}
      <div className="w-[40%] flex justify-center items-start flex-col pl-8">
        <p className="text-3xl font-semibold pb-2 border-b-2 border-green-500">
          {selected} Login
        </p>
        <form
          className="flex justify-center items-start flex-col w-full mt-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-[70%]">
            <label className="mb-1" htmlFor="eno">
              {selected} Login ID
            </label>
            <input
              type="number"
              id="eno"
              required
              className="bg-white outline-none border-2 border-gray-400 py-2 px-4 rounded-md w-full focus:border-blue-500"
              {...register("loginid")}
            />
          </div>
          <div className="flex flex-col w-[70%] mt-3">
            <label className="mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="bg-white outline-none border-2 border-gray-400 py-2 px-4 rounded-md w-full focus:border-blue-500"
              {...register("password")}
            />
          </div>
          <button className="bg-blue-500 mt-5 text-white px-6 py-2 text-xl rounded-md hover:bg-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all flex justify-center items-center">
            Login
            <span className="ml-2">
              <FiLogIn />
            </span>
          </button>
        </form>
      </div>

      {/* Role switcher — unchanged */}
      <div className="absolute top-4 right-4">
        {["Student", "Faculty", "Admin"].map((role) => (
          <button
            key={role}
            className={`text-blue-500 mr-6 text-base font-semibold hover:text-blue-700 ease-linear duration-300 hover:ease-linear hover:duration-300 hover:transition-all transition-all ${
              selected === role && "border-b-2 border-green-500"
            }`}
            onClick={() => setSelected(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <Toaster position="bottom-center" />
    </div>
  );
};

export default Login;