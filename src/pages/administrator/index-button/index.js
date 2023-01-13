import React, { useState } from "react";
import { ButtonStyle } from "./styles";

const DashboardButton = (props) => {
    const [trigger, setTrigger] = useState(false);
	const toggleTrigger = () => {
		setTrigger(!trigger);
	};

    return (
        <ButtonStyle onClick = {toggleTrigger}>
            <h3> {props.description} </h3>
        </ButtonStyle>
    );
};

export default DashboardButton;