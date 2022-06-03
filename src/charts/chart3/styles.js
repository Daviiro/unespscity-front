import styled from "styled-components";

export const ContainerColumn = styled.div`
    height: 150vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
`;

export const Card = styled.div`
    height: 7.5vh;
    width: 97.5%;
    border: 0.25vh solid lightgray;
	border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.25vh;

    img {
        height: 5.5vh;
        width: auto;
        opacity: 1;
        margin-left: 1.4vw;
        margin-right: 0.1vw;
    }

    h3 {
        color: #1b262c;
    }

    :hover { box-shadow: 0 0 1em #0f4c75; }
`;

export const ContainerColumn2 = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 0.75vw;

    h3 { 
        margin-top: 3.5vh;
        margin-bottom: -3.25vh; 
    }

    h4 { 
        margin-top: 3.5vh;
        margin-bottom: -3.25vh; 
    }

    h5 { 
        color: #133d59;
        font-weight: normal; 
    }
`;