// GET IN THE DOM :
const question = document.querySelector("#question");

const frsSuggestion = document.querySelector("#frsSuggestion");
const secSuggestion = document.querySelector("#secSuggestion");
const thrSuggestion = document.querySelector("#thrSuggestion");

// QUIZ'S : 
const quiz = [
        a = "1 + 1",
        b = " 5 * 2",
        c = "15 / 3"
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

/*
// PICK FIRST QUESTION :

function pickFirst() {
    setTimeout(() => {
        question.innerHTML = quiz[0];

        frsSuggestion.innerHTML = suggestions[0][0][0];
        secSuggestion.innerHTML = suggestions[0][1][0];
        thrSuggestion.innerHTML = suggestions[0][2][0];

    }, 100);
}
pickFirst()
*/

// PICK QUESTIONS :
function pickSuestion(rand) {
        setTimeout(() => {
            question.innerHTML = quiz[rand];

            frsSuggestion.innerHTML = suggestions[rand][0][0];
            secSuggestion.innerHTML = suggestions[rand][1][0];
            thrSuggestion.innerHTML = suggestions[rand][2][0];

        }, 100);
}

// RUN IT :
question.addEventListener("click",()=> {
    pickSuestion(0);
})

// CHOOSE A SUGGESTION :
frsSuggestion.addEventListener("click",()=> {

    if(suggestions[randomQ][0][1] === true) {
        frsSuggestion.style.backgroundColor = "green";
    }else {
        frsSuggestion.style.backgroundColor = "red";
    }
    randomQ++;
    pickSuestion(randomQ);


    if(randomQ === quiz.length) {
        randomQ = 0;
    }

})

secSuggestion.addEventListener("click",()=> {

    if(suggestions[randomQ][1][1] === true) {
        secSuggestion.style.backgroundColor = "green";
    }else {
        secSuggestion.style.backgroundColor = "red";
    }
    randomQ++;
    pickSuestion(randomQ);


    if(randomQ === quiz.length) {
        randomQ = 0;
    }

})

thrSuggestion.addEventListener("click",()=> {

    if(suggestions[randomQ][2][1] === true) {
        thrSuggestion.style.backgroundColor = "green";
    }else {
        thrSuggestion.style.backgroundColor = "red";
    }
    randomQ++;
    pickSuestion(randomQ);


    if(randomQ === quiz.length) {
        randomQ = 0;
    }

})
/*
const frsSuggestion = document.querySelector("#frsSuggestion");
const secSuggestion = document.querySelector("#secSuggestion");
const thrSuggestion = document.querySelector("#thrSuggestion");

*/