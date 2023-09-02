const song = document.querySelector("#song");
const progress = document.querySelector(".song-length");
const ctrlIcon = document.querySelector("#play-pause-btn");

song.onLoadedmetadata = function () {
  progress.value = song.currentTime;
  progress.max = song.duration;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.add("fa-play");
    ctrlIcon.classList.remove("fa-pause");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

if(!song.play){
    console.log("OK!!")
}else{
    setInterval(()=>{
        progress.value = song.currentTime
    },500)
}