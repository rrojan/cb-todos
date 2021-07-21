export default function Tab(title, onClick) {
    const tab = document.createElement('span');
    tab.addEventListener('click', onClick);
    tab.innerText = title;
    tab.setAttribute('role', 'button'); // equivalent to pointer:cursor
    tab.classList.add('px-4', 'mx-1', 'py-3', 'border', 'border-bottom-0', 'bg-grey');
    return tab;
}