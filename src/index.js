import './style.css';
import Header from './Header';
import Tabs from './Tabs';
import TodoList from './TodoList';

const displayEl = (displayEl, removeEl) => {
    displayEl.display();
    removeEl.forEach(el => {
        el.hide();
    });
}

function Root() {
    const root = document.createElement('div');

    const todoListEl = TodoList();

    root.appendChild(Header());
    root.appendChild(
        Tabs(
            ['Todos', () => displayEl(todoListEl, [])],
            ['Completed', () => displayEl(todoListEl, [todoListEl])]
        )
    );
    root.appendChild(todoListEl);

    return root;
}

document.body.appendChild(Root());