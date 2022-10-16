import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Welcome name={user} />
      </div>
      <TodoItemList />
    </div>
  );
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class TodoItemList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getIncompleteTodos = this.getIncompleteTodos.bind(this);
    this.getCompleteTodos = this.getCompleteTodos.bind(this);
    this.state = {
      todos: [
        {
          content: "Hello World",
          completed: true
        },
        {
          content: "foo",
          completed: true
        },
        {
          content: "bar",
          completed: false
        }
      ],
      todoInput: '',   
    }
  }

  getIncompleteTodos() {
    return this.state.todos.filter(todo => !todo.completed)
  }

  getCompleteTodos() {
    return this.state.todos.filter(todo => todo.completed)
  }

  handleCheckboxClick(value, content) {
    const todos = this.state.todos.map(todo => {
      if (todo.content === content) todo.completed = value;
      return todo;
    })
    this.setState({todos});
  }

  handleInputChange(e) {
    this.setState({todoInput: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTodo = this.state.todoInput.trim();

    if (newTodo) {
      const todos = this.state.todos.slice();
      todos.push({content: newTodo, completed: false});
      this.setState({todos})
    }

    this.state.todoInput = '';
  }

  render() {
    return (
      <div>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        onSubmit={this.handleSubmit}
        >
          <label htmlFor="todoInput" style={{marginBottom: '0.5rem'}}>
            What would you like to accomplish today?
          </label>
          <div>
            <input id="todoInput" type="text" value={this.state.todoInput} onChange={this.handleInputChange} />
            <button type="submit" style={{marginLeft: '0.5rem'}}>Submit</button>
          </div>
        </form>
        <h3>Incomplete</h3>
        <ul>
          {this.getIncompleteTodos().map(({content, completed}, idx) => {
            return (
              <TodoItem
                content={content}
                completed={completed}
                key={idx}
                onCheckboxClick={this.handleCheckboxClick}
              />  
            )})
          }
        </ul>
        <h3>Complete</h3>
        <ul>
          {this.getCompleteTodos().map(({content, completed}, idx) => {
            return (
              <TodoItem
                content={content}
                completed={completed}
                key={idx}
                onCheckboxClick={this.handleCheckboxClick}
              />  
            )})
          }
        </ul>
      </div>
    )
  }
}


function TodoItem({content, completed, onCheckboxClick}) {
  const styles = {
    textAlign: 'left',
    listStyleType: 'none',
    textDecoration: completed ? 'line-through': null
  }

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <input type="checkbox" checked={completed} onChange={(e) => onCheckboxClick(e.target.checked, content)}/>
      <li style={styles}>{content}</li>
    </div>
  )
}

// class TodoItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.styles = {
//       textAlign: 'left',
//       listStyleType: 'none',
//       textDecoration: (
//         this.props.completed
//           ? 'line-through'
//           : null
//       )
//     }
//   }

//   handleClick(e) {
//     this.props.onCheckboxClick(e.target.checked, this.props.content)
//   }

//   render() {
//     const completed = this.props.completed
//     return (
//       <div style={{display: 'flex', alignItems: 'center'}}>
//         <input type="checkbox" defaultChecked={completed} onClick={this.handleClick}/>
//         <li
//           style={{
//             textAlign: 'left',
//             listStyleType: 'none',
//             textDecoration: completed ? 'line-through': null
//           }}
//         >{this.props.content}</li>
//       </div>
//     )
//   }
// }

const user = 'Zach';

export default App;
