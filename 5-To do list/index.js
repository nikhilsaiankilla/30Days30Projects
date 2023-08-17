const inputBox = document.querySelector(".input-box")
const addBtn = document.querySelector(".add-btn")
const listContainer = document.querySelector(".task-container")

function addTask(){
    if(inputBox.value == ""){
        alert("You must enter something")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;

        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "&#10008;"
        li.appendChild(span)
        saveData()
    }
}

addBtn.addEventListener("click",()=>{
    addTask()
})

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("todoTasks", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("todoTasks")
}

showTask()