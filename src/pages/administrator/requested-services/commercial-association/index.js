import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const AssociacaoComercialOpcoes = () => {
	return (
		<>
			<ContainerBase>
				<ContainerColumn>
					<Link to="/admin/comercio-local">
						<Button text="Ofertas do Comércio Local" />
					</Link>
				</ContainerColumn>
			</ContainerBase>
		</>
	);
};
export default AssociacaoComercialOpcoes;
