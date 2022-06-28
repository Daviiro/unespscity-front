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
	width: 47.5vw;
	border: 0.25vh solid lightgray;
	border-radius: 10px;
	box-shadow: 5px 5px 10px gray;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 5vh;
	overflow-y: auto;

    h3 { color: #1b262c; }
	h4 { color: #133d59; }
	h5 { 
		color: gray;
		margin-bottom: -1vh; 
	}
	h6 { margin-bottom: -1vh; }
`;

export const ChartContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	width: 100%;
	margin-top: 12.5vh;

	h3 {
		margin-top: 0vh;
		margin-bottom: 5vh;
	}
`;