import styled from "styled-components";	

export const ListCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 30vh;
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
	margin-bottom: -10.5vh;
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
	width: 5rem;
	height: 2rem;
`;

export const ContainerColumn = styled.div`
	display: flex;
	width: 100%;	
	flex-direction: column;
	overflow-y: auto;

	h2 { 
		margin-top: 7vh;
		color: #133d59;
		text-align: left;
		padding-left: 2.25vw;
	}

	h4 {
		margin-bottom: 10vh;
		color: #1b262c;
		text-align: left;
		font-size: 14px;
		font-weight: normal;
		margin-top: -1.5vh;
		text-align: justify;
		padding-left: 2vw;
		padding-right: 2vw;
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

export const GrayLine = styled.div`
	height: 0.3vh;
	width: 100%;
	background-color: lightgray;
	margin-bottom: 33px;
`;