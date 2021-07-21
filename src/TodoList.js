export default function TodoList() {
    const todoList = document.createElement('div');

    todoList.classList.add('my-5');

    todoList.innerHTML = '<ul><li>something</li><li>something</li><li>something</li></ul>'

    const display = () => todoList.style.display = 'block';
    const hide = () => todoList.style.display = 'none';

    function _bindToNode(node, name, fn) {
        node[name] = fn.bind(node);
    }

    _bindToNode(todoList, 'display', display);
    _bindToNode(todoList, 'hide', hide);

    return todoList;
}