'use strict'
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event){
    var newUser = {email: 'oshabovta@mail.ru'};
    var activeUser = {id: '5d34e775d4279300044487e5' };
    doRequest(activeUser)
});

function doRequest(data) {
    fetch('https://intern-staging.herokuapp.com/api/identification/activate', {
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