"use client";

import React, { useState } from "react";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors();

    try {
      const response = await fetch("/api/Users", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "content-type": "application/json",
      });

      console.log(formData);
      console.log(response);

      if (!response.ok) {
        const res = await response.json();

        setErrors(res.message);
      } else {
        router.refresh();
        alert("User created successfully.");
        router.push("/");
      }
      console.log(response);
    } catch (ex) {
      console.log("error");
    }
  };
  return (
    <div className="bg-[#2FBDA4] py-4">
      {/* <AdminNavbar /> */}
      <div className="flex flex-col items-center md:mt-20 mt-24 ">
        <h2 className="text-3xl font-bold mb-4 text-white font-Roboto">
          User Registration
        </h2>
        <form className="w-3/4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-md font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
            {/* {errors.name && <p className="text-red-500">{errors.name}</p>} */}
          </div>

          <div className="mb-4">
            <label
              className="block text-white text-md font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className=" border rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your Email"
              onChange={handleChange}
            />
            {/* {errors.email && <p className="text-red-500">{errors.email}</p>} */}
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-md font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your Password"
              onChange={handleChange}
            />
            {/* {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )} */}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create User
          </button>
        </form>
        <p className="text-red-500">{errors}</p>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default UserForm;
