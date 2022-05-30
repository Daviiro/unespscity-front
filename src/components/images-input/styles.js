import styled from 'styled-components';

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label {
        margin-bottom: 5px;
    }
    
    img {
        height: 3rem;
        width: auto;
        margin-top: 5px;
        margin-right: 5px;
    }

    div { 
        display: flex; 
        flex-direction: row; 
    }
`;