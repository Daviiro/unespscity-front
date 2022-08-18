import styled from "styled-components";

export const ChoiceContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: -50px 0 50px;
`;

export const ChoiceSpan = styled.span`
	font-size: 1.5rem;
	margin-bottom: -3vh;
	text-align: center;
	padding: 10px;
	color: ${(props) => props.toggle};
`;
