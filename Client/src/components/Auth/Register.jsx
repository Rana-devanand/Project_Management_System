import React from "react";
import { TextField } from "@mui/material";

function Register() {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between bg-cover bg-center px-4 md:px-0"
      style={{ backgroundImage: "url('/wave.jpg')" }}
    >
      <div className="p-3 text-4xl pt-6 md:pt-3">
        <h1 className="font-['Roboto']">
          Collab{" "}
          <span className="italic text-6xl font-bold text-cyan-500">P</span>ro
        </h1>
      </div>
      <div className="w-full max-w-md my-8 md:my-auto p-6 md:p-8 mx-4 md:mr-20 space-y-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h2>

        <form className="space-y-4">
          <div>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              required
            />
          </div>

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
            Register
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account? &nbsp; 
            <a href="/" className="text-indigo-600 hover:text-indigo-700">
              Login
            </a>
           <br />
            <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-700">
              Forgot Password?
            </a>
            
            <br />
            <a href="/terms-and-conditions" className="text-indigo-600 hover:text-indigo-700">
              Terms & Conditions
            </a>{" "}
            (Coming Soon){" "}
            <br />
            <a href="/privacy-policy" className="text-indigo-600 hover:text-indigo-700">
              Privacy Policy
            </a>{" "}
            (Coming Soon){" "}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
