import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;

	img {
		width: 100%;
		height: auto;
		margin: 0;
		opacity: 0.95;
	}
`;

export const ContainerRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 10vh;
	flex-wrap: wrap;
`;

export const ContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 0%;
	align-items: center;
	text-align: center;

	img {
		height: 12vh;
		width: auto;
		opacity: 1;
	}

	h4 {
		font-size: 15px;
		margin-bottom: -3vh;
		color: #1b262c;
	}

	h5 {
		color: #3282b8;
	}
`;

export const Square = styled.div`
	display: flex;
	height: 25vh;
	width: 13vw;
	border: 0.25vh solid lightgray;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	box-shadow: 5px 5px 10px gray;

	:hover {
		cursor: pointer;
		box-shadow: 0 0 4em #0f4c75;
	}
`;

export const Header = styled.div`
	height: 12.5vh;
	width: 95.5vw;
	background-image: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
	margin: 0;
	margin-bottom: 15vh;
	border-top: 1vh solid #133d59;
	border-bottom: 1vh solid #133d59;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding-left: 1.8vw;
	padding-right: 1.8vw;

	img {
		height: 6.75vh;
		width: auto;
		margin-top: 2.75vh;
		opacity: 1;
	}

	img:hover {
		-webkit-filter: drop-shadow(0px 0px 10px #ffffff);
		cursor: pointer;
	}

	h1 {
		color: #ffffff;
		text-shadow: -1.5px 0 black, 0 1.5px black, 1.5px 0 black,
			0 -1.5px black;
		margin-top: 3.5vh;
	}

	h2 {
		color: #ffffff;
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-right: -32vw;
		margin-top: 4.25vh;
	}

	h2:hover {
		text-shadow: 0 0 15px #ffffff;
		cursor: pointer;
	}
`;
