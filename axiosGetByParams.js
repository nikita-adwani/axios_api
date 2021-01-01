const axios = require('axios')

function makeRequestByParams(path) {
    axios.get(path, {
            params: {
                title: "quis ut nam facilis et officia qui",
            }
        }).then(
            response => {
                var result = response.data;
                console.log(result);
            })
        .catch(error => {
            console.log(error);
        });
}
makeRequestByParams('https://jsonplaceholder.typicode.com/todos');