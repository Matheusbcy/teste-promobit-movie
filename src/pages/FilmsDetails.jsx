import React from "react";
import { useContext } from "react";
import { GlobalContexts } from "../Contexts/GlobalContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Cabecalho from "../components/Header";
import NavDet from "../components/NavDetalhes";
import InfoElenco from "../Elenco";
import Trailer from "../components/Trailer";
import Recomendados from "../components/Recomendados";

function FilmsDetails() {
  const contexts = useContext(GlobalContexts);
  const { id } = useParams();

  const {
    getFilmById,
    filmeById,
    releaseDates,
    getReleaseDates,
    getCreditsDates,
    credits,
    video,
    getVideo,
  } = contexts;

  useEffect(() => {
    getFilmById(id);
    getReleaseDates(id);
    getCreditsDates(id);
    getVideo(id);
  }, []);

  let classfication;
  let release;
  
  if (releaseDates !== undefined) {
    if (releaseDates.results[0].release_dates[0]) {
      classfication = releaseDates.results[0].release_dates[0].certification;
    } else {
      classfication = releaseDates.results[10].release_dates[0].certification;
    }
    if (releaseDates.results[0].release_dates[0].release_date) {
      release = releaseDates.results[0].release_dates[0].release_date;
    } else {
      release = releaseDates.results[10].release_dates[0].release_date;
    }
  }

  let crewsDirection;
  if (credits !== undefined) {
    crewsDirection = credits.crew.filter(
      (crew) => crew.department === "Directing"
    );
  }

  return (
    <div>
      <Cabecalho />
      {credits !== undefined && (
        <NavDet
          title={filmeById.title}
          sinopse={filmeById.overview}
          percentagem={filmeById.vote_average}
          genre={filmeById.genres}
          poster={filmeById.poster_path}
          release={release}
          runtime={filmeById.runtime}
          classfication={classfication}
          crewsDirection={crewsDirection}
        />
      )}
      {credits !== undefined && <InfoElenco cast={credits.cast} />}
      {video.results !== undefined && <Trailer video={video} />}
      {credits !== undefined && <Recomendados genre={filmeById.genres} />}
    </div>
  );
}

export default FilmsDetails;
