import React from "react";
import { ContainerHeader, ContainerLogo, IMG } from "./style";
import logo from "../../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/coordinator";

function Cabecalho() {
  const navigate = useNavigate()
  return (
    <ContainerHeader>
      <ContainerLogo>
        <IMG onClick={() => {goToHome(navigate)}} src={logo} alt="" />
      </ContainerLogo>
    </ContainerHeader>
  );
}

export default Cabecalho;
