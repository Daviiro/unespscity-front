import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 0.25vh solid lightgray;
	border-radius: 10px;
	width: 97%;
	height: auto;
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
