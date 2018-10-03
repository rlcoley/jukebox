var play = document.getElementById('play')
var pause = document.getElementById('pause')
var next = document.getElementById('next')
var songTitle = document.getElementById('songTitle')
var repeat = document.getElementById('repeat')
var previous = document.getElementById('previousSong')

var s1 = { url: new Audio('lordknows.mp3'), title: 'Lord Knows'}
var s2 = { url: new Audio('donotdistrub.mp3'), title: 'Do Not Disturb'}
var s3 = { url: new Audio('patrick.mp3'), title: "Patrick's M.A.A.D City" }
var s4 = { url: new Audio('superduperkyle.mp3'), title: 'SuperDuperKyle'}
var s5 = {url: new Audio('paradiseextended.mp3'),title:'Paradise Extended' }

var listOfSongs = [s1, s2, s3 ,s4, s5]
var trackNum = 0;


function playFunction() {
  // console.log(trackNum.url);
  listOfSongs[trackNum].url.play()
  songTitle.innerHTML = listOfSongs[trackNum].title
  // trackNum ++;
}

function nextSong() {
  listOfSongs[trackNum].url.pause()
  listOfSongs[trackNum].url.currentTime = 0
  // listOfSongs[trackNum]
  trackNum ++;
  // listOfSongs[trackNum].play()
  if (trackNum > listOfSongs.length - 1) {
    trackNum = 0
    listOfSongs[trackNum].url.play()
    songTitle.innerHTML = listOfSongs[trackNum].title
  }else {
    listOfSongs[trackNum].url.play()
    songTitle.innerHTML = listOfSongs[trackNum].title
  }
}

function previousSong() {
  listOfSongs[trackNum].url.pause()
  listOfSongs[trackNum].url.currentTime = 0
  if (trackNum == 0) {
    trackNum = listOfSongs.length - 1
  }else {
    trackNum --;
  }
  listOfSongs[trackNum].url.play()
  songTitle.innerHTML = listOfSongs[trackNum].title

}

function pauseSong() {
  listOfSongs[trackNum].url.pause()
}

function repeatSong() {
  listOfSongs[trackNum].url.currentTime = 0
  listOfSongs[trackNum].url.play()
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

repeat.addEventListener('click', function() {
  repeatSong()
})

previous.addEventListener('click', function () {
  previousSong()
})





// gotta add a function name in addEventListener
// window.addEventListener('load',)
