import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";

function Login() {
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        form
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-around md:justify-start md:my-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/wave.jpg')" }}
      >
        <div className="p-3 text-3xl md:text-4xl mt-4 md:mt-0 md:ml-8">
          <h1 className="font-['Roboto']">
            Collab&nbsp;
            <span className="italic text-5xl md:text-6xl font-bold text-cyan-500">
              P
            </span>
            ro
          </h1>
        </div>
        <div className="w-full max-w-md mx-4 my-8 p-6 md:mx-auto md:my-auto md:mr-20 md:p-8 space-y-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
            Login
          </h2>

          <form className="space-y-4" onSubmit={HandleSubmit}>
            <div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                required
                name="Email"
                onChange={handleChange}
              />
            </div>

            <div>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                required
                name="Password"
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
          <div className="text-center text-xs md:text-sm text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-indigo-600 hover:text-indigo-700 text-sm md:text-base"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
