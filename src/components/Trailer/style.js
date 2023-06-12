import styled from "styled-components";

export const ContainerTrailer = styled.div`
  position: absolute;
  top: 1143px;
  margin-top: 39px;
  margin-left: 110px;
  @media (max-width: 360px) {
    top: 1663px;
    margin-left: 16px;
    margin-top: 42px;
  }
`;

export const ContentVideo = styled.div`
  margin-top: 24px;
`;

export const IframeMovie = styled.iframe`
@media (max-width: 360px) {
    width: 324px;
    height: 182px;
  }
`
export const TitleTrailer = styled.h1`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 32px;
letter-spacing: -0.005em;
color: #131313;
`