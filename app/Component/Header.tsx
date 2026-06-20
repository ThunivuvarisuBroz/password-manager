"use client";

import React, { useContext } from "react";
import { UserCircle, LogIn, LogOut } from "lucide-react";
import Image from "next/image";
import logo from "../../public/assets/img/gitup.png";
import { useRouter } from "next/navigation";
import { AuthTokenHeader } from "./AuthToken";

const Header = () => {
  const navigate = useRouter();

  const auth = useContext(AuthTokenHeader);

  if (!auth) return null;

  const [token, setToken] = auth;

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    console.log("logout");
  }

  function login() {
    navigate.push("/loginin");
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
        <p
          onClick={() => {
            token ? logout() : login();
          }}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 cursor-pointer transition-colors hover:text-indigo-600"
        >
          {token ? (
            <span className="flex justify-center items-center text-red-600 gap-2">
              <LogOut size={18} />
              Logout
            </span>
          ) : (
            <span className="flex justify-center items-center gap-2 text-indigo-600">
              <LogIn size={18} />
              Login
            </span>
          )}
        </p>

        <div className="w-px h-6 bg-gray-200" />

        <button
          className="flex items-center justify-center transition-transform hover:scale-105"
          onClick={() => navigate.push("/profile")}
        >
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