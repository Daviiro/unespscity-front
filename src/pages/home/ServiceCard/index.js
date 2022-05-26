import React, { useState } from "react";
import { CardContainer } from "./styles";
import PopUp from "../../../components/HomeSubItemsPopUpMenu";

const Card = (props) => {
	const [trigger, setTrigger] = useState(false);
	const toggleTrigger = () => {
		setTrigger(!trigger);
	};
	//console.log("trigger " + trigger);

	return (
		<CardContainer onClick={toggleTrigger}>
			<img
				src={process.env.PUBLIC_URL + props.source}
				alt={props.titulo}
			/>
			<h4>{props.titulo} </h4>
			<h5> </h5>
			<PopUp
				trigger={trigger}
				setTrigger={setTrigger}
				linkItems={props.linkItems}
			></PopUp>
		</CardContainer>
	);
};
export default Card;
