var simpleBtn = document.querySelector('.simple');
var fancyBtn = document.querySelector('.fancy');
var disabledBtn = document.querySelector('.disabled');

var simpleCtnt = document.querySelector('.content-simple');
var fancyCtnt = document.querySelector('.content-fancy');
var disabledCtnt = document.querySelector('.content-disabled');

simpleCtnt.style.display = "none";
fancyCtnt.style.display = "none";
disabledCtnt.style.display = "none";

simpleBtn.addEventListener('click', function(){
    simpleCtnt.style.display = "block";
    fancyCtnt.style.display = "none";
    disabledCtnt.style.display = "none";  
})

fancyBtn.addEventListener('click', function(){
    simpleCtnt.style.display = "none";
    fancyCtnt.style.display = "block";
    disabledCtnt.style.display = "none";  
})

disabledBtn.addEventListener('click', function(){
    simpleCtnt.style.display = "none";
    fancyCtnt.style.display = "none";
    disabledCtnt.style.display = "block";  
})