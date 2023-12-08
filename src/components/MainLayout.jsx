import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <section className="bg-dark-200 text-light-200 px-[5%]">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
