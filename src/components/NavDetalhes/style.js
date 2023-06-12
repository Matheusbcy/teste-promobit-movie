import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const StyledCircularProgressbar = styled(CircularProgressbar)`
  position: relative;
  max-width: 60px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 38px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  .CircularProgressbar-trail {
    stroke: rgba(255, 255, 255, 0.1);
  }
`;

export const ContainerNavDet = styled.div`
  height: 600px;
  width: 100%;
  background-color: #2d0c5e;
  @media (max-width: 360px) {
    height: 1100px;
  }
`;

export const ContainerInfoDet = styled.div`
  display: flex;
  margin-top: 72px;
  margin-left: 112px;
  position: absolute;
  @media (max-width: 360px) {
    margin-top: 34px;
    margin-left: 0px;
    flex-direction: column;
  }
`;
export const ImagemPoster = styled.img`
  width: 383px;
  height: 574px;
  position: relative;
  @media (max-width: 360px) {
    width: 186px;
    height: 279px;
    margin-left: 86px;
  }
`;

export const ContentInfos = styled.div`
  margin-left: 33px;
  display: flex;
  flex-direction: column;
  color: white;
  @media (max-width: 360px) {
    margin-left: 16px;
  }
`;
export const TitleFilms = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.005em;
  @media (max-width: 360px) {
    margin-top: 42px;
  }
`;
export const InfosGenre = styled.p`
  margin-top: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
  }
`;
export const PAvaliable = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  width: 102px;
`;

export const DFlex = styled.div`
  display: flex;
  gap: 27.3px;
  margin-top: 27.7px;
  @media (max-width: 360px) {
    margin-top: 31px;
  }
`;

export const PSinopse = styled.p`
  margin-top: 8px;
  width: 696px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.005em;
  @media (max-width: 360px) {
    width: 330px
  }
`;

export const TitleSinopse = styled.h1`
  margin-top: 43px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  @media (max-width: 360px) {
    margin-top: 31.6px;
  }
  `;

export const ContainerDirect = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 33px;
  @media (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 33px;
    width: 360px;
  }
`;
export const DirectDiv1 = styled.div`
  margin-top: 23px;
`;
export const PName = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const PProfission = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
