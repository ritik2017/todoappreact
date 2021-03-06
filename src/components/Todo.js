import * as React from 'react';
import Task from './Task';
import CreateTask from './CreateTask';
import './Todo.css';

function Todo() {

    const [taskRemaining, setTaskRemaining] = React.useState(0);
    const [tasks, setTasks] = React.useState([
        {
            title: "Read a book",
            completed: false
        },
        {
            title: "Run a marathon",
            completed: true
        }
    ]);

    React.useEffect(() => {
        setTaskRemaining(tasks.filter(task => !task.completed).length)
    }, [tasks]);

    const addTask = (title) => {
        const newTasks = [...tasks, { title: title, completed: false }];
        setTasks(newTasks);
    }

    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        
        setTasks(newTasks);
    }

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);

        setTasks(newTasks);
    }

    return ( 
        <div className='todo-container'>
            <div className='header'>Pending Tasks {taskRemaining}</div>
            <div className='tasks'>
                {tasks.map((task, index) => (
                    <Task task={task} index={index} completeTask={completeTask} removeTask={removeTask} key={index}/>
                ))}
            </div>
            
            <div className='create-task'>
                <CreateTask addTask={addTask}/>
            </div>
        </div>
    )
}

export default Todo;