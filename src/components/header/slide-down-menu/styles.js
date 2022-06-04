import styled from "styled-components";

export const StyledDropdownMenu = styled.div`
	position: absolute;
	top: 77px;
	width: 220px;
	transform: translateX(-84%);
	background-color: #1b262c;
	border: 1px solid #474a4d;
	border-radius: 8px;
	padding: 1rem;
	overflow: hidden;
	transition: height 500ms ease;
`;

export const StyledDropdownItem = styled.div`
	height: 50px;
	display: flex;
	align-items: center;
	border-radius: 8px;
	transition: background 500ms;
	padding: 0.5rem;
	color: #dadce1;

	:hover {
		background-color: #525357;
	}
`;

export const IconButton = styled.span`
	width: 20px;
	height: 20px;
	color: #dadce1;
`;
