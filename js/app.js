// GET IN THE DOM /////////////////////////////////////////////
    /* intro page*/
 /*language button*/ 
const languages = document.getElementById("lang");

/*fildes form*/
const fields = document.getElementById("fields");

 /*submitt button*/ 
 const submitButton = document.querySelector(".submit");


    /* game page*/
/* the main page */
const gamePagessss = document.querySelector(".game");

/* the number of question section */
const questionNumber = document.querySelector("header");

let question = document.querySelector("#question");

/* loading bar */
let lOaDiNgBaR = document.querySelector(".loading-bar");
let loadingBar = document.querySelector(".loading");

/* suggestions buttons */
const frsSuggestion = document.querySelector("#frsSuggestion");
const secSuggestion = document.querySelector("#secSuggestion");
const thrSuggestion = document.querySelector("#thrSuggestion");

// LOAD SOUNDS /////////////////////////////////////////////////
let first = new Audio();
first.src = "sounds/first-question.mp3";

let stress = new Audio();
stress.src = "sounds/stress.mp3";

let tRuE = new Audio();
tRuE.src = "sounds/true.mp3";

let fAlSe = new Audio();
fAlSe.src = "sounds/false.mp3";

// VARIABLES /////////////////////////////////////////////////
let randomQ = 0;
let barWidth =100;


///////////////////// QUIZ'S ////////////////////////////////// 
let quiz;
let suggestions;

/////////////////////////////////////////////////////////////////// INTRO PAGE  /////////////////////////////////////////////////////////////////

