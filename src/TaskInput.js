import React from "react";
import { TextField } from "@mui/material";
import Tile from "./Tile";
import './TaskInput.css';
import { Icon } from "@mui/material";

function input(props) {
  return ( 
    <input
      type="text"
      id="taskInput"
      autoFocus
      placeHolder="Try typing 'Pay the electric bill'"
    />
  );
}

function prompt(props) {
  return (
    <div className="flex my-auto">
      <Icon className="mr-1 text-yellow-500">add_circle</Icon>
      <span>Create a task</span>
    </div>
  )
}

export default class TaskInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false,
      inputValue: ""
    };

    this.toggleInput = this.toggleInput.bind(this);
  }

  toggleInput() {
    this.setState({showInput: !this.state.showInput})
  }

  render() {
    const inputDisplayed = this.state.showInput;

    return (  
      <Tile onClick={inputDisplayed ? null : this.toggleInput}>
        {this.state.showInput ? input() : prompt()}
      </Tile>
    )
  }
}