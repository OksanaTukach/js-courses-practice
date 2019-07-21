var btn = document.querySelector('#btn');

btn.addEventListener('click', function(event){
    doRequest({})
});

function doRequest(data) {
    fetch('https://intern-staging.herokuapp.com/api/indefication', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    }).then(
        resp => resp.json()
    ).then(
        json => console.log(json)
    );
}