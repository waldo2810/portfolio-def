import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Nav from "./routes/Nav";
import ProjectDetails from "./routes/ProjectDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="projects/*" element={<ProjectDetails />}>
          <Route path=":projectName" element={<ProjectDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
