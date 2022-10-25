import React from "react";
import TaskList from "./TasksList.js"
import Task from "./Task.js";

export default class TasksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, text: "Todo 1", complete: false},
        {id: 2, text: "Todo 2", complete: false},
        {id: 3, text: "Todo 3", complete: true}
      ]
    };
    this.handleTaskStatusChange = this.handleTaskStatusChange.bind(this);
  }

  uncompletedTasks() {
    const tasks = this.state.tasks;
    const uncompletedTasks = tasks.filter(task => !task.complete);

    return uncompletedTasks.map((task) => (
      <Task
        task={task}
        onTaskStatusChange={this.handleTaskStatusChange}
        key={task.id}
      />
    ))
  }

  completedTasks() {
    const tasks = this.state.tasks;
    const completedTasks = tasks.filter(task => task.complete);

    return completedTasks.map((task) => (
      <Task
        task={task}
        onTaskStatusChange={this.handleTaskStatusChange}
        key={task.id}
      />
    ))
  }

  handleTaskStatusChange(id) {
    const tasks = this.state.tasks.slice();
    const updatedTask = tasks.find(t => t.id === id);

    updatedTask.complete = !updatedTask.complete;

    this.setState({tasks});
  }

  render() {
    return (
      <div>
        <TaskList children={this.uncompletedTasks()} />
        <TaskList children={this.completedTasks()} />
      </div>
    )
  }
}