import React from "react";
import { Button } from "@mui/material";
import Icon from '@mui/material/Icon';
import TaskList from "./TasksList.js"
import Task from "./Task.js";
import Tile from "./Tile.js";
import { Stack } from "@mui/material";
import TaskInput from "./TaskInput.js";

export default class TasksContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, text: "Todo 1", complete: false},
        {id: 2, text: "Todo 2", complete: false},
        {id: 3, text: "Todo 3", complete: true}
      ],
      showTaskInput: false
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
      <div className="bg-yellow-400">
        <Stack children={this.uncompletedTasks()} />
        <h5 className="my-0 py-4 pl-2">Completed Tasks {`(${this.completedTasks().length} completed)`}</h5>
        <Stack children={this.completedTasks()} />
        <TaskInput/>
      </div>
    )
  }
}