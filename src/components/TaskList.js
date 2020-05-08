import React from "react";
import Task from "./Task";
import NonOfActiveTasks from "./NonOfActive";
import "../styles/TaskList.scss";

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
        <h2 className="titleTasks">
          To do <em>({active.length})</em>
        </h2>
        {activeTasks.length ? activeTasks : <NonOfActiveTasks />}
      </div>
      <hr />
      <div className="done">
        <h2 className="titleTasks">
          Done <em>({done.length})</em>
        </h2>
        {done.length > 4 && (
          <p className="info">You can see only 4 of recent tasks!</p>
        )}
        {doneTasks.slice(0, 4)}
      </div>
    </>
  );
};

export default TaskList;
