for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",  function(){
            var buttonInnerHtml = this.innerHTML
            sound(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
            
    })
}

document.addEventListener("keypress", function(event){
    createSound(event.key);
    buttonAnimation(event.key);
});


function createSound(key){
    switch(key){
        case "w":
        var crash = new Audio("images/sounds/crash.mp3")
        crash.play();
        break;
        case "e":
        var tom3 = new Audio("images/sounds/tom-3.mp3")
        tom3.play();
        break;
        case "l":
        var snare = new Audio("images/sounds/snare.mp3")
        snare.play();
        break;
        case "c":
        var tom1 = new Audio("images/sounds/tom-1.mp3")
        tom1.play();
        break;
        case "o":
        var tom2 = new Audio("images/sounds/tom-2.mp3")
        tom2.play();
        break;
        case "m":
        var kick = new Audio("images/sounds/kick-bass.mp3")
        kick.play();
        break;
        case "e":
        var tom4 = new Audio("images/sounds/tom-4.mp3")
        tom4.play();
        break;
        default:  console.log(key);
}
}
function sound(key){
    var t = document.querySelectorAll(".drum");
    // var index = t.indexOf(key);
    var i = 0;
    while (t[i].innerHTML != key){
        i++;
    }
    var list = ["crash.mp3","kick-bass.mp3","snare.mp3","tom-1.mp3","tom-2.mp3","tom-3.mp3","tom-4.mp3"];
    const audio = new Audio("images/sounds/" + list[i]);
    audio.play();
    

}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

    

