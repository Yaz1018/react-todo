var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {

        beforeEach(() => {
            localStorage.removeItem('todos')
        });

        it('should set valid todos array', () => {
            var todo = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];
            TodoAPI.setTodos(todo);

            var actualTodos = JSON.parse(localStorage.getItem('todos'))

            expect(actualTodos).toEqual(todo);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};

            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localStorage Data', () => {
            var actualTodo = TodoAPI.getTodos();
            expect(actualTodo).toEqual([]);
        });

        it('should return todos if valid arrayed in localStorage', () => {
            var todo = [{
                id: 23,
                text: 'test all files',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todo));

            var actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todo);
        });
    });

    describe('filterTodos', () => {
        var todos = [{
            id: 1,
            text: 'some text here',
            completed: true
        },{
            id: 2,
            text: 'other text here',
            completed: false
        },{
            id: 3,
            text: 'another text here',
            completed: true
        }]

        it('should return all items if showCompleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');

            expect(filteredTodos.length).toBe(3);
        });

        it('should return non completed items if showCompleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');

            expect(filteredTodos.length).toBe(1);
        })
    })
})