import styled from 'styled-components';

export const AddContainer = styled.div`
  min-width: 500px;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 764px) {
    width: 90%;
    min-width: unset;
    margin: 0 0;
    padding: 0;
  }
`;
