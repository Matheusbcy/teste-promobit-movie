import styled from "styled-components";

export const ContainerImg = styled.div`
  width: 176px;
  height: 264px;
  overflow-y: hidden;
  @media (max-width: 360px) {
    width: 156px;
    height: 232px;
  }
`;
export const Poster = styled.img`
  width: 100%;
  height: 99%;
`;
export const TitleCards = styled.h1`
  max-width: 176px;
  font-family: "Roboto";
  font-style: normal;
  height: 50px;
  font-weight: 700;
  font-size: 16px;
  overflow-y: hidden;
  line-height: 24px;
  color: #000000;
  @media (max-width: 360px) {
    max-width: 156px
  }
`;
export const Data = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #646464;
`;



