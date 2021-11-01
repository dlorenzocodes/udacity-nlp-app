
import { postURl } from './js/formHandler.js'

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    postURl();
});