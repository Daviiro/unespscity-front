import React, { useState } from "react";
import { ButtonStyle } from "./styles";
import PopUp from "../../../components/home-subItems-popup-menu";

const DashboardButton = (props) => {
    const [trigger, setTrigger] = useState(false);
	const toggleTrigger = () => {
		setTrigger(!trigger);
	};

    return (
        <ButtonStyle onClick = {toggleTrigger}>
            <h3> {props.description} </h3>
            <PopUp
				trigger={trigger}
				setTrigger={setTrigger}
				linkItems={props.linkItems}
			></PopUp>
        </ButtonStyle>
    );
};

export default DashboardButton;