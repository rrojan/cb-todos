import './style.css';
import Header from './components/Header';
import Tabs from './components/Tabs';
import TodoList from './components/TodoList';
import CompletedTodos from './components/CompletedTodos';

const displayEl = (displayEl, removeEl) => {
    displayEl.display();
    removeEl.forEach(el => {
        el.hide();
    });
}

function Root() {
    const root = document.createElement('div');

    const todoListEl = TodoList();
    const completedTodosEl = CompletedTodos();
    completedTodosEl.hide();

    root.appendChild(Header());
    root.appendChild(
        Tabs(
            ['Todos', () => displayEl(todoListEl, [completedTodosEl])],
            ['Completed', () => displayEl(completedTodosEl, [todoListEl])]
        )
    );
    root.appendChild(todoListEl);
    root.appendChild(completedTodosEl);

    return root;
}

document.body.appendChild(Root());