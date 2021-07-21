import Tab from "./Tab";

export default function Tabs(...args) {
    const tabs = document.createElement('div');
    tabs.classList.add('d-flex', 'justify-content-center');

    let activeTab = 0;

    let counter = 0;
    for (let list of args) {
        const tab = Tab(list[0], list[1]);
        tab.setAttribute('data-counter', counter);
        counter++;
        tabs.appendChild(tab);
    }

    // handle setting active tab on DOM
    document.addEventListener('DOMContentLoaded', _ => tabs.children[activeTab].classList.add('active'));

    tabs.addEventListener('click', e => {
        const newActiveTab = e.target.getAttribute('data-counter');
        if (activeTab !== newActiveTab) {
            console.log('active:', activeTab);
            console.log('new:', newActiveTab);
            // Remove currently active tab
            tabs.children[activeTab].classList.remove('active');
            // Add new active tab
            tabs.children[newActiveTab].classList.add('active');
            
            activeTab = newActiveTab;
        }
    });

    return tabs;
}