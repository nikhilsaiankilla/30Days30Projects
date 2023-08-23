const correct = document.querySelector(".correct")
const wrong = document.querySelector(".wrong")
const scoreValue = document.querySelector(".score")
const question = document.querySelector(".question")
const startBtn = document.querySelector(".start-btn") 
const restartBtn = document.querySelector(".restart-btn") 
const timeRemaining = document.querySelector(".time-remaining") 
const time = document.querySelector(".time") 
const gameOver = document.querySelector(".game-over") 

let score = 0;
startBtn.addEventListener("click",startCountdown);
restartBtn.addEventListener("click",restartGame);

function startCountdown(){
    restartBtn.style.display = "block"
    startBtn.style.display = "none"
    let remainingTime = 60;
    timeRemaining.style.display = "block"
  action =  setInterval(()=>{
        if(remainingTime !== 0){
            remainingTime -= 1;
            time.innerHTML = remainingTime;
        }else{
            clearInterval(action)
            timeRemaining.style.display = "none"
            gameOver.style.display = "block"
            document.querySelector(".final-score").innerHTML = score
        }
    },1000)
    generateQA();
}

function restartGame(){
    location.reload();
    score = 0;
}

function generateQA(){
    let x = Math.round(Math.random() * 9) + 1;
    let y = Math.round(Math.random() * 9) + 1;
    let correstAnswer = x * y;
    question.innerHTML = x + " x " + y

    let correctPosition = Math.round(Math.random() * 3) + 1;
    document.querySelector(".option-" + correctPosition).innerHTML = correstAnswer;

    let answers = [correstAnswer] 
    
    for(i=1 ; i< 5 ; i++){

        if(i !== correctPosition){
            do{
                x = Math.round(Math.random() * 9) + 1;
                y = Math.round(Math.random() * 9) + 1;
                 wrongAnswer = x * y;
            }
            while(answers.indexOf(wrongAnswer) > -1)
            document.querySelector(".option-" + i).innerHTML = wrongAnswer;
        }
    }

    for(i=1;i<5;i++){
        const option = document.querySelector(".option-" + i)
    
        option.addEventListener("click",()=>{
            if(option.innerHTML == correstAnswer){
                score++
                scoreValue.innerHTML = score;
                correct.style.display = "block"
                setTimeout(()=>{
                    correct.style.display = "none"
                },1000)
                generateQA();
            }else{
                wrong.style.display = "block"
                setTimeout(()=>{
                    wrong.style.display = "none"
                },1000)
            }
        })
    }


}

