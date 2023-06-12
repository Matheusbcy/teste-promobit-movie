import React from "react";
import Cabecalho from "../components/Header";
import TitleNav from "../components/NavTittle";
import Galeria from "../components/Galeria";
import { ContainerGaleriaHome } from "./homeStyle";

function Home() {
  return (
    <div>
      <Cabecalho />
      <TitleNav />
      <ContainerGaleriaHome>
        <Galeria />
      </ContainerGaleriaHome>
    </div>
  );
}

export default Home;
