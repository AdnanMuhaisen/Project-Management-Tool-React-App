export default function NoProjectSelected({ setIsAddNewProjectClicked }) {
  return (
    <section id="no-project-selected">
      <img src="../../public/logo.png" alt="" />
      <h3>No Project Selected</h3>
      <p id="select-a-project-message">
        Select a project or get started with new one
      </p>
      <button onClick={() => setIsAddNewProjectClicked(true)}>
        Create new project
      </button>
    </section>
  );
}
