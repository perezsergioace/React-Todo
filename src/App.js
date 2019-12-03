import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todoData = [
  {
    task: 'Drive sister to school',
    id: 1,
    completed: false
  },
  {
    task: 'Go through the training kit',
    id: 2,
    completed: false
  },
];

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      taskList: todoData
    };
  }
  addTask = (newTaskText) => {
    const newTask = {
      task: newTaskText,
      id: Math.random(),
      completed: false,
    }

    this.setState({
      taskList: [...this.state.taskList, newTask]
    });
  }

  toggleTask = (id) => {
    this.setState({
      taskList: this.state.taskList.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  clearTask = () => {
    this.setState({
      taskList: this.state.taskList.filter(item => !item.completed)
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList taskList={this.state.taskList} toggleTask={this.toggleTask} clearTask={this.clearTask}/>
      </div>
    );
  }
}

export default App;