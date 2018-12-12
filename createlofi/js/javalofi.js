var RecordVolume = document.getElementById("recordvolume")

function setRecordVolume(volume) {
    RecordAudio.volume = volume;
}

var RainVolume = document.getElementById("rainvolume")

function setRainVolume(volume) {
    Rain.volume = volume;
}
var RecordAudio = document.getElementById("RecordButton");
var isPlaying = false;

function ToggleRecord(img) {
  if (isPlaying) {
    RecordButton.pause()
    RecordAudio.className = "pauserecord"
    RecordAudio.classList.add('pauserecord');
    // RecordAudio.appendChild(RecordAudio);
} 

else {
    RecordButton.play();
    RecordAudio.className = "playrecord"
    RecordAudio.classList.add('playrecord')
    // RecordAudio.appendChild(RecordAudio);
  }
};
RecordButton.onplaying = function() {
  isPlaying = true;

};
RecordButton.onpause = function() {
  isPlaying = false;
};


var Rain = document.getElementById("RainButton");
var isPlaying = false;

function ToggleRain() {
  if (isPlaying) {
    Rain.pause()
    RainButton.className = "pauserain"
    // Rain.appendChild(Rain);
 } 
  else {
    Rain.play()
    RainButton.className = "playrain"
    // Rain.appendChild(Rain);
  }
};
Rain.onplaying = function() {
  isPlaying = true;
};
Rain.onpause = function() {
  isPlaying = false;

};

var snd1  = new Audio();
var src1  = document.createElement("Record");
src1.type = "audio/mpeg";
src1.src  = "audio/Record.wav";
snd1.appendChild(src1);

var snd2  = new Audio();
var src2  = document.createElement("Rain");
src2.type = "audio/mpeg";
src2.src  = "audio/rain.m4a";
snd2.appendChild(src2);

snd1.play(); snd2.play();

$('.o-play-btn').on('click', function () {
  $(this).toggleClass('o-play-btn--playing');
});

