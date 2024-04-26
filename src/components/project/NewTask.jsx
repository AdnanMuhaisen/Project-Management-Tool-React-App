import { useRef, useState } from "react";

export default function NewTask({ availableTasks, updateSelectedProjectInfo }) {
  const targetTaskInput = useRef();
  const targetFormToReset = useRef();
  const isTheNewTaskIsAlreadyExist = useRef();
  const [isInvalidUserInput, setIsInvalidUserInput] = useState(false);

  function handleOnClickAddTask(event) {
    event.preventDefault();
    const targetValueToAdd = targetTaskInput.current.value;
    isTheNewTaskIsAlreadyExist.current =
      availableTasks.filter((task) => task === targetValueToAdd).length > 0;

    if (
      targetValueToAdd === undefined ||
      targetValueToAdd === "" ||
      isTheNewTaskIsAlreadyExist.current
    ) {
      setIsInvalidUserInput(true);
    } else {
      updateSelectedProjectInfo((previousProjectValue) => {
        return {
          ...previousProjectValue,
          tasks: [...previousProjectValue.tasks, targetValueToAdd],
        };
      });
      setIsInvalidUserInput(false);
      targetFormToReset.current.reset();
    }
  }
  return (
    <>
      {isInvalidUserInput && <p>Invalid task description!</p>}
      {isTheNewTaskIsAlreadyExist.current && <p>The task is already exist</p>}
      <form id="add-task" ref={targetFormToReset}>
        <input type="text" ref={targetTaskInput} />
        <button onClick={handleOnClickAddTask} type="submit">
          Add Task
        </button>
      </form>
    </>
  );
}
