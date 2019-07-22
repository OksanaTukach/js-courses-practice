
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    var newUser = {email: 'okstukach@gmail.com'};
    var activeUser = { id: '5d34ee13d4279300044487e7'};
    var signInReq = {email: 'okstukach@gmail.com' , password: '6s1Ms6'};
    doRequest(signInReq);
});

function doRequest(data) {
    fetch('https://intern-staging.herokuapp.com/api/identification/sign_in', {
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