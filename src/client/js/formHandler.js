import { updateUi } from './updateUI.js'

let formData = {};
const urlField = document.querySelector('#url');

async function postURl(){
    formData = { articleURl: urlField.value}
    const response = await fetch('http://localhost:8082/entry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
    
    const data = await response.json();
    console.log(data);
    updateUi();
}

export { postURl };