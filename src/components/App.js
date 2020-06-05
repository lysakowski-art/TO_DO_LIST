import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Reset.scss";
import "../styles/App.scss";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Another example that I decided to leave",
        date: "2020-05-15",
        important: true,
        active: false,
        finishDate: "2020-05-10",
      },
      {
        id: 1,
        text: "Some example that I decided to leave",
        date: "2020-05-10",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };
  counter = this.state.tasks.length;
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState({
      tasks: [...this.state.tasks, task],
    });

    console.log(task, this.counter);
    return true;
  };

  render() {
    return (
      <div className="app">
        <Header />
        <main className="cnt">
          <AddTask add={this.addTask} />
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            change={this.changeTaskStatus}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
