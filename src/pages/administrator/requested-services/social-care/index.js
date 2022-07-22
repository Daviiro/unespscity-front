import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/styled-components/form-button";
import { ContainerBase, ContainerColumn } from "../components/styles";

const AssistenciaSocialOpcoes = () => {
    return (
        <>
            <ContainerBase>
                <ContainerColumn>
                    <Link to = "/admin/locais_uteis">
                        <Button text = "Locais Úteis" />
                    </Link>
                    <Link to = "/admin/telefones_uteis">
                        <Button text = "Telefones Úteis" />
                    </Link>
                    <Link to = "/admin/tumulos">
                        <Button text = "Cadastro de Túmulos e Falecidos" />
                    </Link>
                    <Link to = "/admin/programacao_cultural">
                        <Button text = "Programação Cultural" />
                    </Link>
                </ContainerColumn>
            </ContainerBase>
        </>
    );
};
export default AssistenciaSocialOpcoes;