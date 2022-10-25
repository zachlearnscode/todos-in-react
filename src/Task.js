import React from "react";

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log("Hello")
    const task = this.props.task;
    this.props.onTaskStatusChange(task.id);
  }

  render() {
    const task = this.props.task;

    return (
    <label className="list-none">
      <input
        type="checkbox"
        defaultChecked={task.complete}
        onChange={this.handleChange}
      />
      {task.text}
    </label>)
  }
}