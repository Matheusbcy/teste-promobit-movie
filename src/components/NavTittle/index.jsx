import React from "react";
import {
  ContainerFilter,
  ContainerHeaderTitle,
  ContainerTitle,
  Filter,
  Title,
} from "./style";
import Filtros from "../Filtros";

function TitleNav() {
  return (
    <ContainerHeaderTitle>
      <ContainerTitle>
        <Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já
        </Title>
      </ContainerTitle>
      <ContainerFilter>
        <Filter>FILTRE POR:</Filter>
        <Filtros />
      </ContainerFilter>
    </ContainerHeaderTitle>
  );
}

export default TitleNav;
