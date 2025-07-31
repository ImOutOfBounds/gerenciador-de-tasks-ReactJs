import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, steInput] = useState(props.edit ? props.edit.value
        : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        steInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

         props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        steInput('');
        
    };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? ( 
                <>
            <input 
            type="text" 
            placeholder="Atualizar Tarefa" 
            value={input}
            name="text" 
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
            />
        <button className="todo-button edit">Salvar</button>
        </>
        ) : 
        (
            <> 
        <input 
           type="text" 
           placeholder="Escreva a Tarefa Aqui" 
           value={input}
           name="text" 
           className="todo-input"
           onChange={handleChange}
           ref={inputRef}
        />
        <button className="todo-button">Aidionar Tarefa</button>
        </>
        )
        }
            
        </form> 
    );
}

export default TodoForm
