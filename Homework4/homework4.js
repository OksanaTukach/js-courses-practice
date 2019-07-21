'use strict'
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event){
    doRequest({email: 'okstukach@gmail.com'})
});

function doRequest(data) {
    fetch('https://intern-staging.herokuapp.com/api/identification', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
    }) .then(
        resp => resp.json()
    ) .then(
        json => console.log(json)
    );
}