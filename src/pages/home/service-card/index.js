import React from "react";
import { CardContainer } from "./styles";

const Card = (props) => {
	return (
		<CardContainer>
			<img
				src={process.env.PUBLIC_URL + props.source}
				alt={props.titulo}
			/>
			<h4>{props.titulo} </h4>
			<h5> </h5>
		</CardContainer>
	);
};
export default Card;
