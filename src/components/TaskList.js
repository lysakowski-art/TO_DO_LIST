import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h1>Lista do zrobienia ({active.length})</h1>
        {activeTasks.length ? activeTasks : "Nie masz już nic do roboty"}
      </div>
      <hr />
      <div className="done">
        <h3>
          Lista zrobionych <em>({done.length})</em>
        </h3>
        {done.length > 4 && (
          <span style={{ fontSize: "10px" }}>
            wyświetlone są tylko 4 ostatnio wykonane zadania
          </span>
        )}
        {doneTasks.slice(0, 4)}
      </div>
    </>
  );
};

export default TaskList;
