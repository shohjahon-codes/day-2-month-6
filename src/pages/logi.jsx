import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";

export const Login = () => {
    const { handleSubmit ,reset , register }= useForm();
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6">
            Tizimga Kirish
          </h2>
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Ism
              </label>
              <input
              
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ismingiz"
                {...register('name')}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Emailingiz"
                {...register('email')}
              />
            </div>
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Parol
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Parolingiz"
                {...register('password')}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Log In
            </button>
          </form>
          <Link  className="text-blue-700 pl-[80px] font-semibold hover:text-blue-300 transition duration-200" to={"/register"}>registratsiyadan o'tish</Link>
        </div>
      </div>
     
    </div>
  );
};
