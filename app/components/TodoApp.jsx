var React = require("react");
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return{
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
                },
                {
                    id: 3,
                    text: 'Exercise'
                },
                {
                    id: 4,
                    text: 'Rule the world'
                }
            ]
        };
    },
    onHandleSubmit: (todo) => {
        alert('new todo: ' + todo)
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        var {todos} = this.state
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.onHandleSubmit}/>
            </div>
            )
    }
});

module.exports = TodoApp;