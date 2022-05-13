import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 25vh;
	min-height: 11rem;
	max-height: 15rem;
	width: 13vw;
	min-width: 7rem;
	max-width: 12rem;
	border: 0.25vh solid lightgray;
	border-radius: 5px;
	justify-content: space-between;
	box-shadow: 5px 5px 10px gray;
	align-items: center;
	text-align: center;
	margin: 0.7rem;

	:hover {
		cursor: pointer;
		box-shadow: 0 0 4em #0f4c75;
	}

	img {
		height: 12vh;
		min-height: 4rem;
		width: auto;
		opacity: 1;
	}

	h4 {
		font-size: 15px;
		margin-bottom: -3vh;
		color: #1b262c;
	}

	h5 {
		color: #3282b8;
	}
`;
