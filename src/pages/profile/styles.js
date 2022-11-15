import styled from "styled-components";

export const HistoryCard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	border: 0.25vh solid lightgray;
	border-radius: 10px;
	width: 97%;
	height: 80px;
	margin-bottom: 10px;
	padding: 5px;

	.description-style {
		max-width: 400px;
		word-wrap: break-word;
	}

	:hover {
		background-color: lightgray;
	}
`;
