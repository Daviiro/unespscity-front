import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
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

export const RoutesContainer = styled.div`
	display: flex;
	widtdh: 100%
	flex-direction: column;
	height: auto;
	justify-content: center;
	
	border: 0.25vh solid lightgray;
	border-radius: 10px;
	overflow-x: auto;
	overflow-y: hidden;
	margin-top: 30px;
	margin-bottom: 30px;
`;

export const SingleRouteContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px 50px;
	align-text: center;
	:hover {
		background-color: lightgrey;
	}
`;
