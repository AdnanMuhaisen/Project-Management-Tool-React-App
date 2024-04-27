import { useRef, useState } from "react";
import { validateUserInputs } from "../../util/inputValidation";
import Modal from "../Modal.jsx";

export default function NewProject({
  setIsAddNewProjectClicked,
  currentProjects,
  setCurrentProjects,
}) {
  const titleInput = useRef();
  const descriptionInput = useRef();
  const dateInput = useRef();
  const errors = useRef();
  const modal = useRef();

  const [isInvalidUserInput, setIsInvalidUserInput] = useState(false);

  const handleOnInputFocus = (event) => event.target.classList.add("selected");
  const handleOnInputBlur = (e) => e.target.classList.remove("selected");
  const handleOnCancelClick = () => setIsAddNewProjectClicked(false);

  const currentDate = new Date();
  const dateToDisplay = currentDate.toISOString().substring(0, 10);

  function handleOnSaveClick() {
    errors.current = validateUserInputs(
      titleInput.current.value,
      descriptionInput.current.value,
      dateInput.current.value
    );

    if (errors.current.length === 0) {
      let maximumId;

      if (currentProjects.length === 0) {
        maximumId = 0;
      } else {
        maximumId = currentProjects.reduce((acc, project) => {
          if (project.id > acc.id) {
            acc = project.id;
          }
          return acc;
        });
      }
      const projectToAdd = {
        id: maximumId + 1,
        title: titleInput.current.value,
        description: descriptionInput.current.value,
        addedAt: dateInput.current.value,
        tasks: [],
      };

      setCurrentProjects((projectsList) => [...projectsList, projectToAdd]);
      setIsAddNewProjectClicked(false);
      setIsInvalidUserInput(false);
      errors.current = [];
    } else {
      setIsInvalidUserInput(true);
      modal.current.open();
    }
  }

  return (
    <section id="add-new-project">
      <div className="buttons">
        <button className="cancel-button" onClick={handleOnCancelClick}>
          Cancel
        </button>
        <button className="save-button" onClick={handleOnSaveClick}>
          Save
        </button>
      </div>

      <Modal ref={modal}>
        <h2>Invalid Project Information</h2>
        <ul style={{ color: "red" }}>
          {errors.current?.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
      </Modal>
      <form>
        <div className="user-input title">
          <label>Title</label>
          <input
            type="text"
            required
            ref={titleInput}
            onFocus={handleOnInputFocus}
            onBlur={handleOnInputBlur}
          />
        </div>
        <div className="user-input description">
          <label>Description</label>
          <input
            type="text"
            required
            ref={descriptionInput}
            onFocus={handleOnInputFocus}
            onBlur={handleOnInputBlur}
          />
        </div>
        <div className="user-input dueDate">
          <label>Due Date</label>
          <input
            type="date"
            required
            ref={dateInput}
            defaultValue={dateToDisplay}
            onFocus={handleOnInputFocus}
            onBlur={handleOnInputBlur}
          />
        </div>
      </form>
    </section>
  );
}
