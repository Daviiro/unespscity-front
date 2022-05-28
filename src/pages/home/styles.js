import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const WrapContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 799px) {
		width: 86vw;
	}
	@media (min-width: 800px) and (max-width: 1279px) {
		width: 80vw;
	}
	@media (min-width: 1280px) {
		width: 86vw;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const GrayLine = styled.div`
	height: 0.3vh;
	width: 90%;
	background-color: lightgray;
	margin-top: 12.5vh;
	margin-bottom: 12.5vh;
`;

export const ContainerRow = styled.div`
	height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 12.5vh;
	margin-bottom: 12.5vh;
`;