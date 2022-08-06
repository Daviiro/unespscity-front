import React, { useState } from "react";
import { CardContainer } from "./styles";
import PopUp from "../../../components/home-subItems-popup-menu";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
	const navigate = useNavigate();
	const [trigger, setTrigger] = useState(false);

	const toggleTrigger = () => {
		setTrigger(!trigger);
	};

	const handleClick = () => {
		if (props.isActive) {
			navigate("/botao_panico");
		}
		else {
			toggleTrigger();
		}
	}
	
	return (
		<CardContainer onClick={handleClick}>
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
