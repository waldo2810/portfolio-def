import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { projectData } from "../utils/project-data";

const ProjectDetails = () => {
  const mode = useSelector((state) => state.mode);
  const { projectName } = useParams();
  const project = projectData.find((project) => project.title === projectName);
  return (
    <div className={mode === "light" ? "light" : "dark"}>
      <div className="dark:bg-black dark:text-white">
        <div className="flex flex-col  w-4/5 lg:w-1/2 mx-auto">
          <h1 className="pt-40 pb-10 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-green-600">
            {project.title}
          </h1>
          <img src={project.gif} alt="project" className="pb-20" />
          <p className=" leading-7">{project.shortDescription}</p>
          <h2 className="pt-10 pb-2 font-bold">Features</h2>
          <ul>
            {project.features.map((feature) => (
              <li className="list-disc ml-5">{feature}.</li>
            ))}
          </ul>
          <h2 className="pt-10 pb-2 font-bold">Technologies</h2>
          <p className="pb-2">The following tools were used in this project:</p>
          <ul>
            {project.technologies.map((technology) => (
              <li className="list-disc ml-5">{technology}.</li>
            ))}
          </ul>
          <a
            href={project.repo}
            className="text-sm hover:underline mb-20 pt-10"
          >
            See the repo here
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
