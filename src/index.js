import "./styles.css";
import { setDropdown } from "./dropdown.js";

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

console.log("I'm working!");

const dropdowns = document.querySelectorAll('.dropdown');

for (const dropdown of dropdowns) {
    setDropdown(dropdown);
}




