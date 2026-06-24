"use client";

export function Checklogin(val: string) {
  if (val === "Token Expired" || val === null) {
    return "Token Expired, please Login once agin";
    localStorage.removeItem("token");
  } else {
    return "proceed";
  }
}
