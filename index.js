// controls
var play = document.getElementById('play')
var pause = document.getElementById('pause')
var next = document.getElementById('next')
var repeat = document.getElementById('repeat')
var previous = document.getElementById('previousSong')

// Title of song
var songTitle = document.getElementById('songTitle')

// Album cover
 var albumCover = document.getElementById('albumCover')



var s1 = { url: new Audio('lordknows.mp3'), title: 'Lord Knows', cover: "'lordknowsalbumcover.png'"}
var s2 = { url: new Audio('donotdistrub.mp3'), title: 'Do Not Disturb', cover: "'drakealbumcover.jpg'"}
var s3 = { url: new Audio('patrick.mp3'), title: "Patrick's M.A.A.D City",cover: "'patrickalbumcover.jpg'" }
var s4 = { url: new Audio('superduperkyle.mp3'), title: 'SuperDuperKyle', cover: "'kylealbumcover.jpg'"}
var s5 = {url: new Audio('paradiseextended.mp3'),title:'Paradise Extended', cover: "'bigseanalbumcover.jpeg'" }
var s6 = {url: new Audio('bigbank.mp3'),title:'Big Bank',cover: "'bigbankalbumcover.jpg'" }
var s7 = {url: new Audio('losecontrol.mp3'),title:'Lose Control', cover: "'losecontrolalbum.jpg'" }
var listOfSongs = [s1, s2, s3 ,s4, s5, s6, s7]
var trackNum = 0;


function playFunction() {
  // console.log(trackNum.url);
  listOfSongs[trackNum].url.play()
  songTitle.innerHTML = listOfSongs[trackNum].title
  albumCover.style.backgroundImage = "url("+listOfSongs[trackNum].cover +")";
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
    albumCover.style.backgroundImage = "url("+listOfSongs[trackNum].cover +")";
  }else {
    listOfSongs[trackNum].url.play()
    songTitle.innerHTML = listOfSongs[trackNum].title
    albumCover.style.backgroundImage = "url("+listOfSongs[trackNum].cover +")";
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
  albumCover.style.backgroundImage = "url("+listOfSongs[trackNum].cover +")";

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
