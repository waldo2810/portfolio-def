import { Route, Routes, Link } from "react-router-dom";
import ProjectDetails from "../routes/ProjectDetails";
const Project = ({ pictureUrl, title, description }) => {
  return (
    <div className="grid lg:grid-cols-2 lg:mt-0 mt-10">
      <img src={pictureUrl} alt="project" />
      <div className="flex flex-col justify-center px-10 gap-10 lg:pt-0 pt-10">
        <h2 className="dark:text-white font-bold text-2xl">{title}</h2>
        <p className="dark:text-white text-sm leading-7">{description}</p>
        <Link to={`projects/${title.replace(/\s+/g, "-")}`}>
          <button className="dark:text-white border-2 border-teal-600 hover:bg-gradient-to-r from-cyan-600 to-green-600 hover:text-white p-2 rounded-3xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-200 w-60">
            See more
          </button>
        </Link>
      </div>
      {/* <Routes>
        <Route
          path=":project"
          element={
            <ProjectDetails
              title={title}
              pictureUrl={pictureUrl}
              description={description}
            />
          }
        />
      </Routes> */}
    </div>
  );
};

export default Project;
