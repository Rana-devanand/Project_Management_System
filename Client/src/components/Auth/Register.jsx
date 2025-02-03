import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import axios from "axios";

function Register() {
  const [form, setFormValue] = useState({
    Name: "",
    Email: "",
    Password: "",
    Role: "",
  });

  const HandleChange = (e) => {
    setFormValue({ ...form, [e.target.name]: e.target.value });
  };

  //localhost:5000/api/V1/user/register
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/register`,
        form
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="w-full max-w-md my-8 md:my-auto p-4 md:p-8 mx-4 md:mr-20 space-y-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Register
        </h2>

        <form className="space-y-4" onSubmit={HandleSubmit}>
          <div>
            <TextField
              type="text"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth
              required
              name="Name"
              onChange={HandleChange}
            />
          </div>

          <div>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="Email"
              required
              onChange={HandleChange}
            />
          </div>

          <div>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              name="Password"
              fullWidth
              required
              onChange={HandleChange}
            />
          </div>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={form.Role}
              label="Role"
              name="Role"
              onChange={HandleChange}
            >
              <MenuItem value={1}>Team leader</MenuItem>
              <MenuItem value={2}>Project Manager</MenuItem>
              <MenuItem value={3}>Employee</MenuItem>
              <MenuItem value={4}>HR</MenuItem>
            </Select>
          </FormControl>

          <button
            type="submit"
            className="w-full mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <p className="text-center text-sm text-gray-500">
            Already have an account? &nbsp;
            <a href="/" className="text-indigo-600 hover:text-indigo-700">
              Login
            </a>
            <br />
            <a
              href="/forgot-password"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Forgot Password?
            </a>
            <br />
            <a
              href="/terms-and-conditions"
              className="text-indigo-600 hover:text-indigo-700"
            >
              Terms & Conditions
            </a>{" "}
            (Coming Soon) <br />
            <a
              href="/privacy-policy"
              className="text-indigo-600 hover:text-indigo-700"
            >
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
