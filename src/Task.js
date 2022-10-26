import React from "react";
import { FormControlLabel } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Tile from "./Tile";

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

    const className = (() => {
      let result = 'bg-transparent mr-0';
      if (task.complete) {
        result += ' line-through text-slate-700'
      }
      return result;
    })();

    return (
      <Tile type="task">
        <FormControlLabel
          label={task.text}
          control={
            <Checkbox
              checked={task.complete}
              onChange={this.handleChange}
            />
          }
          className={className}
        />
      </Tile>
  )}
}