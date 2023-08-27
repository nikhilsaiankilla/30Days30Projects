const buttons = document.querySelectorAll(".buttons")
const inputField = document.getElementById("input")

let string = " "
buttons.forEach(button => {
    button.addEventListener("click",()=>{
        let value = button.innerHTML;
        if(value === 'AC'){
            inputField.value = ""
            string = " "
        } else if(value === "="){
            inputField.value = eval(string);
            string = " "
        }else{
            string += value;
            inputField.value = string;
        }
    })
})