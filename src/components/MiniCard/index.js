import React from "react";
import { MiniCardContainer } from "./styles";

const MiniCard = (props) => {
    return (
        <MiniCardContainer>
            <img
                src = {process.env.PUBLIC_URL + props.source}
                alt = {props.titulo}
            />
            <h4> {props.titulo} </h4>
        </MiniCardContainer>
    );
};
export default MiniCard;