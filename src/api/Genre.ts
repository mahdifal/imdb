import client from "./api";

export const getMoiveByGenre = () => client.get("genres");

export const getGenreMovieById = (genreId: string) =>
  client.get(`genres/${genreId}/movies?page=1`);
