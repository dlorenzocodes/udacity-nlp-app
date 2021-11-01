
export async function updateUi(){
    const response = await fetch('http://localhost:8082/getData');
    const data = await response.json();
    console.log(data);
    console.log('Update UI');
}