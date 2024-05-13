let newItem = {value:"Hello World"};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers:{
        "Authorization": fruit,
        "Content-type": "application/json",
    },
    body: JSON.stringify(newItem)
})
.then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        response
        .json()
        .then((data) => {
            throw new Error(data.error);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
})
.then((data) => {
    if(data) {
        console.log(data);
    }
})
.catch((error) => {
    console.log(error.message);
});