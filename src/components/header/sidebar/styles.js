import styled from "styled-components";
import { Link } from "react-router-dom";

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;

	.overlay {
		background: rgba(49, 49, 49, 0.8);
		cursor: default;
	}
`;

export const SidebarNav = styled.nav`
	background: blue;
	width: 16.5rem;
	height: 100vh;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
	transition: 300ms;
	box-shadow: 2px 0px 7px black;
	z-index: 10;
	overflow-y: hidden;
`;

export const SidebarWrap = styled.div`
	width: 100%;
`;

export const LogoSidebar = styled.img`
	width: 50px;

	margin: 2rem 0 3rem 6rem;
`;

export const NavIcon = styled(Link)`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
