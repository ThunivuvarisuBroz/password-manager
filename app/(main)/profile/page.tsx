import React from 'react';
import { User, Mail, Phone, Calendar, MapPin, Lock } from 'lucide-react';

export default function ProfilePage() {
    return (
        <div className="min-h-screen text-slate-100 p-4 md:p-8 flex justify-center items-center">
            <div className="w-full max-w-4xl backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 space-y-8">

                {/* Profile Header Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 pb-6 border-b border-slate-800">
                    <div className="relative group">
                        <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/10 bg-slate-800 flex items-center justify-center">
                            <User className="w-12 h-12 text-indigo-400" />
                        </div>
                        <div className="absolute inset-0 bg-indigo-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-600">
                                    John Doe
                                </h1>
                                <p className="text-sm text-indigo-500 font-black italic tracking-wide uppercase mt-1">
                                    Elite Member
                                </p>
                            </div>
                            <span className="px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit mx-auto md:mx-0">
                                Active Account
                            </span>
                        </div>

                    </div>
                </div>


                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-slate-200 tracking-wide">
                            Personal Information
                        </h2>
                        <span className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-md font-medium">
                            Editable Fields
                        </span>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            {/* Email Input */}
                            <div className="flex items-center gap-4 p-4 border border-slate-800/80 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-slate-800/60 transition-all duration-200">
                                <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    {/* Fixed: Matched htmlFor to the correct input id, and handled the background transition cleanly */}
                                    <label
                                        htmlFor="bio"
                                        className="inline-block text-xs text-indigo-400 font-medium uppercase tracking-wider mb-1 rounded px-1 transition-all duration-200 focus-within:text-white"
                                    >
                                        Bio
                                    </label>
                                    <input
                                        id="bio"
                                        type="text"
                                        defaultValue="Elite Member"
                                        className="w-full bg-transparent text-sm font-medium text-white placeholder-slate-500 border-0 p-0 outline-none focus:ring-0"
                                        placeholder="Enter bio details"
                                    />
                                </div>
                            </div>

                            {/* Phone Input */}
                            <div className="flex items-center gap-4 p-4 bg-slate-800/40 border border-slate-800/80 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-slate-800/60 transition-all duration-200">
                                <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label htmlFor="phone" className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        defaultValue="+1 (555) 019-2834"
                                        className="w-full bg-transparent text-sm font-medium text-slate-200 placeholder-slate-600 border-0 p-0 focus:ring-0 focus:outline-none"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>

                            {/* Date of Birth Input */}
                            <div className="flex items-center gap-4 p-4 bg-slate-800/40 border border-slate-800/80 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-slate-800/60 transition-all duration-200">
                                <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label htmlFor="dob" className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                                        Date of Birth
                                    </label>
                                    <input
                                        id="dob"
                                        type="text"
                                        defaultValue="January 15, 1998"
                                        className="w-full bg-transparent text-sm font-medium text-slate-200 placeholder-slate-600 border-0 p-0 focus:ring-0 focus:outline-none"
                                        placeholder="Enter date of birth"
                                    />
                                </div>
                            </div>

                            {/* Address Input */}
                            <div className="flex items-center gap-4 p-4  border border-slate-800/80 rounded-xl focus-within:border-indigo-500/50 focus-within:bg-slate-800/60 transition-all duration-200">
                                <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <label htmlFor="address" className="block text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">
                                        Address
                                    </label>
                                    <input
                                        id="address"
                                        type="text"
                                        defaultValue="123 Luxury Suite, Silicon Valley, CA"
                                        className="w-full bg-transparent text-sm font-medium text-slate-200 placeholder-slate-600 border-none outline-0 p-0 focus:ring-0  focus:border-b-indigo-600 transition-all"
                                        placeholder="Enter address"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Form Action Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20"
                            >
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>

                {/* Bottom Modification Forms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">

                    {/* Form 1: Change Email */}
                    <div className="bg-slate-800/30 border border-slate-800/60 rounded-xl p-5 space-y-4">
                        <div className="flex items-center gap-2 text-slate-200 font-semibold">
                            <Mail className="w-4 h-4 text-indigo-400" />
                            <h3>Update Email Address</h3>
                        </div>
                        <form className="space-y-3">
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1">New Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter new email"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm py-2 px-4 rounded-lg transition-colors shadow-lg shadow-indigo-600/10"
                            >
                                Save New Email
                            </button>
                        </form>
                    </div>

                    {/* Form 2: Change Password */}
                    <div className="bg-slate-800/30 border border-slate-800/60 rounded-xl p-5 space-y-4">
                        <div className="flex items-center gap-2 text-slate-200 font-semibold">
                            <Lock className="w-4 h-4 text-indigo-400" />
                            <h3>Change Password</h3>
                        </div>
                        <form className="space-y-3">
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1">Current Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-slate-400 mb-1">New Password</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium text-sm py-2 px-4 rounded-lg transition-colors"
                            >
                                Update Password
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}