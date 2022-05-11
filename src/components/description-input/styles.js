import styled from 'styled-components';

export const Container = styled.div`
    width: 98vw;
    display: flex;
        flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.label`

`;

export const TextInput = styled.textarea`
	width: 50%;
	border: none;
	outline: 0.25vh solid lightgray;
	border-radius: 5px;
	margin-top: 2.2vh;
	margin-bottom: 2.2vh;
	font-size: 16px;
	color: #1b262c;
    
	:focus {
		outline: 0.25vh solid #3282b8;
		color: #3282b8;
	}
`;