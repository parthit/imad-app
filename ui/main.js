console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'Naya text daala bhaiiii woh bhi saala java script mai !';


//moving the image
var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}


var img = document.getElementById('madi');
img.onclick = function () {
    
    var interval = setInterval(moveRight, 100);
    
    
};
