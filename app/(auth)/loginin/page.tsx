'use client'

import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { log } from "console";

export default function LoginPage() {
    const [showpass, setShowpass] = useState(false);
    const [loginData, setloginData] = useState({ 'email': '', 'password': '' })

    function handleData(e: any) {
        // e.preventDefault();
        const { name, value } = e.target;

        setloginData((pre) => ({ ...pre, [name]: value }));
    }

    async function submitData(e: any) {
        e.preventDefault();
        // console.log(loginData);

        const loginApi = await fetch('api/login/', {
            method: 'POST', headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({ email: loginData.email, password: loginData.password })
        })

        const reposneApi = await loginApi.json();
        console.log(reposneApi);
        

    }

    return (
        // Changed from fixed inset-0 to min-h-screen with flex centering
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md border border-gray-100">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Please enter your details to sign in
                    </p>
                </div>

                <form className="space-y-5" onSubmit={submitData}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            required
                            name="email"
                            onChange={handleData}
                            placeholder="name@company.com"
                            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <Link
                                href="/forgetpassword"
                                className="text-xs text-blue-600 hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <div className="relative">
                            <input
                                type={showpass ? "text" : "password"}
                                required
                                name="password"
                                onChange={handleData}
                                placeholder="Enter Password"
                                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 text-black focus:ring-blue-500 focus:border-blue-500 outline-none pr-10 transition-all"
                            />

                            <button
                                type="button"
                                onClick={() => setShowpass(!showpass)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                            >
                                {showpass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-md shadow-sm transition-colors mt-2">
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="px-3 text-gray-400 text-xs uppercase tracking-wider">or</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    {/* Google Sign In Button */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-md hover:bg-gray-50 transition-colors bg-white shadow-sm"
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        <span className="text-gray-700 font-medium text-sm">
                            Continue with Google
                        </span>
                    </button>
                </form>

                {/* Footer Link */}
                <div className="mt-8 text-center border-t border-gray-100 pt-6">
                    <p className="text-sm text-gray-600">
                        Don't have an account?
                        <Link
                            href="/signin"
                            className="text-blue-600 font-bold hover:underline"
                        >
                            Sign up for free
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}