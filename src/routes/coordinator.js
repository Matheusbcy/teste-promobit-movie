export function goToDetailsFilms(navigate, id) {
  window.scroll(0, 0);
  navigate(`/filmes/${id}/detalhes`);
  window.location.reload();
}

export function goToHome(navigate) {
  navigate("/");
}
