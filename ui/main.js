console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML = 'Naya text daala bhaiiii woh bhi saala java script mai !';


//moving the image

var img = document.getElementById('madi');
img.onclick = function () {
    
    var interval = setInterval(moveLeft, 100);
    img.style.marginLeft = '100px';
    
};
