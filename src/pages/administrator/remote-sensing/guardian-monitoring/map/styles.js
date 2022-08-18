import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direciont: column;
	align-items: center;
	height: 100%;
	width: 100%;
`;

export const DirectionsContainer = styled.div`
	position: absolute;
	flex-direction: column;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: space-between;
	background-color: #ffffff;
	height: 270px;
	width: 200px;
	z-index: 1;
`;
