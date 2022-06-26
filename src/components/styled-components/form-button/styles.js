import styled from "styled-components";

export const Button = styled.button`
	height: 5.25vh;
	width: 100%;
	background: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
	border: none;
	border-radius: 5px;
	margin-top: 2.4vh;
	margin-bottom: 3vh;
	text-align: center;
	align-items: center;

	h3 {
		color: #ffffff;
		text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
		margin-top: 1.15vh;
	}

	:hover {
		cursor: pointer;
		box-shadow: 0 0 1em #0f4c75;
	}
`;
