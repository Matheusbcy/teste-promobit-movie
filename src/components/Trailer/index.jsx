import React from "react";
import { ContainerTrailer, ContentVideo, IframeMovie, TitleTrailer } from "./style";

function Trailer({ video }) {
  let trailer = video.results.filter((trailer) =>
    trailer.name.includes("Official Trailer")
  );

  if (trailer.length === 0) {
    trailer = video.results;
  }
  
  const embedUrl = `https://www.youtube.com/embed/${trailer[0].key}`;

  return (
    <ContainerTrailer>
      <TitleTrailer>Trailer</TitleTrailer>
      <ContentVideo>
        <IframeMovie
          title="Trailer do Filme"
          width="907"
          height="510"
          src={embedUrl}
          allowFullScreen
        ></IframeMovie>
      </ContentVideo>
    </ContainerTrailer>
  );
}

export default Trailer;
