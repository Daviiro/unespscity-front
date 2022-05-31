import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const Content = styled.div`
	display: flex;
	width: 100%;
	margin-top: -6.5vh;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const GrayLine = styled.div`
	height: 0.3vh;
	width: 90%;
	background-color: lightgray;
	margin-top: 12.5vh;
	margin-bottom: 12.5vh;
	margin-left: 5%;
`;

export const ContainerColumn = styled.div`
	height: 150vh;
	width: 70vw;
	display: flex;
	flex-direction: column;
	
	h1 {
		margin-top: 0vh; 
		margin-left: 2.5vw; 
	}
`;