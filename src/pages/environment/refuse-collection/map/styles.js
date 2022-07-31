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
	padding: 10px 0;
	display: flex;
	align-items: center;
	background-color: #ffffff;
	height: 40%;
	width: 250px;
	z-index: 1;
`;
