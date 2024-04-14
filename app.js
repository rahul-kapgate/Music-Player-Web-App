let playBtn = document.querySelector("#btn1");
let audioElements = document.querySelectorAll(".songs audio");
let currentAudioIndex = 0;
let isPlaying = false;

let togglePlayPause = () => {
  if (isPlaying) {
    audioElements[currentAudioIndex].pause();
  } else {
    audioElements[currentAudioIndex].play();
  }
  isPlaying = !isPlaying;
  updatePlayButtonIcon();
};

let updatePlayButtonIcon = () => {
  if (isPlaying) {
    playBtn.setAttribute("class", "fa-solid fa-pause");
  } else {
    playBtn.setAttribute("class", "fa-solid fa-play");
  }
};

playBtn.addEventListener("click", togglePlayPause);

let stopBtn = document.querySelector("#stopBtn");

let stopAudio = () => {
  audioElements[currentAudioIndex].pause();
  isPlaying = false;
  updatePlayButtonIcon();
};

stopBtn.addEventListener("click", stopAudio);

//scolling effect function

let songNameContainer = document.querySelector(".song-name");

let songNames = [
  "Dunki Drop 5: O Maahi | Shah Rukh Khan",
  "Satranga (From \"ANIMAL\") - Song",
  "Thoda aur Song by Arijit Singh and Palak Muchhal",
  "Tu Hi Hai Aashiqui Song by Arijit Singh",
  "Rasiya - Song by Pritam Chakraborty, Shreya Ghoshal, and Tushar Joshi"
];

let updateSongName = () => {
  let currentSongIndex = currentAudioIndex % audioElements.length;
  songNameContainer.textContent = songNames[currentSongIndex];
};


// audio next

let nextBtn = document.querySelector("#nextBtn");
let prevBtn = document.querySelector("#prevBtn");

let playNextTrack = () => {
  stopAudio();
  currentAudioIndex = (currentAudioIndex + 1) % audioElements.length;
   updateSongName();
  togglePlayPause();
};

let playPrevTrack = () => {
  stopAudio();
  currentAudioIndex = (currentAudioIndex - 1 + audioElements.length) % audioElements.length;
  updateSongName();
  togglePlayPause();
};

nextBtn.addEventListener("click", playNextTrack);
prevBtn.addEventListener("click", playPrevTrack);


////









