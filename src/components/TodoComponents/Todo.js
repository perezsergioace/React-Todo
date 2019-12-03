import React from 'react';

const Todo = (props) => {
	return (
		<div
			onClick={() => props.toggleTask(props.theTask.id)}
			className={`task${props.theTask.completed ? 'completed' : ''}`}
		>
			<p>{props.theTask.task}</p>
		</div>
	);
};

export default Todo;
