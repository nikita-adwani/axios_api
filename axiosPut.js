const axios = require('axios')

function putRequest(path) {
    axios.put(path, {
            title: "completeing the page",
            userId: 4,
            completed: "true"
        }).then(
            response => {
                var result = response.data;
                console.log(result);
            })
        .catch(error => {
            console.log(error);
        });
}
putRequest('https://jsonplaceholder.typicode.com/todos/1');