import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const SegurancaDefesaCivilOpcoes = () => {
	return (
		<>
			<ContainerBase>
				<ContainerColumn>
					<Link to="/admin/registro_roubos">
						<Button text="Registro de Roubos e Furtos" />
					</Link>
					<Link to="/admin/violencia-domestica">
						<Button text="Violência Doméstica" />
					</Link>
					<Link to="/admin/registro-acidentes">
						<Button text="Registro de Acidentes" />
					</Link>
				</ContainerColumn>
			</ContainerBase>
		</>
	);
};
export default SegurancaDefesaCivilOpcoes;
