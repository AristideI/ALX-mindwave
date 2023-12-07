import { NavLink, Outlet } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";

export default function MainProtectedLayout() {
  return (
    <article className="relative flex justify-end text-light-200">
      <section className="w-1/5 h-screen fixed left-0 top-0 px-6 py-12 flex flex-col justify-between border-r-2 border-light-200">
        <section className="flex justify-start items-center gap-4 font-serif font-bold text-xl">
          <LogoIcon classes="text-dark-100 w-10 h-10" />
          <p className="text-2xl">Mind Wave</p>
        </section>
        <section className="flex flex-col gap-3">
          <NavLink
            to="/feeds"
            className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
          >
            <img
              className="w-8 object-contain"
              src="./public/home.png"
              alt="home icon"
            />
            <p className="font-semibold text-xl">Home</p>
          </NavLink>
          <NavLink
            to="/quiz"
            className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
          >
            <img
              className="w-8 object-contain"
              src="./public/quizzes.png"
              alt="Quiz icon"
            />
            <p className="font-semibold text-xl">Quizzes</p>
          </NavLink>
          <NavLink
            to="/daily"
            className="flex items-center gap-6 py-2 hover:bg-dark-100 hover:text-dark-200"
          >
            <img
              className="w-8 object-contain"
              src="./public/motivation.png"
              alt="Motivationo icon"
            />
            <p className="font-semibold text-xl">Motivation</p>
          </NavLink>
        </section>
        <section className="flex items-center gap-6">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src="./public/sample.jpg"
            alt="profile img"
          />
          <div>
            <p className="font-bold text-xl">Aristide Isingizwe</p>
            <p>@AngryWolf</p>
          </div>
        </section>
      </section>
      <section className="w-4/5">
        <Outlet />
      </section>
    </article>
  );
}
