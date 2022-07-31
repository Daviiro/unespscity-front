import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
	text-align: center;
`;

export const SubHeader = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: -10.5vh;
	margin-bottom: 10vh;
	flex-wrap: wrap;
	padding-left: 2.5vw;
	text-align: left;

	h1 {
		margin-top: 4vh;
		margin-left: 2.5vw;
	}

	h4 {
		margin-top: 0vh;
	}
`;

export const ContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-bottom: 10vh;
	flex-wrap: wrap;
`;

export const ContainerRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-bottom: 10vh;
	flex-wrap: wrap;
`;

export const Square = styled.div`
	height: 100%;
	width: auto;
	margin-bottom: 10vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const FormContainer = styled.div`
	height: 90%;
	width: 100%;

	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 4vh;

	#input {
		height: 5.25vh;
		width: 10vw;
		border: none;
		outline: 0.25vh solid lightgray;
		border-radius: 5px;
		margin-top: 5vh;
		margin-bottom: 2.2vh;
		text-align: center;
		font-size: 16px;
		color: #1b262c;
	}

	#input:focus {
		outline: 0.25vh solid #3282b8;
		color: #3282b8;
	}

	h4 {
		font-weight: normal;
		margin-bottom: 0.25vh;
	}

	p {
		margin-top: 0.75vh;
	}
`;

export const InputAddressContainer = styled.div`
	width: 45vw;
	display: flex;
	justify-content: space-between;
`;

export const GrayLine2 = styled.div`
	height: 0.3vh;
	width: 95%;
	background-color: lightgray;
`;
