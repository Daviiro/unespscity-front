import styled from "styled-components";

export const ContainerRow = styled.div`
	height: 13vh;
	width: 95%
	display: flex;
	flex-direction: row;
	padding-top: 2vh;
	padding-left: 15vw;
	
	a {
		font-size: 1.17em;
		text-decoration: none;
		color: #1b262c;
		margin-right: 1.5vw;

		:hover {
			cursor: pointer; 
			text-shadow: 0px 0px 10px #0f4c75; 
		}
	}

	span {
		font-size: 1.5em;
		margin-right: 1.5vw;
	}
`;

export const Line = styled.div`
	height: 0.3vh;
	width: 100%;
	background-image: linear-gradient(to right, #ffffff, #133d59, #ffffff);
	margin-top: 33px;
	margin-bottom: 16px;
`;

export const TopButton = styled.button`
	height: 5.75vh;
	width: 11.5vh;
	position: fixed;
	bottom: 1.5vh;
	right: 3.35vh;
	z-index: 1;
	background: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
	border: none;
	border-radius: 5px;
	text-align: center;
	align-items: center;

	a {
		text-decoration: none;
		color: #ffffff;
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-top: 0.7vh;
	}

	:hover {
		cursor: pointer;
		box-shadow: 0 0 1em #0f4c75;
	}
`;