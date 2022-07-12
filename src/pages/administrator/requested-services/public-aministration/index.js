import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const AdministracaoPublicaOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/conheca_os_gestores">
                        <Button text = "Conheça os Gestores" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default AdministracaoPublicaOpcoes;