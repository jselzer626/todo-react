import React, { useState, useEffect, useContext } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css'


// hooks 

function Todo({}) {





}



function App() {

    const [todos, setTodos] = useState([])

    const addItem = item => {
        const newTodos = [...todos, {item}]
        setTodos(newTodos)
    }

    const deleteItem = key => {
        const newTodos = todos.filter(item => item.key == key)
        setTodos(newTodos)
    }

    const markComplete = item => {
        const newTodos = [...todos]
        newTodos[newTodos.indexOf(item)].status = "complete"
        setTodos(newTodos)
    }





}


/*class TodoItems extends React.Component {
    
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }
    
    createTasks(item) {
        
        var buttonText = this.props.showActiveList ? "Mark Complete" : "Undo"

        return (

            <li key={item.key} status={item.status}>
            {item.task}
            <button onClick = {() => this.deleteItem(item.key, item.status)}>X</button>
            <button onClick = {() => this.changeStatus(item.key, item.status)}>{buttonText}</button>
            </li>

        )
    
    }

    deleteItem(key, status) {
        //this function is just being passed down by TodoList
        this.props.deleteItem(key, status);
    }

    changeStatus(key, status) {
        this.props.changeStatus(key, status);
    }

    render() {
        return (
            <div id="listDisplay">
                <ul style={{ display: this.props.showActiveList ? "block" : "none"}}>
                    <h4>Active</h4>
                    {this.props.active.map(this.createTasks)}
                </ul>
                <ul style={{ display: this.props.showActiveList ? "none" : "block"}}>
                    <h4>Completed</h4>
                    {this.props.completed.map(this.createTasks)}
                </ul>
            </div>
        )
    }

}

class TodoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: [],
            completed: [],
            showActiveList: true,
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeStatus = this.changeStatus.bind(this);
    }

    addItem(e) {

        if (this._inputElement.value !== '') {

            var newItem = {
                status: 'active',
                key: Date.now(),
                task: this._inputElement.value
            };

            this.setState((prevState) => {
                return {
                    active: prevState.active.concat(newItem),
                };
            });
        }
        e.preventDefault()
    }

    deleteItem(key, status) {

        var filteredItems = this.state[status].filter(item => item.key !== key)

        this.setState({
            [status]: filteredItems
        });
    }
    
    changeStatus(key, status) {

        // find item in old array and send to new array
        var itemToUpdate = this.state[status].find(item => item.key == key)
        var newStatus = itemToUpdate.status == "active" ? "completed" : "active"

        // delete item from previous status array & update status
        var filteredItems = this.state[status].filter(item => item.key !== key)
        itemToUpdate.status = newStatus

        // update state
        this.setState((prevState) => {
            return {
                [status]: filteredItems,
                [newStatus]: prevState[newStatus].concat(itemToUpdate)
            };
        });
    }

    render() {
        return (
            <div id="container">
                <div className="mainList">
                    <form onSubmit={this.addItem}>
                        <input ref={task => {this._inputElement = task}}placeholder="What do you need to do?"></input>
                        <button type="submit">Add Task</button>
                    </form>
                   <TodoItems
                            active={this.state.active}
                            completed={this.state.completed}
                            showActiveList={this.state.showActiveList}
                            deleteItem={this.deleteItem}
                            changeStatus={this.changeStatus}              
                    />
                </div>
                <div id="changeListView">
                    <button onClick={() => this.setState({showActiveList: true})}>Active</button>
                    <button onClick={() => this.setState({showActiveList: false})}>Completed</button>
                </div>
            </div>
        );
    }
}*/

