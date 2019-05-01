// GET IN THE DOM :
const question = document.querySelector("#question");

const frsSuggestion = document.querySelector("#frsSuggestion");
const secSuggestion = document.querySelector("#secSuggestion");
const thrSuggestion = document.querySelector("#thrSuggestion");

// LOAD SOUNDS :
let first = new Audio();
first.src = "sounds/first-question.mp3";

let stress = new Audio();
stress.src = "sounds/stress.mp3";

let tRuE = new Audio();
tRuE.src = "sounds/true.mp3";

let fAlSe = new Audio();
fAlSe.src = "sounds/false.mp3";
// QUIZ'S : 
const quiz = [
    [a = "1 + 1", number = 1],
    [b = "5 * 2", number = 1],
    [c = "15 / 3", number = 3]       
]

const suggestions = [
    [
        [a = "2", validity = true],
        [b = "5", validity = false],
        [c = "15", validity = false]
    ],
    [
        [a = "14", validity = false],
        [b = "7", validity = false],
        [c = "10", validity = true]
    ],
    [
        [a = "25", validity = false],
        [b = "5", validity = true],
        [c = "0.7", validity = false]
    ]
]

// VARIABLES :
let randomQ = 0;

// PICK QUESTIONS :
function pickSuestion(rand) {
            question.innerHTML = quiz[rand][0];

            frsSuggestion.innerHTML = suggestions[rand][0][0];
            secSuggestion.innerHTML = suggestions[rand][1][0];
            thrSuggestion.innerHTML = suggestions[rand][2][0];
}

// RUN IT :
question.addEventListener("click",()=> {
    first.play();
    setTimeout(()=> {
        pickSuestion(0);
    },10000);
    
})

// CHOOSE A SUGGESTION :
frsSuggestion.addEventListener("click",()=> {
    stress.play();
    frsSuggestion.style.backgroundImage = 'url(images/stress.png)';
    setTimeout(()=>{
    if(suggestions[randomQ][0][1] === true) {
        frsSuggestion.style.backgroundImage = 'url(images/true.png)';
        tRuE.play();
    }else {
        frsSuggestion.style.backgroundImage = 'url(images/fals.png)';
        fAlSe.play();
    }
    },11000)

    setTimeout(()=>{
        frsSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        randomQ++;
        pickSuestion(randomQ);
    },17000)
    

    if(randomQ === quiz.length) {
        pickSuestion(0);
    }

})

secSuggestion.addEventListener("click",()=> {
    stress.play();
    secSuggestion.style.backgroundImage = 'url(images/stress.png)';
    setTimeout(()=>{
    if(suggestions[randomQ][1][1] === true) {
        secSuggestion.style.backgroundImage = 'url(images/true.png)';
        tRuE.play();
    }else {
        secSuggestion.style.backgroundImage = 'url(images/fals.png)';
        fAlSe.play();
    }
    },11000)

    setTimeout(()=>{
        secSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        randomQ++;
        pickSuestion(randomQ);
    },17000)

    if(randomQ === quiz.length) {
        pickSuestion(0);
    }

})

thrSuggestion.addEventListener("click",()=> {
    stress.play();
    thrSuggestion.style.backgroundImage = 'url(images/stress.png)';
    setTimeout(()=>{
    if(suggestions[randomQ][2][1] === true) {
        thrSuggestion.style.backgroundImage = 'url(images/true.png)';
        tRuE.play();
    }else {
        thrSuggestion.style.backgroundImage = 'url(images/fals.png)';
        fAlSe.play();
    }
    },11000)

    setTimeout(()=>{
        thrSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        randomQ++;
        pickSuestion(randomQ);
    },17000)

    if(randomQ === quiz.length) {
        pickSuestion(0);
    }

})
