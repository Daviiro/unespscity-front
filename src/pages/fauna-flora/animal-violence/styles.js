import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const SubHeader = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: -10.5vh;
	margin-bottom: 3vh;
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
	margin-bottom: 5vh;
	display: flex; 
	flex-direction: column; 
	align-items: center; 
	justify-content: center; 
`;

export const Details = styled.div`
	height: 95%;
	width: 47.5vw;
	border: 0.25vh solid lightgray;
	border-radius: 10px;
	box-shadow: 5px 5px 10px gray;
	display: flex; 
	flex-direction: column; 
	align-items: center; 
	justify-content: center;
	padding-bottom: 4vh;
`;

export const ServiceDescription = styled.div`
	margin-top: -12.75vh;
	height: 25vh;
    width: 45vw;
    display: flex;
	flex-direction: column;
	align-items: center;

    h3 { color: gray; }
`;

export const GrayLine2 = styled.div`
	margin-top: -12.75vh;
	margin-bottom: 5vh;
	height: 0.4vh;
	width: 90vw;
	background-image: linear-gradient(to right, #ffffff, gray, #ffffff);
`;

export const InputAddressContainer = styled.div`
	margin-top: 0vh;
	width: 45vw;
	display: flex; 
	justify-content: space-between;
`;

export const ChartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	width: 100%;
	margin-top: 12.5vh;

	h3 {
		margin-top: 0vh;
		margin-bottom: 5vh;
	}
`;