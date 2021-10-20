export function getUpcomingMovies() {
  return fetch(
    "https://data-imdb1.p.rapidapi.com/movie/order/upcoming/?page_size=50",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "f1f6b5d69bmshc8a8b09e726a3dcp12decejsnc355f9c6d77d",
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export function getMovieById(id: string) {
  return fetch(`https://data-imdb1.p.rapidapi.com/movie/id/${id}/`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      "x-rapidapi-key": "f1f6b5d69bmshc8a8b09e726a3dcp12decejsnc355f9c6d77d",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export function getCastByMovieId(id: string) {
  return fetch(`https://data-imdb1.p.rapidapi.com/movie/id/${id}/cast/`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
      "x-rapidapi-key": "f1f6b5d69bmshc8a8b09e726a3dcp12decejsnc355f9c6d77d",
    },
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export function getSeriesByGenre(genre: string) {
  return fetch(
    `https://data-imdb1.p.rapidapi.com/series/byGen/${genre}/?page_size=50`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
        "x-rapidapi-key": "f1f6b5d69bmshc8a8b09e726a3dcp12decejsnc355f9c6d77d",
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}
