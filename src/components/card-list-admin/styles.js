import styled from 'styled-components';

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 40vh;
  width: 97.5%;
  border: 0.3vh solid lightgray;
  border-radius: 10px;
  margin-top: 1vh;
  margin-bottom: 4vh;

  @media screen and (max-width: 764px) {
    height: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 32vh;
  width: 100%;

  @media screen and (max-width: 764px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: auto;
  height: 5.25vh;
  margin-right: 2rem;
  background: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
  border: none;
  border-radius: 5px;
  text-align: center;
  align-items: center;

  h3 {
    color: #ffffff;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    margin-top: 1.15vh;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 1em #0f4c75;
  }
`;

export const ContainerColumn = styled.div`
  display: flex;
  width: 75%;
  flex-direction: column;
  overflow-y: auto;

  h2 {
    margin-top: 7vh;
    color: #133d59;
    text-align: left;
  }

  h3 {
    color: #133d59;
    text-align: left;
    margin-top: -1.9vh;
    margin-left: 0.5vw;
  }

  h4 {
    margin-bottom: 10vh;
    color: #1b262c;
    text-align: left;
    font-size: 14px;
    font-weight: normal;
    margin-top: -1.5vh;
    margin-left: 1vw;
    text-align: justify;
    padding-right: 1vw;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: lightgray;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 30px;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  height: auto;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 30px;
`;

export const StatusContainerButtons = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
