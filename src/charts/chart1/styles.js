import styled from "styled-components";

export const ContainerRow = styled.div`
    height: 13vh;
    width: 95%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    overflow-y: auto;
`;

export const Card = styled.div`
    height: 12vh;
    width: 6vh;
    border: 0.25vh solid lightgray;
	border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0.25vw;

    img {
        height: 5vh;
        width: auto;
        opacity: 1;
        margin-left: 0.05vw;
        margin-top: 1vh;
        margin-bottom: 0.5vh;
    }

    h5 {
        font-size: 1.2em;
        color: #1b262c;
        margin-top: 0.5vh;
        margin-bottom: -0.5vh;
        margin-left: 0.05vw;
    }

    :hover { border: 0.25vh solid #0f4c75; }
`;

export const GrayLine = styled.div`
	height: 0.2vh;
	width: 93%;
	background-color: lightgray;
`;