"use client";

import React, { useState } from "react";
import { UserCircle, LogIn } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/img/gitup.png";
import Login from "./Login";

type loginp = {
  openpop: () => void;
};

const Header = ({ openpop }: loginp) => {
  const [popup, setPopup] = useState(false);
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <Image src={logo} width={30} height={30} alt="logo" />
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Work <span className="text-indigo-600">flow</span>
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={openpop}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-indigo-600"
        >
          <LogIn size={18} />
          <span>Login</span>
        </button>

        <div className="w-px h-6 bg-gray-200" />

        <button className="flex items-center justify-center transition-transform hover:scale-105">
          <div className="p-1 border-2 border-transparent rounded-full hover:border-indigo-100">
            <UserCircle
              size={32}
              strokeWidth={1.5}
              className="text-gray-600 hover:text-indigo-600"
            />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
