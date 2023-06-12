import React from 'react'
import { ContentCardsElenco, ContentImgElenco, ImagemElenco, PActorName, PPerson } from './style'

function CardsElenco({character, name, profilPath}) {
  return (
    <ContentCardsElenco>
        <ContentImgElenco>
            <ImagemElenco src={`https://image.tmdb.org/t/p/original/${profilPath}`} alt="" />
        </ContentImgElenco>
        <PActorName>{name}</PActorName>
        <PPerson>{character}</PPerson>
    </ContentCardsElenco>
  )
}

export default CardsElenco