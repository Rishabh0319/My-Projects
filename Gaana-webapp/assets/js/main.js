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
window.addEventListener('load', bootUpApp);

function bootUpApp() {
    fetchAndRenderAllSections();
}

function fetchAndRenderAllSections() {
    // Fetch all Section Data
    fetch('./assets/js/gaanaYTDB.json')
        .then(res => res.json())
        .then(res => {
            // console.log(data);
            const { cardbox } = res;
            if (Array.isArray(cardbox) && cardbox.length) {

                cardbox.forEach((section) => {
                    const { songsbox, songscards } = section;
                    // console.log(songscards);
                    renderSection(songsbox, songscards)
                })
            }
        })
        .catch(error => console.error(error));



    //    renderSection(data);
}

function renderSection(title, songsList) {
    const songsSections = makeSectionDOM(title, songsList);

    musicLibsContainer.appendChild(songsSections);
    // console.log(songsSections);
}

function makeSectionDOM(title, songsList) {
    // console.log(title, songsList);

    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'songs-sections';  // add className to div Elem


    sectionDiv.innerHTML = `
        <h1 class="section-heading">${title}</h1>
        <div class="songs-cont">
        ${songsList.map((songObj) => {
            return buildSongCardDOM(songObj)
         // console.log(songObj);
        }).join('')
        }
        </div>
    `
    // console.log(sectionDiv);
    return sectionDiv;
}


function buildSongCardDOM(songObj) {
    return `<div class="song-card" onclick="playSong(this)" data-songObj='${JSON.stringify(songObj)}'>
    <div class="img-cont">
       <img src="./${songObj.image_source}" alt="${songObj.song_name}">
       <div class="overlay"></div>
    </div>
   <p class="song-name">${songObj.song_name}</p>
   </div>
   `
}




// MUSICPLAYER FUNCTIONS

function playSong(songCardEl)
{
   console.log(songCardEl.dataset.songobj);
}

function setCurrentSong()
{

}