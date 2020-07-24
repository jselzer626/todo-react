import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'


// hooks 

function Todo({ todo, index, deleteItem, markComplete }) {

        return (

            <li>
                {todo.text}
                <button onClick = {() => deleteItem(index)}>Delete</button>
                <button onClick = {() => markComplete(index)}>Mark Complete</button>
            </li>

        );

}

function TodoForm({ addItem }) {

    // here are the hooks 
    const [value, setValue] = useState('')

        const handleSubmit = e => {
            e.preventDefault()
            if (!value)
                return
            addItem(value)
            setValue('')
        }

        return (
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={e => setValue(e.target.value)}
                    value = {value}
                    placeholder="what do you want to do"
                >
                </input>
                <button type="submit">Add Task</button>
            </form>
        );


}

function App() {

    const [todos, setTodos] = useState([])

    const addItem = text => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }

    const deleteItem = index => {
        const newTodos = todos.filter(item => item.index == index)
        setTodos(newTodos)
    }

    const markComplete = index => {
        const newTodos = [...todos]
        newTodos[index].status = "completed"
        setTodos(newTodos)
    }

    return (
        //html
        <div className="app">
            <TodoForm addItem={addItem} />
            <div className="mainList">
                <ul>
                    {todos.map((todo, index) => (
                        <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        deleteItem={deleteItem}
                        markComplete={markComplete}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );

}

ReactDOM.render (
    <div>
        <App />
    </div>,
    document.querySelector("#root")
)
