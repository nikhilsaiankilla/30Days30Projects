const questions = [
    {
        question: "What is the capital of France?", //1
        answers: [
            { text: "Berlin",   correct: "false" },
            { text: "Madrid",   correct: "false" },
            { text: "Rome",     correct: "false" },
            { text: "Paris",    correct: "true" }
        ]
    },
    {
        question: "What is the largest mammal on Earth?", //2
        answers: [ 
            { text: "African Elephant",     correct: "false" },
            { text: "Giraffe",              correct: "false" },
            { text: "Hippopotamus",         correct: "false" },
            { text: "Blue Whale",           correct: "true" }
        ]
    },
    {
        question: "Which planet is known as the \'Red Planet\' ", //3
        answers: [ 
            { text: "Venus",    correct: "false" },
            { text: "Mars",     correct: "true" },
            { text: "Jupiter",  correct: "false" },
            { text: "Saturn",   correct: "false" }
        ]
    },
    {
        question: "Which gas do plants use for photosynthesis?", //4
        answers: [ 
            { text: "Oxygen",           correct: "false" },
            { text: "Nitrogen",         correct: "false" },
            { text: "Carbon Dioxide",   correct: "true" },
            { text: "Hydrogen",         correct: "false" }
        ]
    },
    {
        question: "Who painted the Mona Lisa?", //5
        answers: [ 
            { text: "Vincent van Gogh",     correct: "false" },
            { text: "Pablo Picasso",        correct: "false" },
            { text: "Michelangelo",         correct: "false" },
            { text: "Leonardo da Vinci",    correct: "true" }
        ]
    },
    {
        question: "What is the tallest mountain in the world?", //6
        answers: [ 
            { text: "Mount Everest ",        correct: "true" },
            { text: "K2",                   correct: "false" },
            { text: "Mount Kilimanjaro",    correct: "false" },
            { text: "Mount Fuji",           correct: "false" }
        ]
    },
    {
        question: "Which famous scientist developed the theory of relativity?", //7
        answers: [ 
            { text: "Isaac Newton",         correct: "false" },
            { text: "Albert Einstein",      correct: "true" },
            { text: "Galileo Galilei",      correct: "false" },
            { text: "Nikola Tesla",         correct: "false" }
        ]
    },
    {
        question: "Which ocean is the largest by area?", //8
        answers: [ 
            { text: "Indian Ocean",         correct: "false" },
            { text: "Atlantic Ocean",       correct: "false" },
            { text: "Pacific Ocean",        correct: "true" },
            { text: "Arctic Ocean",         correct: "false" }
        ]
    },
    {
        question: "What is the chemical symbol for gold?", //9
        answers: [ 
            { text: "Gd",       correct: "false" },
            { text: "Ag",       correct: "false" },
            { text: "Pt",       correct: "false" },
            { text: "Au",       correct: "true" }
        ]
    },
    {
        question: "Which instrument is used to measure temperature?", //10
        answers: [ 
            { text: "Thermometer",      correct: "true" },
            { text: "Hygrometer",       correct: "false" },
            { text: "Barometer",        correct: "false" },
            { text: "Altimeter",        correct: "false" }
        ]
    }
]

const questionElement = document.querySelector("#question")
const nextBtn = document.querySelector("#next-btn")
const answerBtn = document.querySelector("#answer-btn")

let questionIndexCount = 0;
let score = 0;

function startQuiz(){
    questionIndexCount = 0
    score = 0;
    nextBtn.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndexCount]
    let questionNumber = questionIndexCount + 1;

    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerBtn.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer)
    })
}

function resetState(){
    nextBtn.style.display = "none"
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e){
    const selectedBTn = e.target;
    const isCorrect = selectedBTn.dataset.correct === "true"

    if(isCorrect){
        selectedBTn.classList.add("correct")
        score++;
    }else{
        selectedBTn.classList.add("incorrect")
    }

    Array.from(answerBtn.children).forEach((button)=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = "true"
    })
    nextBtn.style.display = "block"
}


function handleNextButton(){
    questionIndexCount++;
    if(questionIndexCount < questions.length){
        showQuestion();
    }else{
         showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${(questions.length)}`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block"
}
nextBtn.addEventListener("click",()=>{
    if(questionIndexCount < questions.length){
        handleNextButton()
    }else{
        startQuiz();
    }
})
startQuiz()