export default function Header() {
    const header = document.createElement('header');
    const heading = document.createElement('h1');
    heading.innerText = 'Todo!!';
    heading.classList.add('mb-5', 'mt-3', 'h1', 'h1-responsive', 'text-center');
    header.appendChild(heading);

    return header;
}