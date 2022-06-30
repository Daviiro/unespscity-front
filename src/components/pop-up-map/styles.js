import styled from "styled-components";

export const ContainerBase = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Modal = styled.div`
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

export const ModalContent = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-50%, -50%);
	line-height: 1.4;
	background: #f1f1f1;
	padding: 10px;
	border-radius: 3px;
	max-width: 600px;
	min-width: 300px;
`;

export const CloseModal = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	padding: 5px 7px;
	cursor: pointer;
`;