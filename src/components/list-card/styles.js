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

	h4 {
		margin-bottom: 10vh;
		color: #1b262c;
		text-align: left;
		font-weight: normal;
		margin-top: -1.5vh;
		margin-left: 1vw;
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