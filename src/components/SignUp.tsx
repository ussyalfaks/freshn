import React from 'react';
import {  FaApple } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";


import { Phone } from 'lucide-react';

export default function SignUp() {
  return (
    <div className="flex-grow  flex flex-col justify-center py-12 sm:px-6 lg:px-8 overflow-hidden">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome to Freshinn
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Sign in or Create an account.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4  sm:px-10">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none bg-[#F9F9F9] font-medium block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter Email"
                />
              </div>
            </div>

            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="space-y-6">
              <button
                type="button"
                className="w-full flex items-center px-4 py-3 border border-gray-300 rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="flex-grow text-center">Sign in with Phone Number</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center px-4 py-3 border border-gray-300 rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FcGoogle className="h-5 w-5  flex-shrink-0" />
                <span className="flex-grow text-center">Sign in with Google</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center px-4 py-3 border border-gray-300 rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaApple className="h-5 w-5  flex-shrink-0" />
                <span className="flex-grow text-center">Sign in with Apple</span>
              </button>

              <button
                type="button"
                className="w-full flex items-center px-4 py-3 border border-gray-300 rounded-md  text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <TfiFacebook className="h-5 w-5 text-[#3C5A99] flex-shrink-0" />
                <span className="flex-grow text-center">Sign in with Facebook</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}