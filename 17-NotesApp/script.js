const notesContainer = document.querySelector(".notes-container")
const createBtn = document.querySelector(".create-btn")


createBtn.addEventListener("click",()=>{
    creatingNotes()
})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "P"){
        const inputBox = document.querySelectorAll(".input-box")
        inputBox.forEach((notes)=>{
            notes.onkeyup = ()=>{
                saveNotes()
            }
        })
    }else if (e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        saveNotes()
    }
})

function creatingNotes(){
    let p = document.createElement("p")
    p.classList.add("input-box")
    p.setAttribute("contenteditable","true")
    let img = document.createElement("img")
    img.src = "./images/delete.png"
    p.appendChild(img)
    notesContainer.appendChild(p)
    saveNotes()
}

function saveNotes(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}

showNotes()
