var React = require('react');

var TodoSearch = React.createClass({
    handleSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function () {
        return(
            <div className="todo-search">
                <div className="todo-search-input">
                    <input type="text" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div className="todo-search-checkbox">
                    <label htmlFor="">
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;