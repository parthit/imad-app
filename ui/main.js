console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'Why isnt this line added ?';
element.innerHTML = 'This is a second line that I have added in java script.';

//moving the image
var marginLeft = 0;

function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}


var img = document.getElementById('madi');
img.onclick = function () {
    
    var interval = setInterval(moveRight, 50);
    
    
};
