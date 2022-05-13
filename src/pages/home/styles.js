import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const WrapContainer = styled.div`
	display: flex;
	flex-direcion: row;
	flex-wrap: wrap;
	justify-content: space-between;

	@media (max-width: 799px) {
		width: 96vw;
	}
	@media (min-width: 800px) and (max-width: 1279px) {
		width: 80vw;
	}
	@media (min-width: 1280px) {
		width: 65vw;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
