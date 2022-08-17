import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const SensoriamentoRemotoOpcoes = () => {
	return (
		<>
			<ContainerBase>
				<ContainerColumn>
					<Link to="/admin/monitoramento-guardinha">
						<Button text="Monitoramento do guardinha" />
					</Link>
				</ContainerColumn>
			</ContainerBase>
		</>
	);
};
export default SensoriamentoRemotoOpcoes;
