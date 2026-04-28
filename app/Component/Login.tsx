import Link from "next/link";
import { X } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type Props = {
  closepop: () => void;
};

export default function Login({ closepop }: Props) {
  const [showpass, setShowpass] = useState(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={closepop}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 text-black focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>

           
            <div className="relative">
              <input
                type={showpass ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 text-black focus:ring-blue-500 outline-none pr-10"
              />

              <button
                type="button"
                onClick={() => setShowpass(!showpass)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
              >
                {showpass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition">
            Sign In
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Sign In Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-50 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="text-gray-700 font-medium">
              Continue with Google
            </span>
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-6 flex justify-between text-sm w-full">
          <Link
            href="/forgetpassword"
            className="text-blue-600 hover:underline block"
          >
            Forgot password?
          </Link>
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
