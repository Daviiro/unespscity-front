import styled from "styled-components";

export const ButtonStyle = styled.div`
height: 4.25vh;
width: 26vw;
background: linear-gradient(to right, #0f4c75, #3282b8, #0f4c75);
border: none;
border-radius: 10px;
margin-top: 4vh;
margin-left: 18.5vw;
text-align: center;

h3 {
    font-size: 17pt;
    color: #ffffff;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

:hover {
    cursor: pointer;
    box-shadow: 0 0 1em #0f4c75;
}
`;