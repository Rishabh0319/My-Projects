// Constants

const API_KEY = '01e742e0389bb8301d79eb8ea77977ef';
const apiEndPoint = 'https://api.themoviedb.org/3';

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
            if(Array.isArray(categories) && categories.length)
            {
                // console.table(categories)
                categories.forEach((category)=>{
                    fetchAndBuildMovieSection(
                        apiPath.fetchMoviesList(category.id),
                        category
                        );
                })
            }
            
        })
        .catch(error => console.log(error));
}

function fetchAndBuildMovieSection(fetchUrl, category)
{
   console.log(fetchUrl, category)
}

// call init() function on page Load
window.addEventListener('load', init);