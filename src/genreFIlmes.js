export function genreById(id) {
  const genres = [];
  if (id.includes(28)) {
    genres.push("Ação");
  }
  if (id.includes(12)) {
    genres.push("Aventura");
  }
  if (id.includes(16)) {
    genres.push("Animação");
  }
  if (id.includes(35)) {
    genres.push("Comédia");
  }
  if (id.includes(80)) {
    genres.push("Crime");
  }
  if (id.includes(99)) {
    genres.push("Documentação");
  }
  if (id.includes(18)) {
    genres.push("Drama");
  }
  if (id.includes(10751)) {
    genres.push("Familia");
  }
  if (id.includes(14)) {
    genres.push("Fantasia");
  }
  if (id.includes(36)) {
    genres.push("História");
  }
  if (id.includes(27)) {
    genres.push("Terror");
  }
  if (id.includes(10402)) {
    genres.push("Música");
  }
  if (id.includes(9648)) {
    genres.push("Mistério");
  }
  if (id.includes(10749)) {
    genres.push("Romance");
  }
  if (id.includes(878)) {
    genres.push("Ficção cientifica");
  }
  if (id.includes(10770)) {
    genres.push("Cinema TV");
  }
  if (id.includes(53)) {
    genres.push("Thriller");
  }
  if (id.includes(10752)) {
    genres.push("Guerra");
  }
  if (id.includes(37)) {
    genres.push("Faroeste");
  }
  return genres;
}
