import styled from 'styled-components';

export const PopupBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(49, 49, 49, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vh;
    height: 35%;
    width: 47.5vw;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 0.25vh solid lightgray;
`;

export const Title = styled.label`
`;

export const DescriptionInput = styled.textarea`
    width: 45vw;
    margin-top: 2.2vh;
    margin-bottom: 2.2vh;
	border: none;
	outline: 0.25vh solid lightgray;
	border-radius: 5px;
	font-size: 16px;
	color: #1b262c;
	text-align: center;
    
	:focus {
		outline: 0.25vh solid #3282b8;
		color: #3282b8;
	}
`;