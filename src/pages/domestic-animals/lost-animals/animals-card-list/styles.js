import styled from "styled-components";	

export const ListCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 40vh;
	width: 97.5%;
	border: 0.3vh solid lightgray;
	border-radius: 10px;
	margin-top: 1vh;
	margin-bottom: 4vh;
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 32vh;
	width: 100%;
`;

export const ButtonDiv = styled.div`
    width: 100%;
	height: 8vh;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const Button = styled.button`
	margin-right: 2rem;
	width: 8rem;
	height: 2rem;

	:hover { cursor: pointer; }
`;

export const ContainerColumn = styled.div`
	display: flex;
	width: 75%;	
	flex-direction: column;
	overflow-y: auto;

	h2 { 
		margin-top: 7vh;
		color: #133d59;
		text-align: left; 
	}

	h3 {
		color: #133d59;
		text-align: left;
		margin-top: -1.9vh;
		margin-left: 0.5vw;
	}

	h4 {
		margin-bottom: 10vh;
		color: #1b262c;
		text-align: left;
		font-size: 14px;
		font-weight: normal;
		margin-top: -1.5vh;
		margin-left: 1vw;
		text-align: justify;
		padding-right: 1vw;
	}

	::-webkit-scrollbar {
		width: 8px; 
	}
	::-webkit-scrollbar-track {
		background: lightgray;
		border-radius: 30px;
	}
	::-webkit-scrollbar-thumb {
		background: gray;
		border-radius: 30px;
	}
`;