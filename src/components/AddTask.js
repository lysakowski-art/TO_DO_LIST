import React, { Component } from "react";
import "../styles/AddTask.scss";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      } else {
        console.log("Za krótka nazwa");
      }
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <div className="column">
          <div>
            <input
              className="addInput"
              type="text"
              placeholder="Add task"
              value={this.state.text}
              onChange={this.handleText}
            />
            <input
              className="checkbox"
              type="checkbox"
              checked={this.state.checked}
              id="important"
              onChange={this.handleCheckbox}
            />
            <label className="priorrityLabel" htmlFor="important">
              Pirority
            </label>
          </div>
          <div className="dateCnt">
            <label htmlFor="date">Choose your deadline</label>
            <input
              type="date"
              value={this.state.date}
              min={this.minDate}
              max={maxDate}
              onChange={this.handleDate}
            />
          </div>
        </div>
        <button className="primaryBtn" onClick={this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTask;
