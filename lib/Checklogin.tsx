"use client";

export function Checklogin(val: string) {
  if (val === "Token Expired") {
    console.log("please Login once agin");
    localStorage.removeItem("token");
  } else {
    console.log("login is mandatory");
  }

}



