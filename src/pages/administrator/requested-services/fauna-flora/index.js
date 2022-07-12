import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const FaunaFloraOpcoes = () => {
	return (
		<>
			<ContainerBase>
				<ContainerColumn>
					<Link to="/admin/animais_silvestres">
						<Button text="Fiscalização de Animais Silvestres" />
					</Link>
					<Link to="/admin/maus_tratos">
						<Button text="Maus tratos à Animais" />
					</Link>
					<Link to="/admin/arvores">
						<Button text="Árvores" />
					</Link>
				</ContainerColumn>
			</ContainerBase>
		</>
	);
};
export default FaunaFloraOpcoes;
