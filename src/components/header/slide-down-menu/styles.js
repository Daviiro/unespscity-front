import styled from "styled-components";

export const Dropdown = styled.div`
	position: absolute;
	top: 58px;
	width: 300px;
	transform: translateX(-45%);
	background-color: var(--bg);
	border: var(1px solid #474a4d);
	border-radius: var(8px);
	padding: 1rem;
	overflow: hidden;
	transition: height var(500ms) ease;
`;
