export const Dropdown = (() => {
    const dropdowns = document.querySelectorAll('.dropdown');

    for (const dropdown of dropdowns) {
        dropdown.addEventListener('click', handleClickDropdown);
    }

    function handleClickDropdown (event) {   
        const menu = event.target.parentNode.querySelector('.dropdown-list');

        menu.classList.toggle('visible');
    }
})();

