import './style.css';
import Header from './Header';
import Tabs from './Tabs';
import TodoList from './TodoList';

function Root() {
    const root = document.createElement('div');
    
    root.appendChild(Header());
    root.appendChild(
        Tabs(
            ['Todos', () => { console.log('todos') }],
            ['Completed', () => { console.log('completed') }]
        )
    );

    return root;
}

document.body.appendChild(Root());