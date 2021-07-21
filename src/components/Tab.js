import bindToNode from "../bindToNode";

export default function Tab(title, onClick) {
    const tab = document.createElement('span');
    tab.id = title.toLowerCase().replace(/\s/g, '-');

    const setElementActive = setTrue => {
        if (setTrue) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    }
    bindToNode(tab, 'setElementActive', setElementActive);

    tab.addEventListener('click', onClick);
    tab.innerText = title;
    tab.setAttribute('role', 'button'); // equivalent to pointer:cursor
    tab.classList.add('tab', 'px-4', 'py-3', 'border', 'border-bottom-0', 'border-1', 'bg-grey');

    

    return tab;
}