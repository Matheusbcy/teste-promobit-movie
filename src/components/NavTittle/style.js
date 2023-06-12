import styled from "styled-components";

export const ContainerHeaderTitle = styled.div`
  width: 100%;
  height: 449px;
  background-color: #2d0c5e;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 360px) {
    height: 685px;
    align-items: baseline;
    justify-content: flex-start;
  }
`;

export const ContainerTitle = styled.div`
  width: 781px;
  @media (max-width: 360px) {
    width: 281px;
    margin-top: 40px;
    margin-left: 16px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  font-family: "Roboto";
  line-height: 58px;
  letter-spacing: -0.005em;
  @media (max-width: 360px) {
    font-size: 24px;
    text-align: start;
    line-height: 28px;
  }
`;

export const Filter = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: white;
  width: 89px;
  @media (max-width: 360px) {
    width: 92px;
  }
`;

export const ContainerFilter = styled.div`
margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 360px) {
    align-items: baseline;
    margin-left: 16px;
  }
`;
