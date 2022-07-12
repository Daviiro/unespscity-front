import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const SegurancaDefesaCivilOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/registro_roubos">
                        <Button text = "Registro de Roubos e Furtos" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default SegurancaDefesaCivilOpcoes;