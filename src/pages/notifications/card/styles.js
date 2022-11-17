import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	cursor: pointer;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	border: 0.25vh solid lightgray;
	border-radius: 10px;
	width: 97%;
	height: auto;
	margin-bottom: 10px;
	padding: 5px;

	:hover {
		background-color: lightgray;
	}
`;

export const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 10px;

	.collapsed {
		width: 100%;
		padding: 0px;
		justify-content: space-around;
	}
`;
