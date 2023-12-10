import { useState } from "react";
import LoginImg from "../assets/LoginImg";
import LogoIcon from "../assets/LogoIcon";
import { Link } from "react-router-dom";

export default function Login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  function handleFormChange(e) {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleLogin() {}
  return (
    <article className="flex max-h-[85vh] text-dark-200 rounded-2xl overflow-hidden mx-80 md:mx-0 mb-20 mt-4">
      <section className="w-1/2 md:w-full bg-light-200 flex flex-col gap-8 py-4 justify-around items-center">
        <div className="flex items-center gap-4">
          <LogoIcon classes="w-16 md:w-12" />
          <p className="font-serif font-bold text-3xl md:text-2xl">Mind Wave</p>
        </div>
        <p className="font-bold text-5xl md:text-4xl">Welcome Back</p>
        <form className="flex flex-col w-1/2 gap-6 md:w-4/5">
          <input
            className="bg-transparent border-2 border-dark-200 rounded-xl px-4 py-2 w-full"
            type="text"
            placeholder="Username"
            value={userInfo.username}
            name="username"
            onChange={(event) => handleFormChange(event)}
          />
          <input
            className="bg-transparent border-2 border-dark-200 rounded-xl px-4 py-2 w-full"
            type="password"
            placeholder="Password"
            name="password"
            value={userInfo.password}
            onChange={(event) => handleFormChange(event)}
          />
          <button
            className="bg-dark-200 text-light-200 font-bold text-xl border-2 border-dark-200 rounded-xl px-4 py-2 w-full"
            onClick={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            Log In
          </button>
        </form>
        <p>
          {`
          Don't have an Account yet? 
        `}
          <Link to="/signup" className="font-bold underline">
            Sign Up
          </Link>
        </p>
      </section>
      <section className="w-1/2 bg-dark-100 md:hidden">
        <LoginImg classes="h-full w-full object-contain" />
      </section>
    </article>
  );
}
