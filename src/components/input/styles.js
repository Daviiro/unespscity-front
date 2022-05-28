import styled from 'styled-components';

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
`;

export const InputTitle = styled.label`
    
`;

export const InputField = styled.input`
	height: 5.25vh;
	width: 45vw;
	border: none;
	outline: 0.25vh solid lightgray;
	border-radius: 5px;
	margin-top: 2.2vh;
	margin-bottom: 2.2vh;
	text-align: center;
	font-size: 16px;
	color: #1b262c;

	:focus {
		outline: 0.25vh solid #3282b8;
		color: #3282b8;
	}
`;