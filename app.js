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

// PUT THE TEXT ON :
setTimeout(() => {
    question.innerHTML = quiz[2];

    frsSuggestion.innerHTML = suggestions[2][0];
    secSuggestion.innerHTML = suggestions[2][1];
    thrSuggestion.innerHTML = suggestions[2][2];
}, 1000);