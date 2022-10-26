import React, { useState } from "react";
import { MiniCardContainer } from "./styles";

const MiniCard = (props) => {
    const [trigger, setTrigger] = useState(false);
	const toggleTrigger = () => {
		setTrigger(!trigger);
	};

    return (
        <MiniCardContainer onClick = {toggleTrigger}>
            <img
                src = {process.env.PUBLIC_URL + props.source}
                alt = {props.titulo}
            />
            <h4> {props.titulo} </h4>
        </MiniCardContainer>
    );
};
export default MiniCard;