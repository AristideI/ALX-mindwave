import { Link } from "react-router-dom";
import LogoIcon from "../assets/LogoIcon";

export default function Header() {
  return (
    <section className="flex justify-between items-center py-6">
      <section className="flex justify-start items-center gap-4 font-serif font-bold text-xl">
        <LogoIcon classes="text-dark-100 w-8 h-8" />
        <p>Mind Wave</p>
      </section>
      <section className="flex justify-between items-center gap-20">
        <div className="flex justify-between items-center gap-6 md:hidden">
          <a className="hover:underline" href="#about">
            About
          </a>
          <a className="hover:underline" href="#how">
            How It Works
          </a>
          <a className="hover:underline" href="#mental">
            Mental Health
          </a>
          <a className="hover:underline" href="#meet">
            Team
          </a>
          <a className="hover:underline" href="#testimonials">
            Testimonials
          </a>
        </div>
        <Link
          to="/login"
          className="bg-dark-100 text-dark-200 font-semibold px-6 py-2"
        >
          Get Started
        </Link>
      </section>
    </section>
  );
}
