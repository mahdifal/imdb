import client from "./api";

export const getMovieByName = (name: string) =>
  client.get(`movies?q=${name}&page=1`);
