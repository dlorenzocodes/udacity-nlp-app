
let formData = {};
const urlField = document.querySelector('#url');

function postURl(event){
    event.preventDefault();
    formData = { articleURl: urlField.value}
    fetch('http://localhost:8082/entry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

export { postURl };