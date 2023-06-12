import styled, { css } from "styled-components";

export const ButtonFilter = styled.button`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #323232;
  ${(props) =>
    props.selected &&
    css`
      background: #d18000;
      color: #fff;
    `} 
    @media (max-width: 360px) {
    margin-top: 12px
  }
`;
export const ContentButton = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1030px;
  flex-wrap: wrap;
  height: 100px;
  gap: 8px;
  @media (max-width: 360px) {
    justify-content: flex-start;
    width: 319px;
    height: auto;
    margin-top: 8px;
  }
`;

export const ImgClose = styled.img`
  margin-left: 9.67px;
  height: 16px;
  width: 16px;
`;
