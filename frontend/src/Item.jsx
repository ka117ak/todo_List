import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function Todo({ text, index, deleteTodo }) {
    return (
        <li>
            {text}
            <button className='font-mono text-gray-500 text-m md:text-l font-bold md:px-2 md:pt-3 px-1 pt-0' onClick={() => deleteTodo(index)}><AiOutlineDelete /></button>
        </li>
    );
}

export default Todo;