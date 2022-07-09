import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./styles";

const InputLocalization = () => {
	return (
		<Link to="/localizacao" target="_blank" rel="noopener noreferrer">
			<Button> Usar Localização Atual </Button>
		</Link>
	);
};

export default InputLocalization;
