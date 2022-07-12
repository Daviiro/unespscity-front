import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const FamiliasCarentesOpcoes = () => {
	return (
		<>
			<ContainerBase>
				<ContainerColumn>
					<Link to="/admin/familias-carentes-list">
						<Button text="Registro de Familias Carentes" />
					</Link>
					<Link to="/admin/moradores_rua">
						<Button text="Moradores de Rua" />
					</Link>
					<Link to="/admin/descarte_solidario">
						<Button text="Descarte Solidário" />
					</Link>
				</ContainerColumn>
			</ContainerBase>
		</>
	);
};
export default FamiliasCarentesOpcoes;
