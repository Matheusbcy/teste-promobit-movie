import styled from "styled-components";

export const ContainerGaleria = styled.div`
  display: flex;
  margin-top: 29px;
  width: 1216px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
  @media (max-width: 360px) {
    width: 360px;
    gap: 16px;
  }
`;

export const ContainerGrande = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ContainerPaginação = styled.div`
  margin-top: 78px;
  margin-bottom: 20px;
`;
export const ButtonPaginação = styled.button`
  margin-right: 40px;
  border: none;
  background: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #5c16c5;
`;
