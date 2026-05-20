import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('');
  const [todolist, setTodolist] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    setTodolist(t => [...t, { text: input, completed: false }]);
    setInput('');
  }

  const deleteTask = (indexToDelete) => {
    setTodolist(t => t.filter((_, index) => index !== indexToDelete));
  }

  const toggleComplete = (indexToToggle) => {
    setTodolist(t => t.map((item, index) => {
      if (index === indexToToggle) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  }

  return (
    <div className="container">

    <div className='routers'>


      

    </div>
      <h1>To-Do Dashboard</h1>
      
      <form onSubmit={addTask}>
        <input 
          type="text" 
          placeholder='What needs to be done?' 
          value={input} 
          onChange={handleInput} 
          className='input' 
        />
        <button type="submit" className='add_button'>Add</button>
      </form>

      {todolist.length === 0 && (
        <p>No tasks yet. Add one above!</p>
      )}

      <ol>
        {todolist.map((curr, index) => (
          <li key={index} className={curr.completed ? 'todo-item completed-item' : 'todo-item'}>
            <div className="task-content">
              <input 
                type='checkbox'
                checked={curr.completed}
                onChange={() => toggleComplete(index)} 
              />
              <span>{curr.text}</span>
            </div>
            
            <button className='Delete_button' onClick={() => deleteTask(index)}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App