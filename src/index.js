import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css'

class TodoItems extends React.Component {
    
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    createTasks(item) {
    
        return (

            <li key={item.key}>
            {item.task}
            <button onClick = {() => this.deleteItem(item.key)}>X</button>
            </li>
        )
    
    }

    deleteItem(key) {
        this.props.deleteItem(key);
    }

    render() {
        return (
            <ul>
                {this.props.entries.map(this.createTasks)}
            </ul>
        )
    }


}


class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {

        if (this._inputElement !== '') {

            var newItem = {
                key: Date.now(),
                task: this._inputElement.value
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }
        e.preventDefault()
    }

    deleteItem(key) {

        var filteredItems = this.state.items.filter(item => item.key !== key)

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="mainList">
                <form onSubmit={this.addItem}>
                    <input ref={task => {this._inputElement = task}}placeholder="What do you need to do?"></input>
                    <button type="submit">Add Task</button>
                </form>
                <TodoItems
                    entries={this.state.items}
                    deleteItem={this.deleteItem}              
                />
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <TodoList />
    </div>,
    document.querySelector("#root")
)
