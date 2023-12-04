import styled from 'styled-components';

export const Form = styled.form`
  height: 78vh;
  width: 47.5vw;
  border: 0.25vh solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 4vh;
  padding-top: 3vh;

  @media screen and (max-width: 764px) {
    height: 100%;
    width: 90%;
  }
`;

export const Details = styled.div`
  margin-top: 0;
  margin-bottom: 15vh;
  height: 63.5vw;
  width: 63.5vw;
  border: 0.25vh solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
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
