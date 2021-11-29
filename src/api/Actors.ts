export function getActorIdByName(name: string) {
  return fetch(`https://moviesapi.ir/api/v1/movies?q=${name}&page=1`)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}
