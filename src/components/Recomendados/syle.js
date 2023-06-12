import styled from "styled-components";

export const ContainerRecomendados = styled.div`
  margin-top: 1173px;
  margin-left: 110px;
  @media (max-width: 360px) {
    margin-left: 16px;
    margin-top: 853px;
  }
`;
export const TitleRec = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
`;
export const ContainerCardContent = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 24px;
  @media (max-width: 1444px) {
    gap: 16px;
    flex-wrap: wrap;
  }
`;
