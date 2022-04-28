import styled from "styled-components";

export const ContainerBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Square = styled.div`
    display: block;
    height: 62.5vh;
    width: 31.25vw;
    border: 0.25vh solid lightgray;
    border-radius: 5px;
    box-shadow: 5px 5px 10px gray;
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 5.25vh;

    h4 {
        font-size: 14px;
        margin-bottom: -3vh;
        color: #1B262C;
    }

    h4:hover { color: #3282B8; }
`;

export const GrayLine = styled.div`
    height: 0.25vh;
    width: 100%;
    background-color: lightgray;
    margin-bottom: 2.75vh;
`;

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 { color: #1B262C; }

    h4 {
        font-size: 14px;
        color: #1B262C;
    }

    h4:hover { color: #3282B8; }
`;

export const InputField = styled.input`
    height: 5.25vh;
    width: 80%;
    border: none;
    outline: 0.25vh solid lightgray;
    border-radius: 5px;
    margin-top: 2.2vh;
    margin-bottom: 2.2vh;
    text-align: center;
    font-size: 16px;
    color: #1B262C;

    :focus { 
        outline: 0.25vh solid #3282B8;
        color: #3282B8; 
    }
`;

export const LoginButton = styled.div`
    height: 5.25vh;
    width: 30%;
    background-image: linear-gradient(to right, #0F4C75, #3282B8, #0F4C75);
    border: none;
    border-radius: 5px;
    margin-top: 2.4vh;
    margin-bottom: 3vh;
    text-align: center;
    align-items: center;
    
    h3 {
        color: #FFFFFF;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        margin-top: 1.15vh;
    }

    :hover {
        cursor: pointer;
        box-shadow: 0 0 1em #0F4C75;
    }
`;