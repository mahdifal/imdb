export function getSeriesByImdbId(id: string) {
  return fetch(`https://data-imdb1.p.rapidapi.com/series/id/${id}/`, {
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
