
var tokenStr = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMzRlZTEzZDQyNzkzMDAwNDQ0ODdlNyIsImlhdCI6MTU2MzgzNTgyOSwiZXhwIjoxNTYzODM5NDI5fQ.NJ8qq0nFe-Mqu-csBOLOZ8Xj4FlN9Sk4WJHvdn4Oix8';
var API = 'https://intern-staging.herokuapp.com/api';

function doRequest(url, method, data, headers) {
    fetch('${API}${url}', {
        method: method,
        body: data,
        headers: headers ,
        },
    }) .then(
        resp => resp.json()
    ) .then(
        json => console.log(json)
    );
}
doRequest('/identification', 'GET', null)
  
var form = document.forms.namedItem('fileinfo');
form.addEventListener('submit', function (ev) {
    var formD = new FormData(this);
   
    formD.append('parentEntityId', '5d34ee13d4279300044487e7');

    doRequest('/file', 'POST', formD, tokenStr);
    ev.preventDefault();
})
    



//var activeUser = { id: '5d34ee13d4279300044487e7'};