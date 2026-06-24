"use client";

import AuthToken from "../Component/AuthToken";
import Header from "../Component/Header";
import Sidebar from "../Component/sidebar";
import  { Toaster } from 'react-hot-toast';



export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <AuthToken>
            <div className="flex flex-col h-screen bg-white">
                <Header />

                <div className="flex flex-1 overflow-hidden">
                    <Sidebar />

                    <main className="flex-1 overflow-y-auto p-6 bg-white">
                        <Toaster />
                        {children}
                    </main>
                </div>
            </div>
        </AuthToken>
    );
}