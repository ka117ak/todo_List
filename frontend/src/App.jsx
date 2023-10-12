import React, { useState } from 'react';
import TodoList from './ToDoList';
import { BiPencil } from 'react-icons/bi'

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { text: task }]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className='w-full h-screen bg-orange-100' >
      <h1 className='text-2xl md:text-4xl text-red-600 font-extrabold px-4 md:px-[20px] py-5 bg-orange-200 font-mono'>Todo List</h1>
      <div className='flex flex-col md:mt-[5%] mt-[7%]'>
        <div className='flex pl-[24%] lg:pl-[37%] md:pl-[27%]'>
          <input
            onChange={(e) => setTask(e.target.value)}
            className='px-4 py-2 border-2 border-orange-300 m-3 md:w-96 w-72 rounded-xl text-gray-500 outline-none'
            type="text"
            placeholder="Enter your task"
            value={task}
          />
          <button className='font-mono text-gray-500 text-2xl md:text-3xl font-bold m-2' onClick={addTodo}><BiPencil /></button>
        </div>
        <div className='text-red-600 pl-[30%] md:pl-[33%] lg:pl-[40%] text-l md:text-xl lg:text-2xl justify-start font-mono md:mt-[3%] mt-[4%] font-bold'>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;





