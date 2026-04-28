"use client";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./sidebar";
import Login from "./Login";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <Header openpop={() => setPopup(true)} />

      {popup && <Login closepop={() => setPopup(false)} />}

      <div className="flex flex-1 overflow-hidden bg-white/40">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </>
  );
}
