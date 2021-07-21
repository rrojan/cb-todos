import Tab from "./Tab";

export default function Tabs(...args) {
    const tabs = document.createElement('div');
    tabs.classList.add('d-flex', 'justify-content-center');

    for (let list of args) {
        const tab = Tab(list[0], list[1]);
        tabs.appendChild(tab);
    }

    return tabs;
}