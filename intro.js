// ACCESS TO THE CANVAS :
let naMe = document.querySelector(".name");
let submit = document.querySelector(".submit");

// GET AUDIO :
const intro = new Audio();
intro.src = "sounds/intro-1.mp3";



window.addEventListener("load", ()=> {
    intro.play();
})

