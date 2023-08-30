const userInput = document.querySelector("#date-box");
const submitBtn = document.querySelector(".submit-btn")
const result = document.querySelector(".result")

let birthday = 0;

userInput.max = new Date().toISOString().split("T")[0]

function calculateBday() {

    let birthDate = new Date(userInput.value)

    let d1 = birthDate.getDate()          
    let m1 = birthDate.getMonth() + 1       
    let y1 = birthDate.getFullYear()       

    let today = new Date()

    let d2 = today.getDate()          
    let m2 = today.getMonth() + 1   
    let y2 = today.getFullYear()    

    let d3,m3,y3

    y3 = y2 - y1                

    if(m2 >= m1){               
        m3 = m2 - m1            
    }else{
        y3--;
        m3 = 12 + m2 - m1
    }


    if(d2 >= d1){                
        d3 = d2 - d1;
    }else{
        m3--;  
        d3 = getDaysInMonth(y1,m1) + d2 - d1  
    }

    if(m3 < 0){
        m3 = 11
        y3--;
    }

    result.style.display = "block"

    document.querySelector(".year").innerHTML = y3; 
    document.querySelector(".month").innerHTML = m3; 
    document.querySelector(".date").innerHTML = d3; 
}

function getDaysInMonth(year,month){
    return new Date(year,month, 0).getDate()
}

submitBtn.addEventListener("click", () => {
    calculateBday()
})