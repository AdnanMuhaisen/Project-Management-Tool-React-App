import { useState } from "react";
import NewTask from "./NewTask";

export default function ProjectTasks({ tasks, updateSelectedProjectInfo }) {
  function handleOnClickClear(event) {
    const targetTaskIndex = event.target.id;
    updateSelectedProjectInfo((prev) => {
      return { ...prev, tasks: prev.tasks.toSpliced(targetTaskIndex, 1) };
    });
  }

  return (
    <section id="project-tasks">
      <h2>Tasks</h2>
      <NewTask
        availableTasks={tasks}
        updateSelectedProjectInfo={updateSelectedProjectInfo}
      />
      {tasks.length === 0 && <p>This project does not have any tasks yet.</p>}
      {tasks.length > 0 && (
        <section id="available-tasks">
          {tasks.map((task, index) => {
            return (
              <div className="task" key={index}>
                <p>
                  <b>{task}</b>
                </p>
                <button onClick={handleOnClickClear} id={index}>
                  Clear
                </button>
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
}
