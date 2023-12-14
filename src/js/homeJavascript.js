document.querySelectorAll(".voice")[0].addEventListener("click",  function(){
    var buttonInnerHtml1 = this.innerHTML
            var audio = new Audio("images/english.mp3")
            audio.play();
            buttonAnimation(buttonInnerHtml1)
})
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}