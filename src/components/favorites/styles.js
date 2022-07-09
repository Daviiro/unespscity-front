import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	height: 7rem;
	margin-left: auto;
	margin-right: auto;
	border: 0.25vh solid lightgray;
	border-radius: 10px;
	overflow-x: auto;
	overflow-y: hidden;
	margin-top: 30px;
	margin-bottom: 30px;

	::-webkit-scrollbar {
		width: 7px;
		scrollbar-width: 7px;
	}
	::-webkit-scrollbar-track {
		background: lightgray;
		border-radius: 10px;
	}
	::-webkit-scrollbar-thumb {
		background: gray;
		border-radius: 10px;
	}

	@media (max-width: 799px) {
		width: 85vw;
	}
	@media (min-width: 800px) and (max-width: 1279px) {
		width: 79vw;
	}
	@media (min-width: 1280px) and (max-width: 1510px) {
		width: 85vw;
	}
	@media (min-width: 1511px) and (max-width: 1708px) {
		width: 75vw;
	}
	@media (min-width: 1708px) {
		width: 65vw;
	}
`;
