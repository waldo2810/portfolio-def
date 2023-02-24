import { useDispatch, useSelector } from "react-redux";
import { BsMoonFill } from "react-icons/bs";
import { setMode } from "../utils/state/state";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Nav = () => {
  const mode = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  return (
    <div className={mode === "light" ? "light" : "dark"}>
      <nav className="dark:bg-black/10 bg-white/10 fixed top-0 w-full flex justify-between items-center h-20 z-10  p-7 backdrop-blur-sm">
        <h1 className="dark:text-white font-semibold">
          <Link to="/">&#60;wasb/&#62;</Link>
        </h1>
        <div className="flex items-center gap-3 lg:gap-5">
          <li className=" dark:text-gray-300 list-none">
            <a href="#projects" className="hover:underline">
              projects
            </a>
          </li>
          <li className=" dark:text-gray-300 list-none">
            <a href="#me" className="hover:underline">
              me
            </a>
          </li>
          <button
            className="py-2 px-2 rounded-full hover:bg-gradient-to-tr from-cyan-600 to-teal-600 hover:text-white hover:shadow-2xl transition-all"
            onClick={() => dispatch(setMode())}
          >
            <BsMoonFill className="dark:text-gray-300 text-lg" />
          </button>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Nav;
