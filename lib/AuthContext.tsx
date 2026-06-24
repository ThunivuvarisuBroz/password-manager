"use client";
import { createContext, useEffect, useState } from "react";

export const AuthHead = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [isLogin, setIsLogin] = useState(false);
  const [tokenValue, setTokenValue] = useState<string | null>(null);

  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
    setTokenValue(localStorage.getItem("token"));
  }, []);

  return (
    <AuthHead.Provider value={{ isLogin, setIsLogin, tokenValue }}>
      {children}
    </AuthHead.Provider>
  );
}
