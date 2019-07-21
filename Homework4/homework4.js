'use strict'
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event){
    doRequest({email: 'oshabovta@mail.ru'})
});

function doRequest(data) {
    fetch('https://intern-staging.herokuapp.com/api/indetification', {
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