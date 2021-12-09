import client from "./api";

export const getMovieByName = (name: string, page: string) =>
  client.get(`movies?q=${name}&page=${page}`);
