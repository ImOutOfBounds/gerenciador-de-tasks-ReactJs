import React, { useState } from 'react';
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div 
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <span 
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                    role="button"
                    style={{ cursor: 'pointer', marginRight: '10px' }}
                >
                    ❌
                </span>
                <span 
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                    role="button"
                    style={{ cursor: 'pointer' }}
                >
                    ✏️
                </span>
            </div>
        </div>
    ));
}

export default Todo;
