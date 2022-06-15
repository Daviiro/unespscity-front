import React, { useState } from "react";

import Button from "../styled-components/form-button";
import DescriptionInput from "../description-input";
import InputPhotos from "../images-input";
import Input from "../input";
import PopUpMap from "../pop-up-map";

import { Container, InputAddressContainer, InputLocalization } from "./styles";

const Form = () => {
	const [trigger, setTrigger] = useState(false);
	const toggleTrigger = () => { setTrigger(!trigger); };

	return (
		<Container>
			<InputLocalization onClick = {toggleTrigger} >Usar Localização Atual</InputLocalization>
			<p>OU</p>
			<InputAddressContainer>
				<Input title="Endereço:" width="36vw" />
				<Input title="Nº" width="7vw" />
			</InputAddressContainer>
			<Input
				title="Ponto de Referência:"
				placeholder="Um local de referência proximo (Opcional)"
			/>
			<DescriptionInput
				title="Descrição:"
				placeholder="Conte-nos em detalhes sobre o problema encontrado."
			/>
			<InputPhotos />
			<Button text="Enviar" />
			<PopUpMap trigger = {trigger} setTrigger = {setTrigger} />
		</Container>
	);
};

export default Form;
