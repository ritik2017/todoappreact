import * as React from 'react';
import './Todo.css';

export default function CreateTask({addTask}) {

    const [value, setValue] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        if(!value) return;
        addTask(value);
        setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="input" type="text" value={value} placeholder="Add a new task" onChange={(ev) => setValue(ev.target.value)}/>
        </form>
    )
}