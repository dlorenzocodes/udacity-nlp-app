const { EntryOptionPlugin } = require("webpack")

async function updateUi(){
    const response  = await fetch('http://localhost:8082/urlData')
    const data = await response.json();
    console.log(data);
};

export { updateUi }
