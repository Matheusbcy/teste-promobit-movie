import React from "react";
import { ContainerCardContent, ContainerRecomendados, TitleRec } from "./syle";
import Cards from "../Cards";
import { useContext } from "react";
import { GlobalContexts } from "../../Contexts/GlobalContext";

function Recomendados({ genre }) {
  const context = useContext(GlobalContexts);

  const { allFilmes } = context;

  let genreRecomended;
  if (genre !== undefined) {
    if (genre[0].id) {
      genreRecomended = genre[0].id;
    } else {
      genreRecomended = "";
    }
  }

  const allFilmesRecomed = allFilmes.filter(
    (f) => f.genre_ids[0] === genreRecomended
  );

  return (
    <ContainerRecomendados>
      <TitleRec>Recomendações</TitleRec>
      <ContainerCardContent>
        {allFilmesRecomed.slice(0, 6).map((movie, index) => {
          return (
            <Cards
              key={index}
              id={movie.id}
              title={movie.title}
              data={movie.release_date}
              poster={movie.poster_path}
            />
          );
        })}
      </ContainerCardContent>
    </ContainerRecomendados>
  );
}

export default Recomendados;
