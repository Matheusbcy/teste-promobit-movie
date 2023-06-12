import React from "react";
import { CardContainer, ContainerCardsElenco, ContainerElenco, TitleElenco } from "./style";
import CardsElenco from "../CardsElenco"

function InfoElenco({ cast }) {
  return (
    <ContainerElenco>
      <TitleElenco>Elenco original</TitleElenco>
      <CardContainer>
        <ContainerCardsElenco>
          {cast.slice(0, 10).map((actor, index) => {
            return (
              <CardsElenco
                key={index}
                character={actor.character}
                name={actor.name}
                profilPath={actor.profile_path}
              />
            );
          })}
        </ContainerCardsElenco>
      </CardContainer>
    </ContainerElenco>
  );
}

export default InfoElenco;
