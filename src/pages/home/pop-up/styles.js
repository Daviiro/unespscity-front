import styled from "styled-components";

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

export const PopupContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    padding: 5vh;
    width: 65%;
    background-color: #FFFFFF;
    border-radius: 10px;
`;