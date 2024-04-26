export default function ProjectInfo({
  selectedProject,
  setSelectedProject,
  currentProjects,
  setCurrentProjects,
}) {
  const addedAt = new Date(selectedProject.addedAt);

  function handleOnClickDelete() {
    const targetProjectIndex = currentProjects.indexOf(selectedProject);
    setCurrentProjects((previousProjectsList) => {
      return previousProjectsList.toSpliced(targetProjectIndex, 1);
    });
    setSelectedProject(
      targetProjectIndex === 0
        ? currentProjects[1] ?? undefined
        : currentProjects[0] ?? undefined
    );
  }

  return (
    <header id="project-info">
      <div className="title-delete-section">
        <h2>{selectedProject.title}</h2>
        <button onClick={handleOnClickDelete}>Delete</button>
      </div>
      <p>{addedAt.toDateString()}</p>
      <p className="description">
        <strong> {selectedProject.description}</strong>
      </p>
    </header>
  );
}
