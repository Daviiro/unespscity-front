import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../domestic-animals/adoption-animals/styles";

const FamiliasCarentesOpcoes = () => {
    return (
        <>
            <ContainerBase style = {{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ContainerColumn>
                    <Link to = "/familias_carentes_registro">
                        <Button text = "Registrar uma Familia Carente" />
                    </Link>
                    <Link to = "/familias_carentes_lista">
                        <Button text = "Ver familias carentes para ajudar" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default FamiliasCarentesOpcoes;