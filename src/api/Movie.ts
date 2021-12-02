import client from "./api";

export const getMovies = () => client.get("movies?page=1");

export function getUpcomingMovies() {
  return fetch("https://moviesapi.ir/api/v1/movies?page=1")
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export const getMovieById = (id: string) => client.get(`movies/${id}/`);
