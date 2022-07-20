import styled from "styled-components";

export const Details = styled.div`
	height: 23.75vw;
	width: 47.5vw;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		margin-top: 5vh;
	}

	a {
		color: #0f4c75;
		font-size: 14px;
		font-weight: bold;
		text-decoration: none;
		margin-bottom: 0.5vh;
	}
`;

export const ChartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	width: 100%;
	margin-top: 12.5vh;

	h3 {
		margin-top: 0vh;
		margin-bottom: 5vh;
	}
`;
