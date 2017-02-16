var React = require("react");
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return{
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
    render: function () {
        var {todos} = this.state
        return(
            <div>
                <TodoList todos={todos} />
                <AddTodo onAddTodo={this.onHandleSubmit}/>
            </div>
            )
    }
});

module.exports = TodoApp;