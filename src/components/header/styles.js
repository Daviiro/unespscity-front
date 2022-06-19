import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 9vh;
	min-height: 3rem;
	width: 100%;
	background-image: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
	margin: 0;
	margin-bottom: 15vh;
	border-top: 1vh solid #133d59;
	border-bottom: 1vh solid #133d59;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	img {
		width: auto;
		max-height: 2.5rem;
		max-width: 2.5rem;
		opacity: 1;
	}

	img:hover {
		-webkit-filter: drop-shadow(0px 0px 10px #ffffff);
		cursor: pointer;
	}

	.glow-effect {
		:hover {
			-webkit-filter: drop-shadow(0px 0px 10px #ffffff);
			cursor: pointer;
		}
	}

	h1 {
		color: #ffffff;
		text-shadow: -1.5px 0 black, 0 1.5px black, 1.5px 0 black,
			0 -1.5px black;
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

	span:hover {
		text-shadow: 0px 0px 10px #ffffff;
	}
`;

export const LoginButton = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	span {
		color: #ffffff;
		font-size: 1.3em;
		font-weight: 700;
		text-decoration: none;
	}
`;

export const ContainerActions = styled.div`
	width: 7rem;
	padding-right: 1rem;
	padding-left: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const ContainerCenter = styled.div`
	width: 10rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const ContainerLogo = styled.div`
	width: 12rem;
	padding-left: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	font-size: 14px;
	.logo {
		padding-right: 1rem;
	}
`;
