
var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
   // var newUser = {email: 'okstukach@gmail.com'};
    //var activeUser = { id: '5d34ee13d4279300044487e7'};
   // var tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMzRlZTEzZDQyNzkzMDAwNDQ0ODdlNyIsImlhdCI6MTU2MzgyMzA4MSwiZXhwIjoxNTYzODI2NjgxfQ.0IzL8UtVhOwsK1qWpzwXrq7OrGFoFRZkvscE0uw-tSc';
   // var signInReq = {email: 'okstukach@gmail.com' , password: '6s1Ms6'};
   // var comment = {message: "Hello it", parentId: "test-234"};
    doRequest({});
});

function doRequest(dat) {
    fetch('https://intern-staging.herokuapp.com/api/identification', {
        method: 'GET',
        //body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
        },
    }) .then(
        resp => resp.json()
    ) .then(
        json => console.log(json)
    );
}