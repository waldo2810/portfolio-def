import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import MainSection from "../components/Main";
import Projects from "../components/Projects";
import Connect from "../components/Connect";
import Me from "../components/Me";
import Footer from "../components/Footer";

const Home = () => {
  const mode = useSelector((state) => state.mode);
  return (
    <div className={mode === "light" ? "light" : "dark"}>
      <div className="bg-white w-full">
        <div className="dark:bg-black absolute left-0 top-0 w-full">
          <MainSection />
          <Projects />
          <Me />
          <Connect />
          <Footer />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
