"use client";

import Header from "../Component/Header";
import Sidebar from "../Component/sidebar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col h-screen bg-white"> {/* ✅ FIX */}
            <Header />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar />

                <main className="flex-1 overflow-y-auto p-6 bg-white">
                    {children}
                </main>
            </div>
        </div>
    );
}