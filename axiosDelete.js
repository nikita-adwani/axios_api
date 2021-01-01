const axios = require('axios')

function deleteRequest(path) {
    axios.delete(path).then(
            response => {
                var result = response.status;
                console.log(result);
            })
        .catch(error => {
            console.log(error);
        });
}
deleteRequest('https://jsonplaceholder.typicode.com/todos/1');