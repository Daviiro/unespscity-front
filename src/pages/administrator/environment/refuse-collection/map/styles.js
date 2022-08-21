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
	padding: 10px 0;
	display: flex;
	align-items: center;
	background-color: #ffffff;
	height: 60%;
	width: 250px;
	z-index: 1;
`;

export const AddInfoContainer = styled.div`
	margin: 0 auto;
	display: block;
	width: 500px;
	height: auto;
	text-align: center;
	padding: 25px;
	border-radius: 10px;
	border: 1px solid lightgrey;
`;
