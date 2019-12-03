import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.taskList.map(item => (
                <Todo key={item.id} theTask={item} toggleTask={props.toggleTask} clearTask={props.clearTask}/>
            ))}
            <button onClick={props.clearTask} >Clear Completed Tasks</button>
        </div>
    )
}

export default TodoList;