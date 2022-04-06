import * as React from 'react';
import './Todo.css';

function Task({task, index, completeTask, removeTask}) {
    return (
        <div className='task' style={{ textDecoration: task.completed ? "line-through": "" }}>
            {task.title}

            <button onClick={() => completeTask(index)}>Completed</button>
            <button style={{background: 'red'}} onClick={() => removeTask(index)}>X</button>
        </div>
    )
}

export default Task;