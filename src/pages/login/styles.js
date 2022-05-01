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
	padding: 1rem;
`;

export const ContainerRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 5.25vh;

	h4 {
		font-size: 14px;
		margin-bottom: -3vh;
		color: #1b262c;
	}

	h4:hover {
		color: #3282b8;
	}
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

	h2 {
		color: #1b262c;
	}
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
	color: #1b262c;

	:focus {
		outline: 0.25vh solid #3282b8;
		color: #3282b8;
	}
`;

export const LoginButton = styled.div`
	height: 5.25vh;
	width: 80%;
	background-image: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
	border: none;
	border-radius: 5px;
	margin-top: 2.4vh;
	margin-bottom: 3vh;
	text-align: center;
	align-items: center;

	h3 {
		color: #ffffff;
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-top: 1.15vh;
	}

	:hover {
		cursor: pointer;
		box-shadow: 0 0 1em #0f4c75;
	}
`;

export const LoginSignupSpan = styled.span`
	font-size: 1.5rem;
	margin-bottom: -3vh;
	text-align: center;
	color: ${(props) => props.toggle};
`;

export const TopContainer = styled.div`
	height: 20%;
	padding: 0 2.5rem;
	display: flex;
	flex-direcion: row;
	justify-content: space-between;
	align-items: center;
`;
export const MidContainer = styled.div`
	height: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	h2 {
		color: #1b262c;
	}

	h4 {
		font-size: 14px;
		color: #1b262c;
	}

	h4:hover {
		color: #3282b8;
	}
`;
export const BottomContainer = styled.div`
	height: 20%;
	h4 {
		font-size: 14px;
		color: #1b262c;
	}

	h4:hover {
		color: #3282b8;
	}
`;
