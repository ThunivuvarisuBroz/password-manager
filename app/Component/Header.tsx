"use client";

import React, { useEffect, useState } from "react";
import { UserCircle, LogIn, LogOut, Link2Off } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/img/gitup.png";
import { useRouter } from "next/navigation";



const Header = () => {
  // const [popup, setPopup] = useState(false);
  const [loginText, setloginText] = useState(false);
  const naviagte = useRouter();
  function getData() {
    return localStorage.getItem('token');
  }
  // const jwt_verify: string = '';
  useEffect(() => {
    const jwt_verify = getData()

    setloginText(!!jwt_verify)

    console.log(loginText ? 'logout' : 'login');

  }, [])

  function logout() {
    localStorage.removeItem('token')
    console.log('logout');
    setloginText(!loginText)

  }
  function login() {

    naviagte.push('/loginin')
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <Image src={logo} width={30} height={30} alt="logo" />
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Work <span className="text-indigo-600">flow</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        < p
          onClick={() => { loginText ? logout() : login() }}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer transition-colors hover:text-indigo-600"
        >

          {
            loginText ? (<span className="flex justify-center items-center text-red-600"><LogOut size={18} /> Logout</span>) : (<span className="flex justify-center items-center gap-2 text-indigo-600"><LogIn size={18} /> Login</span>)
          }
        </p>

        <div className="w-px h-6 bg-gray-200" />

        <button className="flex items-center justify-center transition-transform hover:scale-105" onClick={() => { naviagte.push('/profile') }}>
          <div className="p-1 border-2 border-transparent rounded-full hover:border-indigo-100">
            <UserCircle
              size={32}
              strokeWidth={1.5}
              className="text-gray-600 hover:text-indigo-600"
            />
          </div>
        </button>
      </div>
    </header >
  );
};

export default Header;
