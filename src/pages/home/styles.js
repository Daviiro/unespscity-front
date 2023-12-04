import styled from 'styled-components';

export const ContainerBase = styled.div`
  display: block;
  justify-content: space-around;
  height: 100vh;
  width: 100% !important;
  overflow-x: hidden;
`;

export const WrapContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 799px) {
    width: 90%;
  }
  @media (min-width: 800px) and (max-width: 1279px) {
    width: 80vw;
  }
  @media (min-width: 1280px) and (max-width: 1510px) {
    width: 86vw;
  }
  @media (min-width: 1511px) and (max-width: 1708px) {
    width: 76vw;
  }
  @media (min-width: 1708px) {
    width: 66vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GrayLine = styled.div`
  height: 0.3vh;
  width: 90%;
  background-color: lightgray;
  margin-top: 12.5vh;
  margin-bottom: 12.5vh;
`;
