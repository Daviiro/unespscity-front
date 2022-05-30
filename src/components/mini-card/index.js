import React, { useState } from "react";
import { MiniCardContainer } from "./styles";
import PopUp from "../home-subItems-popup-menu";

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
            <PopUp
				trigger={trigger}
				setTrigger={setTrigger}
				linkItems={props.linkItems}
			></PopUp>
        </MiniCardContainer>
    );
};
export default MiniCard;