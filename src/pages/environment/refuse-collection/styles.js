import styled from "styled-components";

export const Page = styled.div`
	width: 100%;
	height: 100vh;
	background-image: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
`;

export const Container = styled.div`
	width: 480px;
	height: 8rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	form select {
		width: 100%;
		border-radius: 0.25rem;
	}

	form select:focus-visible {
		outline: dotted 1px rgb(255, 255, 255, 0.4);
	}

	.space-control {
		min-width: 480px;
	}
`;
