let nameError = document.querySelector(".name-error")
let phoneError = document.querySelector(".phone-error")
let emailError = document.querySelector(".email-error")
let messageError = document.querySelector(".message-error")
let submitError = document.querySelector(".error")

function validateName(){
    let name = document.getElementById("validate-name").value
    if(name.length == 0){
        nameError.innerHTML = "name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Enter Full Name"
        return false
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`
    return true
}


function validatePhone(){
    let phone = document.getElementById("validate-phone").value

    if(phone.length == 0){
        phoneError.innerHTML = "Phone No required"
        return false
    }
    if(phone.length !== 10){
        phoneError.innerHTML = "Phone No should <br> be 10 digits"
        return false
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phone.innerHTML = "Only digits please!"
        return false
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}


function validateEmail(){
    let email = document.getElementById("validate-email").value
    
    if(email.length == 0){
        emailError.innerHTML = "email required"
        return false
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Enter Valid email"
        return false
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validateMsg(){
    let message = document.getElementById("validate-msg").value
    let required = 30;
    let left = required - message.length;
    if(message.length == 0){
        messageErrorError.innerHTML = "message required"
        return false
    }

    if(left > 0){
        messageError.innerHTML = `${left} characters required`
        return false
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
        submitError.style.display = "block"
        submitError.innerHTML = "Please fix the error"
        setTimeout(()=>{
            submitError.style.display = "none"
        },3000)
    
        return false
    }
    return true
}