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
	margin-bottom: -45vh;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-left: 7.5vw;
`;

export const GrayLine = styled.div`
	height: 0.3vh;
	width: 93%;
	background-color: lightgray;
	margin-top: 4vh;
`;

export const ChartContainer = styled.div`
	display: flex;
	height: 60vh;
	width: 93%;
	min-width: 960px;
	margin-top: 10vh;
	flex-direction: row;
	border: 0.35vh solid lightgray;
	border-radius: 20px;
	justify-content: center;
	align-items: center;
`;

export const ContainerColumn = styled.div`
	height: 250vh;
	width: 70vw;
	display: flex;
	flex-direction: column;

	h1 {
		margin-top: 0vh;
		margin-left: 2.5vw;
	}
`;

export const ContainerRow = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;

	h1 {
		margin-top: 0vh;
		margin-left: 2.5vw;
	}
`;

export const MapContainer = styled.div`
	width: 100%;
	margin-top: 15vh;
	.centered-content {
		padding: 0.5rem;
		display: flex;
		justify-content: center;
	}
`;
