export default function ProjectsSidebar({
  selectedProjectId,
  setSelectedProject,
  projects,
  setIsAddNewProjectClicked,
}) {
  return (
    <aside>
      <div>
        <h2>YOUR PROJECTS</h2>
        <button
          id="add-project-button"
          onClick={() => {
            setIsAddNewProjectClicked(true);
            setSelectedProject(undefined);
          }}
        >
          <i className="bi bi-plus"></i> Add Project
        </button>
      </div>
      <section className="projects">
        {projects.length <= 0 && <p>There`s no projects to display</p>}
        {projects.length > 0 &&
          projects.map((project) => {
            return (
              <button
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setIsAddNewProjectClicked(false);
                }}
                className={
                  project.id === selectedProjectId
                    ? "selected-project"
                    : undefined
                }
              >
                {project.title}
              </button>
            );
          })}
      </section>
    </aside>
  );
}
