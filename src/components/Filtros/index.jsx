import React, { useContext } from "react";
import listFilter from "../../filtros.json";
import { ButtonFilter, ContentButton, ImgClose } from "./style";
import { GlobalContexts } from "../../Contexts/GlobalContext";
import close from "../../assets/Shape.png";

function Filtros() {
  const context = useContext(GlobalContexts);

  const { handleFilterSelect, selectedFilters, setFilterClicked } = context;

  const handleFilterInputClick = () => {
    setFilterClicked(false);
  };

  return (
    <ContentButton>
      {listFilter.map((filte, index) => {
        const isSelected = selectedFilters.includes(filte.filtro);
        return (
          <ButtonFilter
            onClick={() => {
              handleFilterSelect(filte.filtro);
            }}
            selected={isSelected}
            key={index}
          >
            {filte.filtro}
            {isSelected && (
              <ImgClose src={close} alt="Fechar" onClick={handleFilterInputClick} />
            )}
          </ButtonFilter>
        );
      })}
    </ContentButton>
  );
}

export default Filtros;
