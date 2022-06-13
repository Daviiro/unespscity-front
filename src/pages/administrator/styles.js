import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const Content = styled.div`
	display: flex;
	width: 92.5%;
	margin-top: -6.5vh;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-left: 7.5vw;
`;

export const ProblemsButtom = styled.div`
	height: 7.5vh;
	width: 26vw;
	background: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
	border: none;
	border-radius: 10px;
	margin-top: 2.5vh;
	margin-bottom: 5vh;
	margin-left: 18.5vw;
	text-align: center;

	h3 {
		color: #ffffff;
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-top: 2.35vh;
	}

	:hover {
		cursor: pointer;
		box-shadow: 0 0 1em #0f4c75;
	}
`;

export const GrayLine = styled.div`
	height: 0.3vh;
	width: 93%;
	background-color: lightgray;
	margin-top: -18.2vh;
	margin-bottom: 12.5vh;
	margin-left: -2vw;
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

export const ContainerRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-left: -5vw;
	
	h1 {
		margin-top: 0vh; 
		margin-left: 2.5vw; 
	}
`;