import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedzmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "odmalować pokój",
        date: "2018-03-10",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "nagrać porno",
        date: "2019-04-11",
        important: false,
        active: true,
        finishDate: null,
      },{
        id: 3,
        text: "umyć tyłek",
        date: "2019-03-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "obciąć paznokcie",
        date: "2018-04-12",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "zwąchać interes życia",
        date: "2020-02-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "zrobić ciasto",
        date: "2019-04-25",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "pogłaskać pusię",
        date: "2019-12-30",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 8,
        text: "NAUCZYĆ SIĘ PROGRAMOWAĆ",
        date: "2050-11-02",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })

  };


  render() {
    return (
      <div>
        TO DO LIST
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
