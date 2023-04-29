// Constants

const API_KEY = '01e742e0389bb8301d79eb8ea77977ef';
const apiEndPoint = 'https://api.themoviedb.org/3';
const imagePath = "https://image.tmdb.org/t/p/original";

const apiPath = {
    fetchAllCategories: `${apiEndPoint}/genre/movie/list?api_key=${API_KEY}`,
    fetchMoviesList: (id) => `${apiEndPoint}/discover/movie?api_key=${API_KEY}&with_genres=${id}`
}

function init() {
    fetchAndBuildAllSections();
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
                categories.slice(0, 5).forEach((category) => {
                    fetchAndBuildMovieSection(
                        apiPath.fetchMoviesList(category.id),
                        category
                    );
                })
            }

        })
        .catch(error => console.log(error));
}

function fetchAndBuildMovieSection(fetchUrl, category) {
    //    console.log(fetchUrl, category) 

    fetch(fetchUrl)
        .then(res => res.json())
        .then((res) => {
            // console.log(res.results)
            const movies = res.results

            if (Array.isArray(movies) && movies.length) {
                buildMoviesSection(movies.slice(0, 8), category.name)
            }
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
    console.log(moviesSectionHTML);

    const divSection = document.createElement('div');
    divSection.className = 'movies-section';
    divSection.innerHTML = moviesSectionHTML;

    // append html into movies container 
    moviesCont.append(divSection);
}

// call init() function on page Load
window.addEventListener('load', init);