const KEY = 'a33157916ebf161dcd0a919e59e96ce9';
const BASE_URL = 'https://api.themoviedb.org/3/';

function getTrending(mediaType = 'movie', mediaWindow = 'week') {
  return fetch(
    `${BASE_URL}trending/${mediaType}/${mediaWindow}?api_key=${KEY}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Serch query error'));
  });
}

function serchMovies(query) {
  return fetch(`${BASE_URL}search/movie/?api_key=${KEY}&query=${query}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error('Query error'));
    },
  );
}

function getMovieDetails(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Movie details error'));
  });
}

function getMovieCredits(id) {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error('Movie credits error'));
    },
  );
}

function getMovieReviews(id) {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error('Movie reviews error'));
    },
  );
}

const theMovieAPI = {
  getTrending,
  serchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default theMovieAPI;
