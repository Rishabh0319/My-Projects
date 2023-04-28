// 1: generate all sections using Data and JS
// 2: add Event Listener to play audio
// 3: Audio Navbar
// 4: Scroll State
// 5: Queue

// CONSTANTS
const musicLibsContainer = document.getElementById('music-libs');
const audioPlayer = document.getElementById('audio_player');

let currentSongObj = {};
let defaultImage = './images/defaultImage.gif';

// CORE APP LOGIC
window.addEventListener('load', fetchAllSlidersData);

function fetchAllSlidersData() {
  fetch('./assets/js/sliders.json')
    .then(res => res.json())
    .then((data) => {
      // console.log(data.sliders);
      data.sliders.forEach((slidersData) => {
        const { sliderName, songsCards } = slidersData;
        // console.log(sliderName, songsCards);
        renderAllSliders(sliderName, songsCards)
      })
    })
    .catch(error => console.log(error));
}


function renderAllSliders(sliderTitle, songsList) {

  const songsSliders = createSliderDOM(sliderTitle, songsList);
  // console.log(songsSliders);

  musicLibsContainer.appendChild(songsSliders);
}


function createSliderDOM(sliderTitle, songsList) {
  console.log(sliderTitle, songsList);
  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'songs-sections';

  sectionDiv.innerHTML = `
            <h1 class="section-heading">${sliderTitle}</h1>
            <div class="songs-cont">
              ${songsList.map((songsCardData) => {
    return createSongCardDOM(songsCardData)
  }).join('')}
            </div>
  `
  return sectionDiv;
}


function createSongCardDOM(songsCardDataRec) {
  // console.log(songsCardDataRec);
  return `
              <div class="song-card">
                    <div class="img-cont">
                        <img src="${songsCardDataRec.image_source}" alt="">
                        <div class="overlay"></div>
                    </div>
                    <p class="song-name">${songsCardDataRec.song_name}</p>
              </div>
  `;
}




// MUSICPLAYER FUNCTIONS

function playSong(songCardEl)
{
   console.log(songCardEl.dataset.songobj);
}

function setCurrentSong()
{

}