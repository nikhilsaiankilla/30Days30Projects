const passwordBox = document.querySelector(".input-box")
const copied = document.querySelector(".copied")

const upperCase = "ABCDEFGHIJKLMNOPQSTVUWSYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const Symbols = "!@#$%%^&*()-?"

let password = " "
let length = 12;

let allChar = upperCase + lowerCase + numbers + Symbols;

function generatePassword(){

    password = " "

    while(password.length < length){
        password += allChar[Math.round( Math.random() * allChar.length)]
    }

    passwordBox.value = password

}

async function copyContent(){
    if(passwordBox.value){
        await navigator.clipboard.writeText(passwordBox.value);
        copied.innerHTML = "Copied"
        copied.style.display = "block"
        setTimeout(()=>{
            copied.style.display = "none"
        },3000)
    }else{
        alert("Generate password before Copying")
    }
}