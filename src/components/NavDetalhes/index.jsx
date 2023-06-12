import React from "react";
import {
  ContainerDirect,
  ContainerInfoDet,
  ContainerNavDet,
  ContentInfos,
  DFlex,
  ImagemPoster,
  InfosGenre,
  PAvaliable,
  PName,
  PProfission,
  PSinopse,
  StyledCircularProgressbar,
  TitleFilms,
  TitleSinopse,
} from "./style";
import { buildStyles } from "react-circular-progressbar";

function NavDet({
  title,
  sinopse,
  percentagem,
  poster,
  genre,
  release,
  runtime,
  classfication,
  crewsDirection,
}) {
  const percente = percentagem * 10;
  const percentage = percente.toFixed(2);

  let listGenre;
  if (genre) {
    listGenre = genre.map((gen, index) => {
      return <span key={index}> {gen.name}, </span>;
    });
  }

  function formatarHorasMinutos(valor) {
    const horas = Math.floor(valor / 60);
    const minutos = valor % 60;

    const horasStr = horas < 10 ? "0" + horas : horas.toString();
    const minutosStr = minutos < 10 ? "0" + minutos : minutos.toString();

    return horasStr + "h " + minutosStr + "m";
  }

  const runtimeh = formatarHorasMinutos(runtime);

  let classficationComponent;

  if (classfication) {
    classficationComponent = `${classfication} years`;
  } else {
    classficationComponent = "unavailable";
  }

  let partes;
  let ano;
  if (release) {
    partes = release.split("-");
    ano = partes[0];
  } else {
    partes = "";
    ano = "";
  }

  return (
    <ContainerNavDet>
      <ContainerInfoDet>
        <div>
          <ImagemPoster
            src={`https://image.tmdb.org/t/p/original/${poster}`}
            alt=""
          />
        </div>
        <ContentInfos>
          <TitleFilms>
            {title} ({ano})
          </TitleFilms>
          <InfosGenre>
            <span>{classficationComponent}</span> <span>• {release} (BR)</span>
            <span>• {listGenre}</span>
            <span>• {runtimeh} </span>
          </InfosGenre>

          <DFlex>
            <StyledCircularProgressbar
              styles={buildStyles({
                strokeLinecap: "butt",
                pathTransitionDuration: 0.5,
                pathColor: `#14FF00`,
                textColor: "#14FF00",
              })}
              value={percentage}
              text={`${percentage}%`}
            />

            <PAvaliable>Avaliação dos usuários</PAvaliable>
          </DFlex>
          <div>
            <TitleSinopse>Sinopse</TitleSinopse>
            <PSinopse>{sinopse}</PSinopse>
          </div>
          <ContainerDirect>
            {crewsDirection.slice(0, 4).map((profissional, index) => {
              return (
                <div key={index}>
                  <div>
                    <PName>{profissional.name}</PName>
                    <PProfission>{profissional.department}</PProfission>
                  </div>
                </div>
              );
            })}
          </ContainerDirect>
        </ContentInfos>
      </ContainerInfoDet>
    </ContainerNavDet>
  );
}

export default NavDet;
