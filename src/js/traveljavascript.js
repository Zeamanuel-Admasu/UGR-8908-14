var i = 0;
var images = []
var time = 2000;

images[0] = 'images/sofoamr.jpg'
images[1] = 'images/debredamo.jpg'
images[2] = 'images/volcano.jpg'
images[3] = 'images/axum.jpg'

function changeImg(){
    document.slide.src = images[i];
    if (i < images.length - 1){
        i++;
    } else {
        i = 0
    }

    setTimeout("changeImg()", time);
}


window.onload = changeImg;
