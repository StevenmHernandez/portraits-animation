var $canvas = $('canvas')[0];
var ctx = $canvas.getContext("2d");

setInterval(function () {
    var randomImage = Math.floor(Math.random() * 9);
    var img = $('img')[randomImage];
    console.log(randomImage);
    var x = Math.random()*450;
    var width = Math.random() * (450 - x);
    ctx.drawImage(img,x,0,width,450,x+(Math.random()*99),0,width+(Math.random()*99),450);
}, 90);

function getRandom() {
    var random = Math.floor(Math.random() * imageCount);
    //console.log(imageCount, random);
    if (random >= 0) {
        placeImage('uploads/' + random + '.jpg');
    }
}

function placeImage(uri) {
    if (uri) {
        $('img:eq(' + Math.round(Math.random() * 9) + ')').attr('src', '/' + uri);
    }
}