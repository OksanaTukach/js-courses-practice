var contentText = document.querySelector('.content');
var popupCnt = document.querySelector('.popup-cnt');
var popupClose = document.querySelector('.close-btn');
popupCnt.style.display = 'none';

contentText.addEventListener('click', function(){
    popupCnt.style.display = "block";
    contentText.style.opacity = "0.5";
})
popupClose.addEventListener('click', function(){
    popupCnt.style.display = 'none';
    contentText.style.opacity = "1";
})
