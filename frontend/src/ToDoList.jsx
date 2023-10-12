import React from 'react';
import Todo from './Item';

function TodoList({ todos, deleteTodo }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <Todo key={index} index={index} text={todo.text} deleteTodo={deleteTodo} />
            ))}
        </ul>
    );
}

export default TodoList;