// GET IN THE DOM :
const questionNumber = document.querySelector("header");

const question = document.querySelector("#question");

const frsSuggestion = document.querySelector("#frsSuggestion");
const secSuggestion = document.querySelector("#secSuggestion");
const thrSuggestion = document.querySelector("#thrSuggestion");

/* loading bar */
let loadingBar = document.querySelector(".loading");

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
    [a = "سورة سمعها النجاشي ملك الحبشة فاضت لها دموعه فما هي ؟", number = "السؤال الاول"],
    [b = "ما هي المادة المسئولة عن تلون جسم الإنسان بالألوان الغامضة ؟", number = "السؤال الثاني"],
    [c = "من هي الدوله الوحيدة في العالم التي ليس لديها جيش ؟", number = "السؤال الثالث"],
    [d = "من هو مخترع الطائرة ذات المحرك ؟", number = "السؤال الرابع"],
    [e = "ماعدد الايام الذي خلقت فيه الارض والسماء ؟", number = "السؤال الخامس"],
    [f = "ماهو النهر الوحيد في العالم ينبع من الجنوب إلى الشمال ؟", number = "السؤال السابع"],
    [g = "ماهو علم السيتولوجيا ؟", number = "السؤال الثامن"]       
]

const suggestions = [
    [
        [a = "سورة مريم", validity = true],
        [b = "سورة الاخلاص", validity = false],
        [c = "سورة الفاتحة", validity = false]
    ],
    [
        [a = "قرنية العين", validity = false],
        [b = "الخلايا العصبية", validity = false],
        [c = " هي مادة الميلانين", validity = true]
    ],
    [
        [a = "سويسرا", validity = true],
        [b = "كندا ", validity = false],
        [c = "السودان ", validity = false]
    ],
    [
        [a = "الاخوين رايت", validity = true],
        [b = "ابراهام طليطله", validity = false],
        [c = "جورج برنادشو", validity = false]
    ],
    [
        [a = " سبعة ايام", validity = false],
        [b = " عشرة ايام", validity = false],
        [c = " سته ايام", validity = true]
    ],
    [
        [a = "الدانوب", validity = false],
        [b = "النيل ", validity = true],
        [c = "الامازون", validity = false]
    ],
    [
        [a = "علم الخلايا", validity = true],
        [b = "علم الاجناس", validity = false],
        [c = "علم المكان", validity = false]
    ]
]

// VARIABLES :
let randomQ = 0;
let barWidth =100;

// LOAD /

function loading(widit) {
    loadingBar.style.width = `${widit}%`;
}

setInterval(()=>{
    loading(barWidth);
    barWidth -= 1;
},200)

/*
loading(barWidth);
*/

// PICK QUESTIONS & QUESTION NUMBER & SUGGESTIONS:
function pickSuestion(rand) {
            questionNumber.innerHTML = quiz[rand][1];

            question.innerHTML = quiz[rand][0];

            frsSuggestion.innerHTML = suggestions[rand][0][0];
            secSuggestion.innerHTML = suggestions[rand][1][0];
            thrSuggestion.innerHTML = suggestions[rand][2][0];
}



// CHOISE TRUE QUESTION :
let truth =-1 ;

function chooseTrue(suggestion) {
    for( let i = 0; i<=suggestions.length; i++) {
        if(suggestions[randomQ][i][1] === true) {
            suggestion.style.backgroundImage = 'url(images/true.png)';
            truth += 1;
        }
    }
}


// CHOISE TRUE QUESTION :
function chooseTrueToo(num,suggestion) {
    if(suggestions[randomQ][num][1] === true) {
        suggestion.style.backgroundImage = 'url(images/true.png)';
    }
}


// RUN IT :
question.addEventListener("click",()=> {
    first.play();
    setTimeout(()=> {
        pickSuestion(0);
        questionNumber.innerHTML = quiz[0][1];
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
    if(suggestions[randomQ][1][1] === true) {
            secSuggestion.style.backgroundImage = 'url(images/true.png)';
    }else if(suggestions[randomQ][2][1] === true) {
            thrSuggestion.style.backgroundImage = 'url(images/true.png)';
    }
    },13000)

    setTimeout(()=>{
        frsSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        secSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        thrSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
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
    if(suggestions[randomQ][0][1] === true) {
        frsSuggestion.style.backgroundImage = 'url(images/true.png)';
    }else if(suggestions[randomQ][2][1] === true) {
        thrSuggestion.style.backgroundImage = 'url(images/true.png)';
    }

    },13000)

    setTimeout(()=>{
        frsSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        secSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        thrSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
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
    if(suggestions[randomQ][0][1] === true) {
        frsSuggestion.style.backgroundImage = 'url(images/true.png)';
    }else if(suggestions[randomQ][1][1] === true) {
        secSuggestion.style.backgroundImage = 'url(images/true.png)';
    }

    },13000)

    setTimeout(()=>{
        frsSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        secSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        thrSuggestion.style.backgroundImage = 'url(images/suggestion.png)';
        randomQ++;
        pickSuestion(randomQ);
    },17000)

    if(randomQ === quiz.length) {
        pickSuestion(0);
    }

})
