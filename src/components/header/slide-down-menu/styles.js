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

export const StyledDropdownItem = styled.button`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	border-radius: 8px;
	padding: 0.5rem;
	color: #dadce1;
	background-color: #1b262c;
	border: none;
	font-size: medium;
	:hover {
		background-color: #525357;
		transition: background 500ms;
	}
`;

export const IconButton = styled.span`
	width: 20px;
	height: 20px;
	color: #dadce1;
	margin-right: 8px;
`;
