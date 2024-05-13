fetch("https://jsonplaceholder.typicode.com/albums")
.then((response) => {
    if(response.ok) {
        return response.json();
    }
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error.message);
})