import React from "react";
import "../styles/Task.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faCheckSquare,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Task = (props) => {
  const style = {
    color: "red",
  };
  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="task">
        <p className="taskContent">
          <strong style={important ? style : null}>{text}</strong> - up to{" "}
          <span>{date}</span>
        </p>
        <div className="btnCnt">
          <button className="btnTask doneBtn" onClick={() => props.change(id)}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
          <button className="btnTask" onClick={() => props.delete(id)}>
            <FontAwesomeIcon icon={faTrashAlt} className="thrashBtn" />
          </button>
        </div>
      </div>
    );
  } else {
    const format = new Date(finishDate).toDateString();
    return (
      <div className="doneTasks">
        <FontAwesomeIcon icon={faCheckSquare} className="checked" />
        <p>
          {text} -<em>(have to do up to {date})</em>- done {format}
        </p>
      </div>
    );
  }
};

export default Task;
