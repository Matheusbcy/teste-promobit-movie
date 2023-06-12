import React from "react";
import {
  ButtonPaginação,
  ContainerGaleria,
  ContainerGrande,
  ContainerPaginação,
} from "./style";
import { useContext } from "react";
import { GlobalContexts } from "../../Contexts/GlobalContext";
import Cards from "../Cards";
import { useState } from "react";
import { genreById } from "../../genreFIlmes";

function Galeria() {
  const context = useContext(GlobalContexts);

  const { allFilmes, selectedFilters, filterClicked } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems = filterClicked
    ? allFilmes.filter((film) => {
        const filmGenres = genreById(film.genre_ids);
        return (
          selectedFilters.length === 0 ||
          filmGenres.some((genre) => selectedFilters.includes(genre))
        );
      })
    : allFilmes;

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <ContainerGrande>
      <ContainerGaleria>
        {currentItems.map((film, index) => {
          return (
            <Cards
              id={film.id}
              key={index}
              title={film.title}
              data={film.release_date}
              poster={film.poster_path}
            />
          );
        })}
      </ContainerGaleria>
      <ContainerPaginação className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <ButtonPaginação
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </ButtonPaginação>
        ))}
        <ButtonPaginação onClick={() => handlePageChange(totalPages)}>
          Último
        </ButtonPaginação>
      </ContainerPaginação>
    </ContainerGrande>
  );
}

export default Galeria;
