const apiUrl = "https://jsonplaceholder.typicode.com/comments";

fetch(apiUrl, {
    method:"DELETE",
})
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error.message);
})