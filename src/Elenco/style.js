import styled from "styled-components";

export const ContainerElenco = styled.div`
  position: absolute;
  margin-left: 112px;
  margin-top: 74px;
  width: 1226px;
  @media (max-width: 360px) {
    width: 360px;
    margin-left: 16px;
  }
`;

export const TitleElenco = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;

export const ContainerCardsElenco = styled.div`
  margin-top: 32px;
  display: inline-flex;
  gap: 16px;
  flex-wrap: nowrap;
  @media (max-width: 360px) {
    margin-top: 18px;
  }
`;

export const CardContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #adadad;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
