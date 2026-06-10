'use client'
import { createContext, useEffect, useState } from "react";

export const AuthHead = createContext<any>(null);

export function AuthProvider({ children }: any) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
  }, []);

  return (
    <AuthHead.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthHead.Provider>
  );
}
