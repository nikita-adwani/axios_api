const axios = require('axios')

function makeRequest(path) {
    axios.get(path).then(
            response => {
                var result = response.data;
                console.log(result);
            })
        .catch(error => {
            console.log(error);
        });
}
makeRequest('https://jsonplaceholder.typicode.com/todos');