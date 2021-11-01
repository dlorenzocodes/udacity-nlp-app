import { updateUi } from './updateUI.js'

const inputURl = document.querySelector('#url');

export async function postURl(){
    console.log('Post URl');

    const dataObj = {articleURl: inputURl.value}

    const response = await fetch('http://localhost:8082/entry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    });
    updateUi();
}