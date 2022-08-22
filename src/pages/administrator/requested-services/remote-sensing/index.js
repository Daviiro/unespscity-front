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
					<Link to="/admin/monitoramento-pessoas-veiculos">
						<Button text="Monitoramento do trânsito" />
					</Link>
				</ContainerColumn>
			</ContainerBase>
		</>
	);
};
export default SensoriamentoRemotoOpcoes;
