import styled from "styled-components";		//

export const ContainerColumn = styled.div`
	display: flex;
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
	}

	::-webkit-scrollbar {
		width: 12px; 
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

export const ListCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 35vh;
	width: 97.5%;
	border: 0.3vh solid lightgray;
	border-radius: 10px;
	margin-top: 1vh;
	margin-bottom: 4vh;

	img {
		align-self: center;
		height: 29vh;
		width: auto;
		opacity: 1;
		margin-right: 2vw;
	}
`;