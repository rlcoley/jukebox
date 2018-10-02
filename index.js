var play = document.getElementById('play')
var pause = document.getElementById('pause')
var next = document.getElementById('next')

var listOfSongs = [new Audio('lordknows.mp3') , new Audio('randomsounds.mp3'), new Audio('patrick.mp3'), new Audio('superduperkyle.mp3')]
var trackNum = 0;

function playFunction() {
  listOfSongs[trackNum].play()
  // trackNum ++;
}

function nextSong() {
  listOfSongs[trackNum].pause()
  listOfSongs[trackNum].currentTime = 0
  // listOfSongs[trackNum]
  trackNum ++;
  // listOfSongs[trackNum].play()
  if (trackNum > listOfSongs.length - 1) {
    trackNum = 0
    listOfSongs[trackNum].play()
  }else {
    listOfSongs[trackNum].play()
  }
}

function pauseSong() {
  listOfSongs[trackNum].pause()
}

play.addEventListener('click', function() {
  playFunction();
});

next.addEventListener('click', function() {
  nextSong();
})

pause.addEventListener('click', function() {
  pauseSong();
})




// gotta add a function name in addEventListener
// window.addEventListener('load',)
