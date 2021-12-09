import client from "./api";

export const getMovies = (page: string) => client.get(`movies?page=${page}`);

export const getMovieById = (id: string) => client.get(`movies/${id}/`);
