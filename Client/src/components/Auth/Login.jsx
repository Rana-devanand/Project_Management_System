import React from "react";
import { TextField } from "@mui/material";

function Login() {
  return (
    <>
      <div
        className="min-h-screen flex items-start justify-between bg-cover bg-center "
        style={{ backgroundImage: "url('/wave.jpg')" }}
      >
        <div className="p-3 text-4xl">
          <h1
            className="font-['Roboto']"
          >
            Collab <span className="italic text-6xl font-bold text-cyan-500">P</span>ro
          </h1>
        </div>
        <div className="w-full max-w-md my-auto p-8 mr-20 space-y-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Login
          </h2>

          <form className="space-y-4">

            <div>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                required
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
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </form>
          <div className="text-center text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-indigo-600 hover:text-indigo-700">Register</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
