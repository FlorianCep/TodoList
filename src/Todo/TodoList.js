import React, { Component } from 'react';

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }


    onChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTodo(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTodos() {
        return this.state.items.map((item) => {
            return (
                <div className="list-group-item oneItem" key={item}>
                    {item}
                    <button onClick={this.deleteTodo.bind(this, item)} className="btn btn-danger">Supprimer</button>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 align="center"> Ma Todo List </h1>
                <form className="saisie">
                    <input 
                        value={this.state.userInput} 
                        type="text" 
                        placeholder="Renseignez un item"
                        onChange={this.onChange.bind(this)}
                        className="form-control mb-2"
                    />
                    <button onClick={this.addTodo.bind(this)} className="btn btn-primary">
                        Ajouter
                    </button>
                </form>
                
                <hr></hr>

                <div className="list-group">
                    {this.renderTodos()}
                </div>
            </div>
        );
    }
}

export default TodoList;