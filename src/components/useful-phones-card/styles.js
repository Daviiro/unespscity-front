import styled from 'styled-components';

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    height: 20rem; 
    width: 17rem; 
    border: 0.25vh solid lightgray;
	border-radius: 10px;
	box-shadow: 5px 5px 10px gray;
    
    img {
        height: 6rem; 
        width: 6rem; 
    }
`;

export const Title = styled.h2`        
    margin-bottom: 0;
    text-align: center;
`; 

export const SubTitle = styled.h3`
    margin-bottom: 0;
`;

export const Text = styled.p`
    text-align: center;
`;
