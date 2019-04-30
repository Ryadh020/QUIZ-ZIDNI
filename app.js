// GET IN THE DOM :
const question = document.querySelector("#question");

const frsSuggestion = document.querySelector("#frsSuggestion");
const secSuggestion = document.querySelector("#secSuggestion");
const thrSuggestion = document.querySelector("#thrSuggestion");

// QUIZ'S : 
const quiz = [
        a = "QUESTION 1",
        b = "QUESTION 2",
        c = "QUESTION 3"
]

const suggestions = [
    [
        a = "SUGGESTION 1" ,
        b = "SUGGESTION 2",
        c = "SUGGESTION 3"
    ],
    [
        a = "SUGGESTION 1" ,
        b = "SUGGESTION 2",
        c = "SUGGESTION 3"
    ],
    [
        a = "SUGGESTION 1" ,
        b = "SUGGESTION 2",
        c = "SUGGESTION 3"
    ]
]

// VARIABLES :
let randomQ = Math.floor(Math.random()*3);

// PUT THE TEXT ON :
setTimeout(() => {
    question.innerHTML = quiz[randomQ];

    frsSuggestion.innerHTML = suggestions[randomQ][0];
    secSuggestion.innerHTML = suggestions[randomQ][1];
    thrSuggestion.innerHTML = suggestions[randomQ][2];
}, 1000);

// CHOOSE QUESTIONS :
