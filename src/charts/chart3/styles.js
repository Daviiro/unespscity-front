import styled from "styled-components";

export const ContainerColumn = styled.div`
    height: 150vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    margin-top: -10vh;
    margin-left: -10vw;
`;

export const Card = styled.div`
    height: 7.5vh;
    width: 36%;
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
        margin-left: 1vw;
        margin-right: 0.1vw;
    }

    h1 {
        font-size: 1.8em;
        color: #1b262c;
    }

    :hover { box-shadow: 0 0 1em #0f4c75; }
`;

export const GrayLine = styled.div`
	height: 90%;
	width: 0.25vh;
	background-color: lightgray;
	margin-left: 0.75vw;
	margin-right: 1vw;
`;