import styled from "styled-components";

export const Details = styled.div`
	margin-top: 0;
	height: 63.5vw;
	width: 100%;
	box-shadow: 5px 5px 10px gray;
	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-y: auto;

	::-webkit-scrollbar {
		width: 12px;
	}
	::-webkit-scrollbar-track {
		background: lightgray;
		border-radius: 30px;
	}
	::-webkit-scrollbar-thumb {
		background: gray;
		border-radius: 30px;
	}
`;

export const AddFair = styled.div`
	padding: 0.5rem;
	width: 60%;
`;
