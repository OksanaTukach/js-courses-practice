
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    var newUser = {email: 'okstukach@gmail.com'};
    var activeUser = { id: '5d34ee13d4279300044487e7'};
    var tokenStr = {'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkM…jY3fQ.i8QSZtlJPcMewoUrmpjFp_REXr--jE_nV-_td27Lalk'};
    var signInReq = {email: 'okstukach@gmail.com' , password: '6s1Ms6'};
    doRequest(signInReq, tokenStr);
});

function doRequest(data, token) {
    fetch('https://intern-staging.herokuapp.com/api/comment', {
        method: 'GET',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'token': token
        },
    }) .then(
        resp => resp.json()
    ) .then(
        json => console.log(json)
    );
}