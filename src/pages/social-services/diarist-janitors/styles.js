import styled from "styled-components";

export const ContainerBase = styled.div`
	display: block;
	justify-content: space-around;
	height: 100vh;
	width: 100%;
`;

export const ContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-bottom: 10vh;
	flex-wrap: wrap;
`;

export const FormContainer = styled.div`
	height: 90%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-bottom: 4vh;

	p {
		margin: 0vh;
	}
`;

export const InputAddressContainer = styled.div`
	width: 45vw;
	margin-top: 3vh;
	display: flex;
	justify-content: space-between;
`;

export const InputLocalization = styled.button`
	margin-top: 10px;
`;
