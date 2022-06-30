import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const ContentContainer = styled.div`
	display: block;
	width: 80%;
	min-width: 764px;
	margin-left: auto;
	margin-right: auto;
	border: 0.25vh solid lightgray;
	border-radius: 10px;
`;

export const TopContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 10vh;
	flex-wrap: wrap;
`;

export const MidContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const DescriptionText = styled.div`
	word-wrap: break-word;
	max-width: 550px;
`;
