import bindToNode from "../bindToNode";

export default function TodoList() {
    const todoList = document.createElement('div');
    const _todos = [];

    todoList.classList.add('container', 'py-5', 'border', 'border-1');

    todoList.innerHTML = '<ul><li>something</li><li>something</li><li>something</li></ul>'

    const display = () => todoList.style.display = 'block';
    const hide = () => todoList.style.display = 'none';
    const addTodo = (...titles) => titles.forEach(title => _todos.add(title));

    bindToNode(todoList, 'display', display);
    bindToNode(todoList, 'hide', hide);
    bindToNode(todoList, 'addTodo', addTodo);

    return todoList;
}