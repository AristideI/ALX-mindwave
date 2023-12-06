import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout, {
  loader as mainLayoutLoader,
} from "./components/MainLayout";
import Home, { loader as homePageLoader } from "./pages/Home";
import BookCar, { loader as bookCarLoader } from "./pages/renter/BookCar";
import MyBookings from "./pages/renter/MyBookings";
import CarDetails from "./pages/renter/CarDetails";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import AddCar from "./pages/owner/AddCar";
import MyCars from "./pages/owner/MyCars";
import MyCarBookings from "./pages/owner/MyCarBookings";
import Landing, { loader as landingLoader } from "./pages/Landing";
import Login, { loader as loginLoader } from "./pages/Login";
import BookMyCar from "./pages/owner/PickDate";
import Profile, { loader as profileLoader } from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Landing />} loader={landingLoader} />
      <Route path="login" element={<Login />} loader={loginLoader} />
      <Route element={<MainLayout />} loader={mainLayoutLoader}>
        <Route path="home" element={<Home />} loader={homePageLoader} />
        <Route path="book" element={<BookMyCar />} />
        <Route path="mycars" element={<MyCars />} />
        <Route path="mycars/:id" element={<CarDetails />} />
        <Route path="bookcar" element={<BookCar />} loader={bookCarLoader} />
        <Route path="bookcar/:id" element={<CarDetails />} />
        <Route path="mybooking" element={<MyBookings />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="addcar" element={<AddCar />} />
        <Route path="mycarbookings" element={<MyCarBookings />} />
        <Route path="profile" element={<Profile />} loader={profileLoader} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router} />;
}
