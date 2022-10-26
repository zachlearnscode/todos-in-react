import React from "react";
import { TextField } from "@mui/material";
import Tile from "./Tile";

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.getInput = this.getInput.bind(this);
  }

  getInput() {
    return (
      <TextField
        id="taskInput"
        label="Enter a task"
        autoFocus={true}
        variant="standard"
        size="small"
        margin="dense"
        fullWidth
      />
    )
  }

  render() {
    // const showInput = this.showInput;
    return (  
      <Tile>
        {this.getInput()}
      </Tile>
  )}
}