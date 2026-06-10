"use client";

import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Camera,
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
} from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
  const [showPass, setShowPass] = useState({ pass: false, cnfPass: false });
  const [imagefile, setImagefile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [signin, setSignin] = useState({
    fullname: "",
    email: "",
    phone: "",
    dob: "",
    password: "",
    cnf_password: "",
  });

  function dataChnage(e: any) {
    const { name, value } = e.target;
    setSignin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleImageChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      setImagefile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (signin.password === signin.cnf_password) {
      console.log("ok equal");
      const data = new FormData();
      data.append("fullname", signin.fullname);
      data.append("email", signin.email);
      data.append("phone", signin.phone);
      data.append("dob", signin.dob);
      data.append("password", signin.password);
      if (imagefile) {
        data.append("profile", imagefile);
      }

      const signApi = await fetch("api/signin", {
        method: "POST",
        body: data,
      });

      const response = await signApi.json();
      console.log(response);
    } else {
      console.log("password Mismatch");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Visual/Welcome (Optional but looks great) */}
        <div className="hidden md:flex md:w-1/3 bg-blue-600 p-10 flex-col justify-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Us!</h2>
          <p className="text-blue-100">Create your account to Grow with Us.</p>
        </div>
        <div className="p-8 md:p-12 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Sign Up</h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-6 mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden bg-gray-50">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-gray-300" />
                  )}
                </div>
                <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition shadow-md">
                  <Camera className="w-4 h-4 text-white" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700">
                  Profile Picture
                </h3>
                <p className="text-xs text-gray-500">
                  JPG, PNG or GIF. Max size 2MB
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    name="fullname"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={dataChnage}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    name="email"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={dataChnage}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="+1 234 567 890"
                    name="phone"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={dataChnage}
                  />
                </div>
              </div>

              {/* DOB */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    name="dob"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-gray-700"
                    onChange={dataChnage}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type={showPass.pass ? "text" : "password"}
                    placeholder="••••••••"
                    name="password"
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={dataChnage}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPass((prev) => ({ ...prev, pass: !prev.pass }))
                    }
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPass.pass ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type={showPass.cnfPass ? "text" : "password"}
                    placeholder="••••••••"
                    name="cnf_password"
                    className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={dataChnage}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPass((prev) => ({
                        ...prev,
                        cnfPass: !prev.cnfPass,
                      }))
                    }
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPass.cnfPass ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 shadow-md">
              Register Account
            </button>

            <Link
              href="/loginin"
              className="text-center text-sm text-gray-600 mt-4"
            >
              Already have an account?{" "}
              <span className="text-blue-600 font-bold cursor-pointer hover:underline">
                Log in
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
