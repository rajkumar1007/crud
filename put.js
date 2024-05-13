const data= {
    title:"car",
    body: "The car was a new model"
}
fetch("https://jsonplaceholder.typicode.com/users/11", {
    method: "PUT",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(data)
})
.then((response) => {
    console.log(data);
})
.catch((err) => {
    console.log(err.message);
})