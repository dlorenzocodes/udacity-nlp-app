
import { postURl } from './js/formHandler.js'

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    postURl();
});