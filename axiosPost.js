const axios = require('axios')

function postRequest(path) {
    axios.post(path, {
            title: "complete page",
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
postRequest('https://jsonplaceholder.typicode.com/todos');