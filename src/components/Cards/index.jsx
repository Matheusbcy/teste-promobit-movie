import React from "react";
import { ContainerImg, Data, Poster, TitleCards } from "./style";
import { goToDetailsFilms } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

function Cards({ title, data, poster, id }) {
  const navigate = useNavigate();
  
  return (
    <div>
      <ContainerImg>
        <Poster
          onClick={() => goToDetailsFilms(navigate, id)}
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          alt=""
        />
      </ContainerImg>
      <TitleCards>{title}</TitleCards>
      <Data>{data}</Data>
    </div>
  );
}

export default React.memo(Cards);
