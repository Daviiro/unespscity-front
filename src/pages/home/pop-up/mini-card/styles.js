import styled from 'styled-components';

export const MiniCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 18vh;
  width: 18vh;
  border: 0.25vh solid lightgray;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  min-width: 97px;
  min-height: 120px;
  img {
    height: 9vh;
    width: auto;
    opacity: 1;
  }

  h4 {
    font-size: 14px;
    margin-bottom: 10vh;
    color: #1b262c;
  }

  :hover {
    cursor: pointer;
    box-shadow: 0 0 2em #0f4c75;
  }

  @media screen and (max-width: 764px) {
    width: 90%;
    min-height: 100px;
    max-height: 100px;
    flex-direction: row;
    margin: 5px;
    justify-content: center;
    overflow-y: scroll;
    padding: 0 5px;

    img {
      height: 45px;
      margin: 0 10px;
    }

    h4 {
      margin: 0;
      width: 70%;
      text-align: center;
    }
  }
`;
