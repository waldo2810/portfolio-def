import { projectData } from "../utils/project-data";

import Project from "./Project";

const Projects = () => {
  return (
    <>
      <section id="projects" className="w-full mx-auto">
        {projectData.map((project, index) => (
          <Project
            key={index}
            pictureUrl={project.pictureUrl}
            title={project.title}
            description={project.shortDescription}
          />
        ))}
      </section>
    </>
  );
};

export default Projects;
