import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";

export default function MainProtectedLayout() {
  return (
    <article className="relative flex justify-end text-light-200">
      <section className="w-1/5 h-screen fixed left-0 top-0 pl-6 py-12">
        <section className="flex justify-start items-center gap-4 font-serif font-bold text-xl">
          <LogoIcon classes="text-dark-100 w-10 h-10" />
          <p className="text-2xl">Mind Wave</p>
        </section>
        <section>
          <Link to="/feeds">Home</Link>
        </section>
      </section>
      <section className="w-4/5 h-screen bg-green-500">hero</section>
    </article>
  );
}
