let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})

let voices = []

let voiceSelect = document.querySelector("select")


window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices()

    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i)))
} 

