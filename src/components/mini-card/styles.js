import styled from "styled-components";

export const MiniCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 15vh;
	width: 8vw;
	border: 0.25vh solid lightgray;
	border-radius: 5px;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	margin: 0.5rem;
	min-width: 97px;
	min-height: 120px;
	img {
		height: 9vh;
		width: auto;
		opacity: 1;
	}

	h4 {
		font-size: 14px;
		margin-bottom: 10vh;
		color: #1b262c;
	}

	:hover {
		cursor: pointer;
	}
`;
