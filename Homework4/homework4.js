
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    
    doRequest({});
});

function doRequest(data, token) {
    fetch('https://intern-staging.herokuapp.com/api/identification', {
        method: 'GET',
        //body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            //'token': token
        },
    }) .then(
        resp => resp.json()
    ) .then(
        json => console.log(json)
    );
}