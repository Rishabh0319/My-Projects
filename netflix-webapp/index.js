// Constants

const API_KEY = '01e742e0389bb8301d79eb8ea77977ef';
const apiEndPoint = 'https://api.themoviedb.org/3';
const imagePath = "https://image.tmdb.org/t/p/original";

const apiPath = {
    fetchAllCategories: `${apiEndPoint}/genre/movie/list?api_key=${API_KEY}`,
    fetchMoviesList: (id) => `${apiEndPoint}/discover/movie?api_key=${API_KEY}&with_genres=${id}`,
    fetchTrending: `${apiEndPoint}/trending/all/day?api_key=${API_KEY}&language=en-US`
}

function init() {
    fetchTrendingMovies();
    fetchAndBuildAllSections();
}

function fetchTrendingMovies() {
    // for creating Trending Now Section
    fetchAndBuildMovieSection(apiPath.fetchTrending, 'Trending Now')
        .then(list => {
            const randomIndex = parseInt(Math.random() * list.length);
            buildBannerSection(list[randomIndex])
        }).catch(error => console.log(error))
}

function buildBannerSection(movie) {
    const bannerCont = document.getElementById('banner-section');
    bannerCont.style.backgroundImage = `url('${imagePath}${movie.backdrop_path}')`;

    const div = document.createElement('div');
    div.innerHTML = `
    <h2 class="banner__title">${movie.title}</h2>  
    <p class="banner__info">Trending in Movies | Released ${movie.release_date}</p>
    <p class="banner__overview">${movie.overview && movie.overview.length > 200 ? movie.overview.slice(0, 200).trim() + '...' : movie.overview}</p>
    <div class="action-button-cont">
        <button class="action-button"><ion-icon name="play"></ion-icon> &nbsp;&nbsp; Play</button>
        <button class="action-button"><ion-icon name="information-circle-outline"></ion-icon> &nbsp;&nbsp; More Info</button>
    </div>
    <div class="banner-fade-bottom"></div> -->
    `
    div.className = 'banner-content container';
    bannerCont.append(div);
}

function fetchAndBuildAllSections() {
    // Fetch Genera
    fetch(apiPath.fetchAllCategories)
        .then(res => res.json())
        .then((res) => {
            const categories = res.genres;
            // to check response is in Array formate or not
            if (Array.isArray(categories) && categories.length) {
                // console.table(categories)
                categories.forEach((category) => {
                    fetchAndBuildMovieSection(
                        apiPath.fetchMoviesList(category.id),
                        category.name
                    );
                })
            }

        })
        .catch(error => console.log(error));
}

function fetchAndBuildMovieSection(fetchUrl, categoryName) {
    //    console.log(fetchUrl, category) 

    return fetch(fetchUrl)
        .then(res => res.json())
        .then((res) => {
            // console.log(res.results)
            const movies = res.results

            if (Array.isArray(movies) && movies.length) {
                buildMoviesSection(movies.slice(0, 8), categoryName)
            }
            return movies;
        })
        .catch(error => console.log(error));
}

function buildMoviesSection(list, categoryName) {
    //    console.log(list, categoryName);

    const moviesCont = document.getElementById('movies-cont');

    // create html of section images frame
    const moviesListHTML = list.map((item) => {
        return `
         <img src="${imagePath}${item.backdrop_path}" alt="${item.title}" class="movie-item">
      `
    }).join('');
    //    console.log(moviesListHTML);

    const moviesSectionHTML = `
            <h2 class="movie-section-heading">${categoryName} <span class="explore-nudge">Explore All</span></h2>
            <div class="movies-row">
              ${moviesListHTML}
            </div>
    `
    // console.log(moviesSectionHTML);

    const divSection = document.createElement('div');
    divSection.className = 'movies-section';
    divSection.innerHTML = moviesSectionHTML;

    // append html into movies container 
    moviesCont.append(divSection);
}

// call init() function on page Load
window.addEventListener('load', ()=>{
    init();

    window.addEventListener('scroll',()=>{
        // header UI update
        const header = document.getElementById('header');
        if(window.scrollY > 5)
           header.classList.add('black-bg');
        else
           header.classList.remove('black-bg');   
    });
});