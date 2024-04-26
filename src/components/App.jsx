import "../css/index.css";
import SelectedProject from "./project/SelectedProject.jsx";
import ProjectsSidebar from "./project/ProjectsSidebar.jsx";
import NewProject from "./project/NewProject.jsx";
import { useState } from "react";
import { PROJECTS } from "../util/data.js";
import NoProjectSelected from "./project/NoProjectSelected.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState();
  const [currentProjects, setCurrentProjects] = useState([...PROJECTS]);
  const [isAddNewProjectClicked, setIsAddNewProjectClicked] = useState(false);

  return (
    <>
      <ProjectsSidebar
        selectedProjectId={selectedProject?.id}
        setSelectedProject={setSelectedProject}
        projects={currentProjects}
        setIsAddNewProjectClicked={setIsAddNewProjectClicked}
      />

      {isAddNewProjectClicked ? (
        <NewProject
          setIsAddNewProjectClicked={setIsAddNewProjectClicked}
          currentProjects={currentProjects}
          setCurrentProjects={setCurrentProjects}
        />
      ) : selectedProject ? (
        <SelectedProject
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          currentProjects={currentProjects}
          setCurrentProjects={setCurrentProjects}
        />
      ) : (
        <NoProjectSelected
          setIsAddNewProjectClicked={setIsAddNewProjectClicked}
        />
      )}
    </>
  );
}

export default App;
