import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "./LatestNews";
import Navbar from "./Navbar";

const HomeLayout = () => {
  return (
    <div className="container">
      <Header />
      <LatestNews />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;