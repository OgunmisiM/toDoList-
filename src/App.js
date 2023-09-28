import React, { useState } from 'react';
import './style.css';

export default function App() {
  let addTask = 'add a task';
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = (todo) => {
    const newTask = {
      id: Math.random(),
      todo,
    };
    {
      task !== '' ? setList([...list, newTask]) : <li>{addTask}</li>;
    }
    setTask('');
  };
  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };
  return (
    <div>
      <h2>To do List</h2>

      <label htmlFor="task">Add new task: </label>
      <input
        type="text"
        name="task"
        id="task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit" onClick={() => handleClick(task)}>
        Add task
      </button>

      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}{' '}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
