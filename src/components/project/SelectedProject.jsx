import ProjectInfo from "./ProjectInfo";
import ProjectTasks from "./ProjectTasks";

export default function SelectedProject({
  selectedProject,
  setSelectedProject,
  currentProjects,
  setCurrentProjects,
}) {
  return (
    <section className="project">
      <ProjectInfo
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        currentProjects={currentProjects}
        setCurrentProjects={setCurrentProjects}
      />
      <hr />
      <ProjectTasks
        tasks={selectedProject.tasks}
        updateSelectedProjectInfo={setSelectedProject}
      />
    </section>
  );
}
