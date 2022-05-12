import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	align-items: center; 
	height: 100vh;
	width: 100%;
`;

export const SubHeader = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: -10.5vh;
	margin-bottom: 10vh;
	flex-wrap: wrap;
	padding-left: 2.5vw;

	h1 {
		margin-top: 4vh; 
		margin-left: 2.5vw; 
	}

	h4 { margin-top: 0vh; }
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
	display: flex; 
	flex-direction: column; 
	align-items: center; 
	justify-content: center; 
`;

export const InputAddressContainer = styled.div`
	width: 45vw;
	display: flex; 
	justify-content: space-between;
	
`;