export function setDropdown(dropdown) {
    dropdown.addEventListener('click', (event) => {
        const menu = event.target.parentNode.querySelector('.dropdown-list');
        menu.classList.toggle('visible');
    });
};