// SELECT LANGUAGE OF THE QUIZ /////////////////////////////////////
for(let i=0; i<=5; i++) {
    languages.childNodes[i].addEventListener("change",()=> {
        switch(i) {
            case 1:
            console.log("arabic");
            quiz = [
                [a = "سورة سمعها النجاشي ملك الحبشة فاضت لها دموعه فما هي ؟", number = "السؤال الاول"],
                [b = "ما هي المادة المسئولة عن تلون جسم الإنسان بالألوان الغامضة ؟", number = "السؤال الثاني"],
                [c = "من هي الدوله الوحيدة في العالم التي ليس لديها جيش ؟", number = "السؤال الثالث"],
                [d = "من هو مخترع الطائرة ذات المحرك ؟", number = "السؤال الرابع"],
                [e = "ماعدد الايام الذي خلقت فيه الارض والسماء ؟", number = "السؤال الخامس"],
                [f = "ماهو النهر الوحيد في العالم ينبع من الجنوب إلى الشمال ؟", number = "السؤال السابع"],
                [g = "ماهو علم السيتولوجيا ؟", number = "السؤال الثامن"]       
            ]
            suggestions = [
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
            break;

            case 3:
            alert("this language is not added yet");
            console.log("french");
            quiz = [
                [a = "", number = ""],
                [b = "", number = ""],
                [c = "", number = ""],
                [d = "", number = ""],
                [e = "", number = ""],
                [f = "", number = ""],
                [g = "", number = ""]       
            ]
            suggestions = [
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ]
            ]
            break;
            
            case 5:
            console.log("english");
            // SELECT THE FIELD ////////////////////////////////////////////////
            fields.addEventListener("change",(ev)=> {
                if(ev.target.value === "الرياضة") {
                    console.log("الرياضة"); 
                    quiz = [
                        [a = "What sport is played at Wimbledon? ", number = "First question"],
                        [b = " In which city were the 2000 Summer Olympic Games held?", number = "Second question"],
                        [c = "What country does the soccer player Wayne Rooney come from?", number = "Third question"],
                        [d = " In which sport was Muhammad Ali the world champion? ", number = "Fourth question"],
                        [e = "How many bases are there on a baseball field?", number = "Fifth question"],
                        [f = " In what country were the 2010 Winter Olympic Games held?", number = "Sixth question"],
                        [g = "What sport do the Los Angeles Lakers play?", number = "Seventh question"]       
                    ]
                    suggestions = [
                        [
                            [a = "Tennis", validity = true],
                            [b = "Football", validity = false],
                            [c = "Baseball", validity = false]
                        ],
                        [
                            [a = "Jakarta", validity = false],
                            [b = "Sydney", validity = true],
                            [c = "Oman", validity = false]
                        ],
                        [
                            [a = "England", validity = true],
                            [b = "Finland", validity = false],
                            [c = "France", validity = false]
                        ],
                        [
                            [a = "Powr-lifting", validity = false],
                            [b = "Swimming", validity = false],
                            [c = "Boxing", validity = true]
                        ],
                        [
                            [a = "4", validity = true],
                            [b = "5", validity = false],
                            [c = "7", validity = false]
                        ],
                        [
                            [a = "Norway", validity = false],
                            [b = "Canada", validity = true],
                            [c = "Brazil", validity = false]
                        ],
                        [
                            [a = "Rugby", validity = false],
                            [b = "Baseball", validity = false],
                            [c = "Basketball", validity = true]
                        ]
                    ]
                }else if(ev.target.value === "جغرافيا") {
                    console.log("جغرافيا");
                    quiz = [
                        [a = "Koalas and kangaroos are found in", number = "First question"],
                        [b = "The Sphinx is found in ", number = "Second question"],
                        [c = " The Statue of Liberty is found in", number = "Third question"],
                        [d = "The Parthenon is found in ", number = "Fourth question"],
                        [e = "Kiwi birds are found in ", number = "Fifth question"],
                        [f = "Stonehenge is found in ", number = "Sixth question"],
                        [g = "The Taj Mahal is found in ", number = "Seventh question"]       
                    ]
                    suggestions = [
                        [
                            [a = "Australia", validity = true],
                            [b = "South-africa", validity = false],
                            [c = "USA", validity = false]
                        ],
                        [
                            [a = "Greec", validity = false],
                            [b = "Egypt", validity = true],
                            [c = "Algeria", validity = false]
                        ],
                        [
                            [a = "USA", validity = true],
                            [b = "France", validity = false],
                            [c = "Moroco", validity = false]
                        ],
                        [
                            [a = "Russia", validity = false],
                            [b = "Portugal", validity = false],
                            [c = "Greece", validity = true]
                        ],
                        [
                            [a = "New Zealand.", validity = true],
                            [b = "Austria", validity = false],
                            [c = "Lebnon", validity = false]
                        ],
                        [
                            [a = "Mozambic", validity = false],
                            [b = "England", validity = true],
                            [c = "Qatar", validity = false]
                        ],
                        [
                            [a = "Dubai", validity = false],
                            [b = "Spain", validity = false],
                            [c = "India", validity = true]
                        ]
                    ]
                }else if(ev.target.value === "تاريخ") {
                    console.log("تاريخ");
                }else if(ev.target.value === "اسلام") {
                    console.log("اسلام");
                }
            })
            quiz = [
                [a = "", number = "First question"],
                [b = "", number = "Second question"],
                [c = "", number = "Third question"],
                [d = "", number = "Fourth question"],
                [e = "", number = "Fifth question"],
                [f = "", number = "Sixth question"],
                [g = "", number = "Seventh question"]       
            ]
            suggestions = [
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = false],
                    [b = "", validity = true],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = false],
                    [b = "", validity = false],
                    [c = "", validity = true]
                ],
                [
                    [a = "", validity = true],
                    [b = "", validity = false],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = false],
                    [b = "", validity = true],
                    [c = "", validity = false]
                ],
                [
                    [a = "", validity = false],
                    [b = "", validity = false],
                    [c = "", validity = true]
                ]
            ]
            break;
            
        }
    })
}

// SUBMIT //////////////////////////////////////////////////////////////
submitButton.addEventListener("click",(ev)=> {
    gamePagessss.style.top = "0";

    console.log(5);
    

})
 
// LOADING BAR///////////////////////////////////////////////////////////

function loading() {
    lOaDiNgBaR.style.visibility = "visible";
    setInterval(()=>{
        loadingBar.style.width = `${barWidth}%`;
        barWidth -= 1;
        if(barWidth === -5) {
            lOaDiNgBaR.style.visibility = "hidden";
            barWidth =100;
        }
    },200)
}

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
        loading()
        pickSuestion(0);
        questionNumber.innerHTML = quiz[0][1];
    },10000);
    
})


// CHOOSE A SUGGESTION :
frsSuggestion.addEventListener("click",()=> {
    stress.play();
    lOaDiNgBaR.style.visibility = "hidden";
    loadingBar.style.visibility = "hidden";
    barWidth =100;
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
        loading()
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
    lOaDiNgBaR.style.visibility = "hidden";
    loadingBar.style.visibility = "hidden";
    barWidth =100;
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
        loading()
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
    lOaDiNgBaR.style.visibility = "hidden";
    loadingBar.style.visibility = "hidden";
    barWidth =100;
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
        loading()
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

let one = "related";

localStorage.setItem("REALATED", one);


let second = localStorage.getItem("related");


let za = document.querySelector("h3");



za.textContent = second;